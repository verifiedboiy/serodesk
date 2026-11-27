import './styles.css'
import './product-prices.css'
import { fetchApplications, updateApplicationStatus } from './applicationsStorage.js'

const icon = (name, size = 20) => {
  const icons = {
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    download:'<path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M5 21h14"/>',
    arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>'
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||''}</svg>`
}

const app = document.querySelector('#adminApp')
const escapeHtml=(value='')=>String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))
app.innerHTML = `
  <header class="admin-nav"><a class="brand" href="/home.html"><span class="brand-mark">S</span><span>Sero<span>Desk</span></span></a><div class="admin-nav-right"><span class="secure-label">${icon('shield',16)} Secure Application Review</span><a class="return-link" href="/home.html">Candidate Website</a></div></header>
  <main class="admin-main"><aside class="admin-sidebar"><p>ADMINISTRATION</p><button class="admin-side-active">${icon('users',18)} Applications <span id="sidebarCount">0</span></button><a class="admin-side-link" href="#productPricing">Product prices</a></aside>
    <section class="admin-content">
      <section class="price-management" id="productPricing"><div class="admin-heading"><div><span>SHOP MANAGEMENT</span><h1>Product prices</h1><p>Set the current price for each required kit product.</p></div></div><form id="productPriceForm"><div class="product-price-grid"></div><div class="price-form-actions"><button class="export-btn" type="submit">Save prices</button><span id="priceSaveStatus" role="status"></span></div></form></section>
      <div class="admin-heading"><div><span>RECRUITMENT OPERATIONS</span><h1>Candidate Applications</h1><p>Review submitted browser applications and eligibility status.</p></div><button class="export-btn" id="exportBtn">${icon('download',16)} Export CSV</button></div>
      <div class="admin-toolbar"><label><span>${icon('search',17)}</span><input id="searchInput" type="search" placeholder="Search name, email, bank, or status"></label><select id="statusFilter"><option value="">All statuses</option><option>Pending</option><option>Eligible</option><option>Ineligible</option></select></div>
      <div class="application-table"><div class="table-head"><span>Candidate</span><span>Contact</span><span>Availability</span><span>Submitted</span><span>Status</span><span></span></div><div id="applicationRows"></div></div>
    </section>
  </main>
  <div class="admin-modal" id="detailModal" aria-hidden="true"><div class="detail-panel"><button class="detail-close" id="detailClose" aria-label="Close">${icon('close',20)}</button><div id="detailContent"></div></div></div>
`

const rows=document.querySelector('#applicationRows')
const detailModal=document.querySelector('#detailModal')
const productPrices=[
  {id:'laptop',name:'Sero Desk Laptop'},
  {id:'headset',name:'Sero Desk Headset'},
  {id:'licence',name:'Sero Desk Software Licence'},
  {id:'bundle',name:'Sero Desk Setup Bundle'}
]
const priceGrid=document.querySelector('.product-price-grid')
const priceForm=document.querySelector('#productPriceForm')
const priceSaveStatus=document.querySelector('#priceSaveStatus')
priceGrid.innerHTML=productPrices.map(product=>`<label class="product-price-field"><span>${escapeHtml(product.name)}</span><div><span>$</span><input type="number" min="0" step="any" name="${product.id}" required aria-label="${escapeHtml(product.name)} price"></div></label>`).join('')

async function loadProductPrices(){
  try{
    const response=await fetch('/api/product-prices',{cache:'no-store'})
    if(!response.ok)throw new Error(`Price request failed (${response.status}).`)
    const prices=await response.json()
    productPrices.forEach(product=>{
      const input=priceForm.elements.namedItem(product.id)
      const price=prices[product.id]
      if(Number.isFinite(price)&&price>=0)input.value=String(price)
    })
  }catch(error){
    console.error(error)
    priceSaveStatus.textContent='Unable to load prices. Try refreshing this page.'
  }
}
priceForm.addEventListener('submit',async event=>{
  event.preventDefault()
  const prices={}
  for(const product of productPrices){
    const value=priceForm.elements.namedItem(product.id).valueAsNumber
    if(!Number.isFinite(value)||value<0){
      priceSaveStatus.textContent=`Enter a valid non-negative price for ${product.name}.`
      return
    }
    prices[product.id]=value
  }
  const saveButton=priceForm.querySelector('button[type="submit"]')
  saveButton.disabled=true
  priceSaveStatus.textContent='Saving prices…'
  try{
    const response=await fetch('/api/product-prices',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(prices)})
    if(!response.ok){
      const result=await response.json()
      throw new Error(result.error||`Price save failed (${response.status}).`)
    }
    priceSaveStatus.textContent='Prices saved. The shop and checkout now use these prices.'
  }catch(error){
    console.error(error)
    priceSaveStatus.textContent=`Unable to save prices: ${error.message}`
  }finally{
    saveButton.disabled=false
  }
})
loadProductPrices()
let applications=[]
const refreshApplications=()=>{fetchApplications().then(apps=>{applications=apps||[];render()})}
refreshApplications()

const dateLabel=value=>value?new Date(value).toLocaleString(undefined,{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'}):'Recently submitted'

function render(){
  const search=document.querySelector('#searchInput').value.toLowerCase().trim()
  const status=document.querySelector('#statusFilter').value
  const filtered=applications.filter(app=>{const text=[app.fullName,app.email,app.phone,app.bank,app.backup,app.status].join(' ').toLowerCase();return(!search||text.includes(search))&&(!status||app.status===status)})
  document.querySelector('#sidebarCount').textContent=applications.length
  if(!filtered.length){rows.innerHTML=`<div class="empty-state"><span>${icon('users',28)}</span><h2>No applications found</h2><p>Submitted applications will appear here automatically.</p></div>`;return}
  rows.innerHTML=filtered.map((app,index)=>`<div class="table-row"><div class="candidate-cell"><span class="candidate-avatar">${escapeHtml((app.fullName||'U').charAt(0).toUpperCase())}</span><div><strong>${escapeHtml(app.fullName||'Unnamed Applicant')}</strong><small>${escapeHtml(app.email||'No email')}</small></div></div><div><strong>${escapeHtml(app.phone||'—')}</strong><small>${escapeHtml(app.zip||'No ZIP')}</small></div><div><strong>${escapeHtml(app.availability||'Not specified')}</strong><small>${escapeHtml(app.experience||'Experience not specified')}</small></div><div><strong>${dateLabel(app.submittedAt)}</strong></div><div><select class="status-select" data-index="${applications.indexOf(app)}"><option${app.status==='Pending'?' selected':''}>Pending</option><option${app.status==='Eligible'?' selected':''}>Eligible</option><option${app.status==='Ineligible'?' selected':''}>Ineligible</option></select></div><button class="view-btn" data-index="${applications.indexOf(app)}">View ${icon('arrow',14)}</button></div>`).join('')

  document.querySelectorAll('.status-select').forEach(select=>select.addEventListener('change',()=>{updateApplicationStatus(applications[Number(select.dataset.index)].id,select.value);applications[Number(select.dataset.index)].status=select.value;render()}))
  document.querySelectorAll('.view-btn').forEach(button=>button.addEventListener('click',()=>openDetail(applications[Number(button.dataset.index)])))
}

function openDetail(app){
  document.querySelector('#detailContent').innerHTML=`<div class="detail-header"><span>APPLICATION REVIEW</span><h2>${escapeHtml(app.fullName||'Unnamed Applicant')}</h2><p>${escapeHtml(app.email||'No email')} • ${escapeHtml(app.phone||'No phone')}</p></div><div class="detail-grid">
    ${detailItem('Personal','Legal Full Name',app.fullName)}${detailItem('Personal','Email Address',app.email)}${detailItem('Personal','Phone Number',app.phone)}${detailItem('Personal','Residence Address',app.address)}${detailItem('Personal','ZIP Code',app.zip)}${detailItem('Personal','LinkedIn',app.linkedin||'N/A')}
    ${detailItem('Payment','Primary Bank',app.bank)}${detailItem('Payment','Account Age',app.accountAge)}${detailItem('Payment','Account Range',app.accountRange)}${detailItem('Payment','Backup Method',app.backup)}
    ${detailItem('Eligibility','Laptop / Computer',app.computer)}${detailItem('Eligibility','Availability',app.availability)}${detailItem('Eligibility','Remote Experience',app.experience)}${detailItem('Eligibility','Submission Status',app.status||'Pending')}
  </div><div class="detail-footer"><span>Submitted ${dateLabel(app.submittedAt)}</span><button id="detailCloseBtn">Close</button></div>`
  detailModal.classList.add('open');detailModal.setAttribute('aria-hidden','false');document.querySelector('#detailCloseBtn').addEventListener('click',closeDetail)
}
function detailItem(section,label,value){return `<div class="detail-item"><span>${escapeHtml(section)} • ${escapeHtml(label)}</span><strong>${escapeHtml(value||'Not provided')}</strong></div>`}
function closeDetail(){detailModal.classList.remove('open');detailModal.setAttribute('aria-hidden','true')}
document.querySelector('#detailClose').addEventListener('click',closeDetail);detailModal.addEventListener('click',event=>{if(event.target===detailModal)closeDetail()})
document.querySelector('#searchInput').addEventListener('input',render);document.querySelector('#statusFilter').addEventListener('change',render)
document.querySelector('#exportBtn').addEventListener('click',()=>{const fields=['fullName','email','phone','address','zip','linkedin','bank','accountAge','accountRange','backup','computer','availability','experience','status','submittedAt'];const csv=[fields.join(','),...applications.map(app=>fields.map(field=>`"${String(app[field]||'').replace(/"/g,'""')}"`).join(','))].join('\n');const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));link.download='serodesk-applications.csv';link.click();URL.revokeObjectURL(link.href)})
window.addEventListener('storage',event=>{if(event.key==='serodesk_applications'||event.key===null)refreshApplications()})
setInterval(refreshApplications,2000)
render()

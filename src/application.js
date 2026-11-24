import './styles.css'

const icon = (name, size = 20) => {
  const icons = {
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    laptop:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>'
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||''}</svg>`
}

const cashAppLogo = `<svg class="brand-logo" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#0b0d0f"/><path d="M12 29.5c4.2-1.5 12.8-5.2 15.2-12.1 1.1-3.2-.6-6.1-4.2-6.9-3.3-.7-6.9.8-8.6 3.5" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><path d="m24.7 10.1-1.5-4M12.8 27.7l1.3 4" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/></svg>`
const zelleLogo = `<svg class="brand-logo" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#6d1ed4"/><path d="M12 12h16l-16 16h16" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
const appleLogo = `<svg class="brand-logo" viewBox="0 0 40 40" aria-hidden="true"><path d="M27.5 21.1c0-4.3 3.5-6.4 3.7-6.5-2-3-5.1-3.4-6.2-3.4-2.6-.3-5.1 1.5-6.4 1.5-1.3 0-3.4-1.5-5.6-1.4-2.9 0-5.6 1.7-7.1 4.3-3 5.2-.8 12.9 2.1 17.1 1.4 2.1 3.1 4.4 5.4 4.3 2.2-.1 3-1.4 5.7-1.4 2.6 0 3.4 1.4 5.7 1.3 2.3 0 3.8-2.1 5.2-4.2 1.6-2.4 2.3-4.7 2.3-4.8-.1 0-4.8-1.8-4.8-6.8Z" fill="#f5f7fa"/><circle cx="23.8" cy="7.2" r="3.1" fill="#f5f7fa"/></svg>`
const chimeLogo = `<svg class="brand-logo" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#1ca86a"/><circle cx="20" cy="20" r="10" fill="none" stroke="#fff" stroke-width="4"/><circle cx="20" cy="20" r="3.2" fill="#fff"/></svg>`
const bankLogo = `<svg class="brand-logo" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#111827"/><path d="M6 15 20 8l14 7H6Zm4 4h5v11h-5V19Zm10 0h5v11h-5V19Zm10 0h5v11h-5V19ZM5 33h30v3H5v-3Z" fill="#91b4ee"/></svg>`

const app = document.querySelector('#app')
app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#" aria-label="SeroDesk home"><span class="brand-mark">S</span><span>Sero<span>Desk</span></span></a>
    <nav aria-label="Primary navigation"><a href="#overview">Overview</a><a href="#requirements">Requirements</a></nav>
    <button class="nav-cta" id="navApplyBtn">Apply Now ${icon('arrow',16)}</button>
  </header>

  <main>
    <section class="hero" id="overview">
      <div class="hero-copy"><div class="eyebrow"><span></span> REMOTE OPPORTUNITIES <b>•</b> NOW HIRING</div>
        <h1>Work From <em>Home</em></h1>
        <p class="hero-sub">Build a flexible career on your schedule.<br>Professional support. Reliable income.</p>
        <div class="rate-card"><div><span>COMPENSATION</span><strong>$20 - $40 <small>/ hour</small></strong></div><div class="rate-divider"></div><div><span>SCHEDULE</span><strong>Flexible</strong></div></div>
        <button class="primary-btn" id="heroApplyBtn">Apply Now ${icon('arrow',19)}</button>
      </div>
      <div class="hero-visual"><div class="orbital orbital-one"></div><div class="orbital orbital-two"></div><div class="status-card"><div class="status-top"><span><i></i> Applications Open</span><b>2026</b></div><div class="laptop-art">${icon('laptop',62)}</div><div class="status-bottom"><div><span>ROLE TYPE</span><strong>Remote</strong></div><div><span>AVAILABILITY</span><strong>Immediate</strong></div></div></div></div>
    </section>

    <section class="trust-strip" id="requirements">
      <div><span class="metric-icon">${icon('globe')}</span><p><strong>100% Remote</strong><small>Work from anywhere</small></p></div>
      <div><span class="metric-icon">${icon('clock')}</span><p><strong>Flexible Hours</strong><small>Choose your schedule</small></p></div>
      <div><span class="metric-icon">${icon('users')}</span><p><strong>Dedicated Support</strong><small>Team assistance</small></p></div>
      <div><span class="metric-icon">${icon('shield')}</span><p><strong>Secure Process</strong><small>Protected application</small></p></div>
    </section>

    <section class="application hidden" id="application">
      <div class="security-note">${icon('shield',23)}<p><strong>Trust &amp; Security</strong><span>Your information is protected with 256-bit SSL encryption and kept strictly safe and secure.</span></p></div>
      <div class="form-shell">
        <aside class="form-sidebar"><p class="sidebar-label">APPLICATION</p><h2>Candidate Eligibility</h2>
          <div class="step-list"><button class="step active" data-step="1"><span>01</span><p>Personal<small>Identity &amp; contact</small></p></button><button class="step" data-step="2"><span>02</span><p>Preferences<small>Work &amp; payment</small></p></button></div>
          <div class="privacy"><span>${icon('lock',16)}</span><p><strong>Privacy protected</strong><small>Demo application only</small></p></div>
        </aside>

        <form class="form-main" id="applicationForm" novalidate>
          <div class="step-panel active" data-panel="1"><div class="panel-head"><div><span>STEP 01</span><h3>Personal Information</h3></div><b>1 of 2</b></div>
            <div class="field-grid">
              <label class="field full"><span>Legal Full Name *</span><input name="fullName" id="fullName" required autocomplete="name" maxlength="80" placeholder="Enter your legal name"></label>
              <label class="field"><span>Email Address *</span><input name="email" id="email" type="email" required autocomplete="email" maxlength="120" placeholder="name@domain.com"></label>
              <label class="field"><span>Phone Number *</span><input name="phone" id="phone" type="tel" required inputmode="numeric" autocomplete="tel" maxlength="14" placeholder="(555) 000-0000"></label>
              <label class="field"><span>ZIP Code *</span><input name="zip" id="zip" required inputmode="numeric" autocomplete="postal-code" maxlength="10" pattern="[0-9]{5}(-[0-9]{4})?" placeholder="Enter ZIP code"></label>
              <label class="field"><span>LinkedIn Profile <small>Optional</small></span><input name="linkedin" id="linkedin" type="url" maxlength="200" placeholder="https://linkedin.com/in/..."></label>
            </div>
          </div>

          <div class="step-panel" data-panel="2"><div class="panel-head"><div><span>STEP 02</span><h3>Work &amp; Payment Preferences</h3></div><b>2 of 2</b></div>
            <div class="payment-section"><h4>Primary Direct Deposit Preference</h4><p>Used only to identify where salary should be disbursed if hired. No account or routing numbers are requested.</p>
              <div class="field-grid">
                <label class="field full"><span>Primary Bank Name *</span><input name="bank" required placeholder="Enter your bank or credit union name"></label>
                <fieldset class="field full"><legend>Bank Account Age *</legend><div class="choice-row"><label><input type="radio" name="accountAge" value="New" required><span>New</span></label><label><input type="radio" name="accountAge" value="Established"><span>Established Bank</span></label></div></fieldset>
                <fieldset class="field full account-range hidden"><legend>Account Age Range *</legend><div class="choice-row" id="accountRangeOptions"></div></fieldset>
                <fieldset class="field full"><legend>Backup / Secondary Payment Option *</legend><div class="backup-grid">
                  <label><input type="radio" name="backup" value="Cash App" required><span>${cashAppLogo}<b>Cash App</b></span></label>
                  <label><input type="radio" name="backup" value="Zelle"><span>${zelleLogo}<b>Zelle</b></span></label>
                  <label><input type="radio" name="backup" value="Apple Pay"><span>${appleLogo}<b>Apple Pay</b></span></label>
                  <label><input type="radio" name="backup" value="Chime"><span>${chimeLogo}<b>Chime</b></span></label>
                  <label><input type="radio" name="backup" value="Secondary Bank"><span>${bankLogo}<b>Secondary Bank</b></span></label>
                </div></fieldset>
              </div>
            </div>
            <div class="questions"><fieldset><legend>Do you have a functional laptop or computer for remote work? *</legend><div class="choice-row"><label><input type="radio" name="computer" value="Yes" required><span>Yes</span></label><label><input type="radio" name="computer" value="No"><span>No</span></label></div></fieldset>
              <fieldset><legend>How many hours per week are you available? *</legend><div class="choice-row three"><label><input type="radio" name="availability" value="Full-Time" required><span>Full-Time</span></label><label><input type="radio" name="availability" value="Part-Time"><span>Part-Time</span></label><label><input type="radio" name="availability" value="Flexible/Contract"><span>Flexible / Contract</span></label></div></fieldset>
              <fieldset><legend>Prior remote or independent work experience? *</legend><div class="choice-row"><label><input type="radio" name="experience" value="Yes" required><span>Yes</span></label><label><input type="radio" name="experience" value="No"><span>No</span></label></div></fieldset>
            </div>
          </div>
          <div class="form-actions"><button type="button" class="back-btn" id="backBtn">Back</button><span id="formError" role="alert"></span><button type="button" class="next-btn" id="nextBtn">Continue ${icon('arrow',17)}</button><button type="submit" class="submit-btn" id="submitBtn">Check Eligibility — Submit Application ${icon('arrow',17)}</button></div>
        </form>
      </div>
    </section>
  </main>
  <div class="modal-backdrop" id="successModal" aria-hidden="true"><div class="success-modal" role="dialog" aria-modal="true"><button class="modal-close" aria-label="Close">×</button><div class="success-icon">${icon('check',30)}</div><span>APPLICATION CONFIRMATION</span><h2 id="successTitle">Application Submitted Successfully!</h2><p id="successMessage">Thank you for applying. Our recruiting team is reviewing your profile. Confirmation and next steps will be sent to your email address within 24 to 48 hours.</p><div class="success-actions"><button type="button" class="modal-edit-btn" id="editApplicationBtn">Edit Application</button><button type="button" class="modal-btn modal-close-action">Return to Overview</button></div></div></div>
`

let currentStep=1
const form=document.querySelector('#applicationForm'), appSection=document.querySelector('#application')
const panels=[...document.querySelectorAll('.step-panel')], steps=[...document.querySelectorAll('.step')]
const nextBtn=document.querySelector('#nextBtn'), submitBtn=document.querySelector('#submitBtn'), backBtn=document.querySelector('#backBtn'), error=document.querySelector('#formError')

const showStep=(step)=>{currentStep=step;panels.forEach(p=>p.classList.toggle('active',Number(p.dataset.panel)==step));steps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)==step));backBtn.style.visibility=step===1?'hidden':'visible';nextBtn.style.display=step===2?'none':'inline-flex';submitBtn.style.display=step===2?'inline-flex':'none';error.textContent=''}
const phoneInput=document.querySelector('#phone'), zipInput=document.querySelector('#zip')
phoneInput.addEventListener('input',()=>{const digits=phoneInput.value.replace(/\D/g,'').slice(0,10);phoneInput.value=digits.length?digits.length<4?`(${digits}`:digits.length<7?`(${digits.slice(0,3)}) ${digits.slice(3)}`:`(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`:''})
zipInput.addEventListener('input',()=>{let digits=zipInput.value.replace(/[^0-9-]/g,'').replace(/(?!^)-/g,'');digits=digits.slice(0,10);zipInput.value=digits})

const STORAGE_KEY='serodesk_application'
const getSavedApplication=()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{return null}}
const saveDraft=()=>{const data={};[...form.elements].forEach(el=>{if(!el.name)return;if(el.type==='radio'){if(el.checked)data[el.name]=el.value}else data[el.name]=el.value});localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
form.addEventListener('input',saveDraft);form.addEventListener('change',saveDraft)

const restoreApplication=()=>{const saved=getSavedApplication();if(!saved)return;Object.entries(saved).forEach(([name,value])=>{const controls=[...form.querySelectorAll(`[name="${name}"]`)];if(controls.length&&controls[0].type==='radio')controls.forEach(control=>{control.checked=control.value===value}) ;else if(controls[0])controls[0].value=value});const age=form.querySelector('[name="accountAge"]:checked');if(age){age.dispatchEvent(new Event('change'));setTimeout(()=>{const range=saved.accountRange;if(range){const radio=form.querySelector(`[name="accountRange"][value="${range}"]`);if(radio)radio.checked=true}},0)}}

const openApplication=()=>{document.body.classList.add('eligibility-mode');appSection.classList.remove('hidden');restoreApplication();showStep(1);window.scrollTo({top:0,behavior:'smooth'});if(localStorage.getItem('serodesk_application_submitted')==='true'){const modal=document.querySelector('#successModal');document.querySelector('#successTitle').textContent='Application Already Submitted';document.querySelector('#successMessage').textContent='You have already submitted an application from this browser. You may review and edit your details, then re-submit to update the record.';modal.classList.add('open');modal.setAttribute('aria-hidden','false')}}
document.querySelector('#heroApplyBtn').addEventListener('click',openApplication);document.querySelector('#navApplyBtn').addEventListener('click',openApplication)

const validateStep=(step)=>{const panel=document.querySelector(`[data-panel="${step}"]`);const required=[...panel.querySelectorAll('[required]')];let invalid=[];required.forEach(el=>{if(el.type==='radio'){if(!panel.querySelector(`[name="${el.name}"]:checked`))invalid.push(el)}else if(!el.value.trim())invalid.push(el)});const email=document.querySelector('#email');if(email&&email.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()))invalid.push(email);const phone=document.querySelector('#phone');if(phone&&phone.value&&phone.value.replace(/\D/g,'').length!==10)invalid.push(phone);const zip=document.querySelector('#zip');if(zip&&zip.value&&!/^\d{5}(?:-\d{4})?$/.test(zip.value))invalid.push(zip);if(invalid.length){error.textContent='Please enter valid details in all required fields.';const target=invalid[0].closest('.field,fieldset');target?.classList.add('field-error');setTimeout(()=>target?.classList.remove('field-error'),1800);return false}error.textContent='';return true}

nextBtn.addEventListener('click',()=>{if(validateStep(1))showStep(2)});backBtn.addEventListener('click',()=>showStep(1));steps.forEach(s=>s.addEventListener('click',()=>{if(Number(s.dataset.step)<2||validateStep(1))showStep(Number(s.dataset.step))}))

form.addEventListener('submit',e=>{e.preventDefault();if(!validateStep(1)||!validateStep(2))return;const application={id:Date.now(),submittedAt:new Date().toISOString(),fullName:form.fullName.value.trim(),email:form.email.value.trim(),phone:form.phone.value.trim(),zip:form.zip.value.trim(),linkedin:form.linkedin.value.trim()||'N/A',bank:form.bank.value.trim(),accountAge:form.querySelector('[name="accountAge"]:checked')?.value||'',accountRange:form.querySelector('[name="accountRange"]:checked')?.value||'',backup:form.querySelector('[name="backup"]:checked')?.value||'',computer:form.querySelector('[name="computer"]:checked')?.value||'',availability:form.querySelector('[name="availability"]:checked')?.value||'',experience:form.querySelector('[name="experience"]:checked')?.value||'',status:'Pending'};localStorage.setItem(STORAGE_KEY,JSON.stringify(application));localStorage.setItem('serodesk_application_submitted','true');let applications=[];try{applications=JSON.parse(localStorage.getItem('serodesk_applications')||'[]')}catch{}const index=applications.findIndex(item=>item.email===application.email||item.fullName===application.fullName);if(index>=0)applications[index]=application;else applications.unshift(application);localStorage.setItem('serodesk_applications',JSON.stringify(applications));const modal=document.querySelector('#successModal');document.querySelector('#successTitle').textContent='Application Submitted Successfully!';modal.classList.add('open');modal.setAttribute('aria-hidden','false')})

const closeModal=()=>{const modal=document.querySelector('#successModal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};document.querySelectorAll('.modal-close,.modal-close-action').forEach(b=>b.addEventListener('click',closeModal));document.querySelector('#editApplicationBtn').addEventListener('click',()=>{closeModal();showStep(1)});

const existing=getSavedApplication();if(existing?.submittedAt){document.querySelector('#heroApplyBtn').addEventListener('click',()=>{},{once:true});}
showStep(1)

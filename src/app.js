import './styles.css'

const icon = (name, size = 20) => {
  const icons = {
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`
}

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#top" aria-label="SeroDesk home">
      <span class="brand-mark">S</span><span>Sero<span>Desk</span></span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#overview">Overview</a>
      <a href="#requirements">Requirements</a>
      <a href="#application">Application</a>
    </nav>
    <button class="nav-cta" data-scroll="application">Apply Now ${icon('arrow', 16)}</button>
  </header>

  <main id="top">
    <section class="hero" id="overview">
      <div class="grid-glow"></div>
      <div class="hero-copy">
        <div class="eyebrow"><span></span> REMOTE OPPORTUNITIES <b>•</b> NOW HIRING</div>
        <h1>Work From <em>Home</em></h1>
        <p class="hero-sub">Build a flexible career on your schedule.<br>Professional support. Reliable income.</p>
        <div class="rate-card">
          <div><span>COMPENSATION</span><strong>$20 - $40 <small>/ hour</small></strong></div>
          <div class="rate-divider"></div>
          <div><span>SCHEDULE</span><strong>Flexible</strong></div>
        </div>
        <button class="primary-btn" data-scroll="application">Apply Now ${icon('arrow', 19)}</button>
      </div>

      <div class="hero-visual" aria-label="Secure remote work overview">
        <div class="orbital orbital-one"></div><div class="orbital orbital-two"></div>
        <div class="status-card">
          <div class="status-top"><span><i></i> Applications Open</span><b>2026</b></div>
          <div class="laptop-art">${icon('laptop', 62)}</div>
          <div class="status-bottom">
            <div><span>ROLE TYPE</span><strong>Remote</strong></div>
            <div><span>AVAILABILITY</span><strong>Immediate</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip" id="requirements">
      <div><span class="metric-icon">${icon('globe')}</span><p><strong>100% Remote</strong><small>Work from anywhere</small></p></div>
      <div><span class="metric-icon">${icon('clock')}</span><p><strong>Flexible Hours</strong><small>Choose your schedule</small></p></div>
      <div><span class="metric-icon">${icon('users')}</span><p><strong>Dedicated Support</strong><small>Team assistance</small></p></div>
      <div><span class="metric-icon">${icon('shield')}</span><p><strong>Secure Process</strong><small>Protected application</small></p></div>
    </section>

    <section class="application" id="application">
      <div class="security-note">${icon('shield', 23)}<p><strong>Trust &amp; Security</strong><span>Your information is protected with 256-bit SSL encryption and kept strictly safe and secure.</span></p></div>
      <div class="form-shell">
        <aside class="form-sidebar">
          <p class="sidebar-label">APPLICATION</p>
          <h2>Your profile</h2>
          <div class="step-list">
            <button class="step active" data-step="1"><span>01</span><p>Personal<small>Basic information</small></p></button>
            <button class="step" data-step="2"><span>02</span><p>Payment<small>Bank preference</small></p></button>
            <button class="step" data-step="3"><span>03</span><p>Requirements<small>Work readiness</small></p></button>
          </div>
          <div class="privacy"><span>${icon('lock', 16)}</span><p><strong>Privacy protected</strong><small>Demo application only</small></p></div>
        </aside>

        <form class="form-main" id="applicationForm" novalidate>
          <div class="step-panel active" data-panel="1">
            <div class="panel-head"><div><span>STEP 01</span><h3>Personal Information</h3></div><b>1 of 3</b></div>
            <div class="field-grid">
              <label class="field full"><span>Legal Full Name</span><input name="fullName" required autocomplete="name" placeholder="Enter your legal name"></label>
              <label class="field"><span>Email Address / Phone Number</span><input name="contact" required placeholder="email@example.com or phone"></label>
              <label class="field"><span>ZIP Code</span><input name="zip" required inputmode="numeric" maxlength="10" placeholder="Enter ZIP code"></label>
              <label class="field full optional"><span>LinkedIn Profile URL <small>Optional</small></span><input name="linkedin" type="url" placeholder="https://linkedin.com/in/..."></label>
            </div>
          </div>

          <div class="step-panel" data-panel="2">
            <div class="panel-head"><div><span>STEP 02</span><h3>Payment Preference</h3></div><b>2 of 3</b></div>
            <div class="field-grid">
              <label class="field full"><span>Primary Bank Name</span><select name="bank" required><option value="">Select a bank or institution</option><option>Chase</option><option>Bank of America</option><option>Wells Fargo</option><option>Citibank</option><option>Local Credit Union</option><option>Other</option></select></label>
              <div class="field full"><span>Bank Account Age</span><div class="choice-row" data-choice="accountAge"><button type="button" data-value="New">New Account</button><button type="button" data-value="Old">Established Account</button></div><input type="hidden" name="accountAge" required></div>
              <div class="field full" id="accountAgeDetails"><span>Account Age Range</span><div class="choice-row" data-choice="accountRange"><button type="button" data-value="Under 6 months">Under 6 months</button><button type="button" data-value="Under 12 months">Under 12 months</button></div><input type="hidden" name="accountRange" required></div>
              <div class="field full"><span>Backup / Secondary Payment Option</span><div class="backup-grid"><label><input type="radio" name="backup" value="Cash App" required><span>Cash App</span></label><label><input type="radio" name="backup" value="Zelle"><span>Zelle</span></label><label><input type="radio" name="backup" value="Apple Pay"><span>Apple Pay</span></label><label><input type="radio" name="backup" value="Chime"><span>Chime</span></label><label><input type="radio" name="backup" value="Secondary Bank"><span>Secondary Bank</span></label></div></div>
            </div>
          </div>

          <div class="step-panel" data-panel="3">
            <div class="panel-head"><div><span>STEP 03</span><h3>Technical &amp; Availability</h3></div><b>3 of 3</b></div>
            <div class="questions">
              <fieldset><legend>Do you have a functional laptop or computer system for remote work?</legend><div class="choice-row"><label><input type="radio" name="computer" value="Yes" required> Yes</label><label><input type="radio" name="computer" value="No"> No</label></div></fieldset>
              <fieldset><legend>How many hours per week are you available to work?</legend><div class="choice-row three"><label><input type="radio" name="availability" value="Full-Time 6-8+ hrs" required> Full-Time 6-8+ hrs</label><label><input type="radio" name="availability" value="Part-Time 4-6 hrs"> Part-Time 4-6 hrs</label><label><input type="radio" name="availability" value="Flexible/Contract"> Flexible/Contract</label></div></fieldset>
              <fieldset><legend>Do you have prior experience working remotely or managing work independently?</legend><div class="choice-row"><label><input type="radio" name="experience" value="Yes" required> Yes</label><label><input type="radio" name="experience" value="No"> No</label></div></fieldset>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="back-btn" id="backBtn">Back</button>
            <span id="formError" role="alert"></span>
            <button type="button" class="next-btn" id="nextBtn">Continue ${icon('arrow', 17)}</button>
            <button type="submit" class="submit-btn" id="submitBtn">Check Eligibility — Submit Application ${icon('arrow', 17)}</button>
          </div>
        </form>
      </div>
    </section>
  </main>

  <div class="modal-backdrop" id="successModal" aria-hidden="true">
    <div class="success-modal" role="dialog" aria-modal="true" aria-labelledby="successTitle">
      <button class="modal-close" aria-label="Close">×</button>
      <div class="success-icon">${icon('check', 30)}</div>
      <span>APPLICATION CONFIRMATION</span>
      <h2 id="successTitle">Application Submitted Successfully!</h2>
      <p>Thank you for applying. Our recruiting team is reviewing your profile. Confirmation and next steps will be sent to your email address within 24 to 48 hours.</p>
      <button class="modal-btn modal-close-action">Return to Overview</button>
    </div>
  </div>
`

let currentStep = 1
const form = document.querySelector('#applicationForm')
const panels = [...document.querySelectorAll('.step-panel')]
const steps = [...document.querySelectorAll('.step')]
const nextBtn = document.querySelector('#nextBtn')
const submitBtn = document.querySelector('#submitBtn')
const backBtn = document.querySelector('#backBtn')
const error = document.querySelector('#formError')

const showStep = (step) => {
  currentStep = step
  panels.forEach(p => p.classList.toggle('active', Number(p.dataset.panel) === step))
  steps.forEach(s => s.classList.toggle('active', Number(s.dataset.step) === step))
  backBtn.style.visibility = step === 1 ? 'hidden' : 'visible'
  nextBtn.style.display = step === 3 ? 'none' : 'inline-flex'
  submitBtn.style.display = step === 3 ? 'inline-flex' : 'none'
  error.textContent = ''
}

const validatePanel = () => {
  const panel = document.querySelector(`[data-panel="${currentStep}"]`)
  const required = [...panel.querySelectorAll('[required]')]
  const empty = required.filter(el => {
    if (el.type === 'radio') return !panel.querySelector(`[name="${el.name}"]:checked`)
    if (el.tagName === 'BUTTON') return !el.classList.contains('selected')
    return !el.value.trim()
  })
  if (empty.length) {
    error.textContent = 'Please complete all required fields.'
    const target = empty.find(el => el.type !== 'radio') || empty[0]
    target?.closest('.field, fieldset')?.classList.add('field-error')
    setTimeout(() => panel.querySelectorAll('.field-error').forEach(el => el.classList.remove('field-error')), 1800)
    return false
  }
  return true
}

document.querySelectorAll('[data-scroll]').forEach(btn => btn.addEventListener('click', () => {
  document.querySelector(`#${btn.dataset.scroll}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
}))
steps.forEach(btn => btn.addEventListener('click', () => showStep(Number(btn.dataset.step))))
nextBtn.addEventListener('click', () => { if (validatePanel()) showStep(currentStep + 1) })
backBtn.addEventListener('click', () => showStep(currentStep - 1))

const accountChoice = document.querySelector('[data-choice="accountAge"]')
const rangeChoice = document.querySelector('[data-choice="accountRange"]')
accountChoice.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
  accountChoice.querySelectorAll('button').forEach(b => b.classList.remove('selected'))
  btn.classList.add('selected')
  document.querySelector('[name="accountAge"]').value = btn.dataset.value
  const old = btn.dataset.value === 'Old'
  rangeChoice.innerHTML = old
    ? '<button type="button" data-value="Under 3 years">Under 3 years</button><button type="button" data-value="Under 7 years">Under 7 years</button><button type="button" data-value="10+ years">10+ years</button>'
    : '<button type="button" data-value="Under 6 months">Under 6 months</button><button type="button" data-value="Under 12 months">Under 12 months</button>'
  document.querySelector('[name="accountRange"]').value = ''
  bindRanges()
}))

function bindRanges() {
  rangeChoice.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    rangeChoice.querySelectorAll('button').forEach(b => b.classList.remove('selected'))
    btn.classList.add('selected')
    document.querySelector('[name="accountRange"]').value = btn.dataset.value
  }))
}
bindRanges()

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!validatePanel()) return
  const modal = document.querySelector('#successModal')
  modal.classList.add('open')
  modal.setAttribute('aria-hidden', 'false')
})

document.querySelectorAll('.modal-close, .modal-close-action').forEach(btn => btn.addEventListener('click', () => {
  const modal = document.querySelector('#successModal')
  modal.classList.remove('open')
  modal.setAttribute('aria-hidden', 'true')
}))

document.querySelector('#successModal').addEventListener('click', (event) => {
  if (event.target.id === 'successModal') event.currentTarget.classList.remove('open')
})

showStep(1)

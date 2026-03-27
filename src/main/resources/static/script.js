/* ═══════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════ */
const i18n = {
  en: {
    appName:"Smart Crop Advisory", appSub:"AI-Powered Farming",
    heroBadge:"AI Powered",
    heroLine1:"Smart Advisory", heroLine2:"for Better Harvests",
    heroSub:"Get personalized fertilizer & crop recommendations based on your soil conditions.",
    ctaStart:"Start Advisory",
    statCrops:"Crops", statPowered:"Powered", statLang:"Language",
    weatherLabel:"Current Weather", weatherCond:"Partly Cloudy",
    featTitle:"Features",
    feat1:"Soil Analysis", feat2:"Weather", feat3:"About",
    feat4:"Crop Guide", feat5:"Fertilizers", feat6:"Rainfall",
    tipText:"<strong>Pro Tip:</strong> Test your soil pH before sowing. Ideal range is 6.0–7.5 for most crops. Use our advisory tool for personalized recommendations.",
    predictTitle:"Soil Analysis", predictSub:"Fill in your soil details below",
    labelSoil:"Soil Type", soilPlaceholder:"-- Select Soil Type --",
    soilBlack:"Black Soil", soilRed:"Red Soil", soilSandy:"Sandy Soil", soilClay:"Clay Soil", soilLoamy:"Loamy Soil",
    labelCrop:"Crop Name", cropPlaceholder:"-- Select Crop --",
    cropRice:"Rice (వరి)", cropWheat:"Wheat (గోధుమ)", cropCotton:"Cotton (పత్తి)", cropMaize:"Maize (మొక్కజొన్న)", cropOther:"Other",
    labelPH:"Soil pH Value",
    phAcidic:"Acidic ⚠️", phNeutral:"Neutral ✓", phAlkaline:"Alkaline ⚠️",
    labelWater:"Water Availability",
    waterIrr:"Irrigated", waterRain:"Rainfed",
    btnAnalyze:"Analyze Soil",
    resultTitle:"Analysis Complete", resultSub:"Your personalized crop advisory is ready",
    resCrop:"Crop", resSoil:"Soil Type", resPH:"pH Level", resPHStatus:"pH Status", resRecs:"Recommendations",
    btnNewAnalysis:"New Analysis",
    weatherTitle:"Weather Advisory", weatherSub:"7-day forecast & farming tips",
    wDesc:"Partly Cloudy · Telangana",
    wHumidity:"Humidity", wWind:"Wind", wRain:"Rain Chance",
    forecastTitle:"5-Day Forecast",
    day1:"Mon", day2:"Tue", day3:"Wed", day4:"Thu", day5:"Fri",
    weatherAdvTitle:"Farming Advisory",
    wAdv1:"Rain expected mid-week. Avoid spraying pesticides on Wednesday.",
    wAdv2:"High humidity — monitor crops for fungal diseases.",
    wAdv3:"Monday and Friday are ideal for irrigation.",
    aboutTitle:"Smart Crop Advisory", aboutSub:"Empowering farmers with AI-based soil analysis for better yields.",
    aboutProject:"About Project",
    aboutProjectText:"This system uses soil data (type, pH, water availability) through a rule-based AI engine to generate personalized fertilizer recommendations. Built as part of the SOP project to support farmers in Telangana.",
    aboutTeam:"Our Team",
    dev1name:"Team Lead", dev1role:"Full Stack Developer",
    dev2name:"Backend Dev", dev2role:"Spring Boot Developer",
    dev3name:"UI/UX Designer", dev3role:"Frontend Developer",
    techStack:"Tech Stack",
    navHome:"Home", navPredict:"Predict", navWeather:"Weather", navAbout:"About",
    loadingText:"Analyzing Soil…", loadingSub:"Please wait a moment",
    errFill:"Please fill all fields.", errAPI:"Server error. Check backend is running.",
  },
  te: {
    appName:"స్మార్ట్ క్రాప్ అడ్వైజరీ", appSub:"AI ఆధారిత వ్యవసాయం",
    heroBadge:"AI శక్తితో",
    heroLine1:"స్మార్ట్ సలహా", heroLine2:"మెరుగైన దిగుబడి కోసం",
    heroSub:"మీ నేల పరిస్థితుల ఆధారంగా వ్యక్తిగతీకరించిన ఎరువు & పంట సిఫారసులు పొందండి.",
    ctaStart:"సలహా ప్రారంభించండి",
    statCrops:"పంటలు", statPowered:"శక్తి", statLang:"భాష",
    weatherLabel:"ప్రస్తుత వాతావరణం", weatherCond:"పాక్షికంగా మేఘావృతం",
    featTitle:"ఫీచర్లు",
    feat1:"నేల విశ్లేషణ", feat2:"వాతావరణం", feat3:"గురించి",
    feat4:"పంట గైడ్", feat5:"ఎరువులు", feat6:"వర్షపాతం",
    tipText:"<strong>ప్రో చిట్కా:</strong> విత్తనం వేయడానికి ముందు నేల pH పరీక్షించండి. చాలా పంటలకు అనువైన pH శ్రేణి 6.0–7.5.",
    predictTitle:"నేల విశ్లేషణ", predictSub:"మీ నేల వివరాలను పూరించండి",
    labelSoil:"నేల రకం", soilPlaceholder:"-- నేల రకం ఎంచుకోండి --",
    soilBlack:"నల్ల నేల", soilRed:"ఎర్ర నేల", soilSandy:"ఇసుక నేల", soilClay:"బంకమట్టి నేల", soilLoamy:"మురుగు నేల",
    labelCrop:"పంట పేరు", cropPlaceholder:"-- పంట ఎంచుకోండి --",
    cropRice:"వరి (Rice)", cropWheat:"గోధుమ (Wheat)", cropCotton:"పత్తి (Cotton)", cropMaize:"మొక్కజొన్న (Maize)", cropOther:"ఇతర",
    labelPH:"నేల pH విలువ",
    phAcidic:"ఆమ్లీయ ⚠️", phNeutral:"తటస్థ ✓", phAlkaline:"క్షారీయ ⚠️",
    labelWater:"నీటి లభ్యత",
    waterIrr:"నీటిపారుదల", waterRain:"వర్షాధారిత",
    btnAnalyze:"నేల విశ్లేషించండి",
    resultTitle:"విశ్లేషణ పూర్తయింది", resultSub:"మీ వ్యక్తిగతీకరించిన పంట సలహా సిద్ధంగా ఉంది",
    resCrop:"పంట", resSoil:"నేల రకం", resPH:"pH స్థాయి", resPHStatus:"pH స్థితి", resRecs:"సిఫారసులు",
    btnNewAnalysis:"కొత్త విశ్లేషణ",
    weatherTitle:"వాతావరణ సలహా", weatherSub:"7-రోజుల అంచనా & వ్యవసాయ చిట్కాలు",
    wDesc:"పాక్షికంగా మేఘావృతం · తెలంగాణ",
    wHumidity:"తేమ", wWind:"గాలి", wRain:"వర్షం అవకాశం",
    forecastTitle:"5-రోజుల అంచనా",
    day1:"సోమ", day2:"మంగళ", day3:"బుధ", day4:"గురు", day5:"శుక్ర",
    weatherAdvTitle:"వ్యవసాయ సలహా",
    wAdv1:"వారం మధ్యలో వర్షం అంచనా. బుధవారం పురుగుమందులు పిచికారీ చేయవద్దు.",
    wAdv2:"అధిక తేమ — శిలీంధ్ర వ్యాధులకు పంటలను పర్యవేక్షించండి.",
    wAdv3:"సోమవారం మరియు శుక్రవారం నీటిపారుదలకు అనుకూలం.",
    aboutTitle:"స్మార్ట్ క్రాప్ అడ్వైజరీ", aboutSub:"మెరుగైన దిగుబడి కోసం AI ఆధారిత నేల విశ్లేషణతో రైతులకు శక్తి ఇవ్వడం.",
    aboutProject:"ప్రాజెక్ట్ గురించి",
    aboutProjectText:"ఈ సిస్టమ్ నేల డేటా (రకం, pH, నీటి లభ్యత) ఉపయోగించి నియమ-ఆధారిత AI ఇంజన్ ద్వారా వ్యక్తిగతీకరించిన ఎరువు సిఫారసులు రూపొందిస్తుంది.",
    aboutTeam:"మా బృందం",
    dev1name:"టీమ్ లీడ్", dev1role:"ఫుల్ స్టాక్ డెవలపర్",
    dev2name:"బ్యాకెండ్ డెవ్", dev2role:"స్ప్రింగ్ బూట్ డెవలపర్",
    dev3name:"UI/UX డిజైనర్", dev3role:"ఫ్రంటెండ్ డెవలపర్",
    techStack:"టెక్ స్టాక్",
    navHome:"హోమ్", navPredict:"అంచనా", navWeather:"వాతావరణం", navAbout:"గురించి",
    loadingText:"నేల విశ్లేషిస్తున్నది...", loadingSub:"దయచేసి కొంత సేపు వేచి ఉండండి",
    errFill:"అన్ని ఫీల్డ్‌లు పూరించండి.", errAPI:"సర్వర్ లోపం. బ్యాకెండ్ తనిఖీ చేయండి.",
  }
};

/* ═══════════════════════════════════════
   LANGUAGE MANAGEMENT
═══════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.body.className = lang === 'te' ? 'lang-te' : 'lang-en';

  const btnEn = document.getElementById('btnEn');
  const btnTe = document.getElementById('btnTe');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnTe) btnTe.classList.toggle('active', lang === 'te');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  // Update pH badge if slider exists
  const phSlider = document.getElementById('phSlider');
  if (phSlider) updatePH(phSlider.value);
}

function setLang(lang) { applyLang(lang); }

/* ═══════════════════════════════════════
   pH SLIDER
═══════════════════════════════════════ */
function updatePH(val) {
  const v = parseFloat(val);
  const display = document.getElementById('phDisplay');
  const badge   = document.getElementById('phBadge');
  const circle  = document.getElementById('phCircle');
  if (!display) return;

  display.textContent = v.toFixed(1);
  const t = i18n[currentLang];

  if (v < 6.0) {
    badge.textContent  = t.phAcidic;
    badge.className    = 'ph-status-badge acidic';
    circle.className   = 'ph-value-circle acidic';
  } else if (v > 7.5) {
    badge.textContent  = t.phAlkaline;
    badge.className    = 'ph-status-badge alkaline';
    circle.className   = 'ph-value-circle alkaline';
  } else {
    badge.textContent  = t.phNeutral;
    badge.className    = 'ph-status-badge neutral';
    circle.className   = 'ph-value-circle neutral';
  }
}

/* ═══════════════════════════════════════
   WATER CHIPS
═══════════════════════════════════════ */
let selectedWater = 'Irrigated';

function selectWater(type) {
  selectedWater = type;
  const irrChip  = document.getElementById('chip-irrigated');
  const rainChip = document.getElementById('chip-rainfed');
  if (irrChip)  irrChip.classList.toggle('selected', type === 'Irrigated');
  if (rainChip) rainChip.classList.toggle('selected', type === 'Rainfed');
}

/* ═══════════════════════════════════════
   STEP DOTS
═══════════════════════════════════════ */
function onFieldChange() {
  const soil = document.getElementById('soilType');
  const crop = document.getElementById('cropName');
  const dots = document.querySelectorAll('.step-dot');
  if (!soil || !dots.length) return;
  dots[0].classList.add('active');
  if (dots[1]) dots[1].classList.toggle('active', !!soil.value);
  if (dots[2]) dots[2].classList.toggle('active', !!crop.value);
}

/* ═══════════════════════════════════════
   RIPPLE EFFECT
═══════════════════════════════════════ */
function addRipple(el) {
  el.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect   = el.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    ripple.className = 'ripple';
    ripple.style.cssText = `
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
    `;
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
}

/* ═══════════════════════════════════════
   TOAST
═══════════════════════════════════════ */
function showToast(msg) {
  const toast = document.getElementById('errorToast');
  if (!toast) return;
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ═══════════════════════════════════════
   LOADING
═══════════════════════════════════════ */
function setLoading(show) {
  const overlay  = document.getElementById('loadingOverlay');
  const submitBtn = document.getElementById('submitBtn');
  if (overlay)   overlay.classList.toggle('show', show);
  if (submitBtn) submitBtn.disabled = show;
}

/* ═══════════════════════════════════════
   BUILD RESULT CARDS
═══════════════════════════════════════ */
function renderResults(data, reqData) {
  const t = i18n[currentLang];
  const container = document.getElementById('resultCards');
  if (!container) return;
  container.innerHTML = '';

  // Card 1 — Crop & Soil side by side
  const c1 = document.createElement('div');
  c1.className = 'res-card';
  c1.innerHTML = `
    <div class="res-card-row">
      <div class="res-card-col">
        <div class="res-card-icon icon-green">🌾</div>
        <div class="res-card-label">${t.resCrop}</div>
        <div class="res-card-value">${data.crop}</div>
      </div>
      <div class="res-card-col" style="border-left:1px solid var(--gray-100); padding-left:12px;">
        <div class="res-card-icon icon-blue">🏔️</div>
        <div class="res-card-label">${t.resSoil}</div>
        <div class="res-card-value">${reqData.soilType}</div>
      </div>
    </div>`;
  container.appendChild(c1);

  // Card 2 — pH
  const phClass = data.phStatus.toLowerCase().includes('acid') ? 'ph-acidic'
                : data.phStatus.toLowerCase().includes('alkal') ? 'ph-alkaline'
                : 'ph-neutral';
  const phIcon  = data.phStatus.toLowerCase().includes('acid') ? '🔴'
                : data.phStatus.toLowerCase().includes('alkal') ? '🟠'
                : '🟢';
  const c2 = document.createElement('div');
  c2.className = 'res-card';
  c2.innerHTML = `
    <div class="res-card-row">
      <div class="res-card-col">
        <div class="res-card-icon icon-amber">⚗️</div>
        <div class="res-card-label">${t.resPH}</div>
        <div class="res-card-value">${parseFloat(reqData.phValue).toFixed(1)}</div>
      </div>
      <div class="res-card-col" style="border-left:1px solid var(--gray-100); padding-left:12px;">
        <div class="res-card-icon icon-green">📊</div>
        <div class="res-card-label">${t.resPHStatus}</div>
        <div style="margin-top:6px;"><span class="ph-pill ${phClass}">${phIcon} ${data.phStatus}</span></div>
      </div>
    </div>`;
  container.appendChild(c2);

  // Card 3 — Recommendations
  const c3 = document.createElement('div');
  c3.className = 'res-card';
  c3.innerHTML = `
    <div class="recs-title">
      <span style="font-size:16px;">💡</span>
      ${t.resRecs}
    </div>
    <div class="recs-list">
      ${data.recommendations.map((r, i) => `
        <div class="rec-item">
          <div class="rec-num">${i + 1}</div>
          <div class="rec-text">${r}</div>
        </div>`).join('')}
    </div>`;
  container.appendChild(c3);
}

/* ═══════════════════════════════════════
   FORM SUBMIT → API CALL
═══════════════════════════════════════ */
async function submitForm() {
  const soilTypeEl = document.getElementById('soilType');
  const cropEl     = document.getElementById('cropName');
  const phSlider   = document.getElementById('phSlider');

  const soilType   = soilTypeEl ? soilTypeEl.value : '';
  const crop       = cropEl ? cropEl.value : '';
  const phValue    = phSlider ? parseFloat(phSlider.value) : 6.5;
  const waterAvail = selectedWater;
  const t          = i18n[currentLang];

  if (!soilType || !crop) {
    showToast(t.errFill);
    const card = document.querySelector('.form-card');
    if (card) {
      card.style.animation = 'none';
      setTimeout(() => { card.style.animation = 'shake .4s ease'; }, 10);
    }
    return;
  }

  const payload = { soilType, phValue, crop, waterAvail };

  setLoading(true);
  try {
    const response = await fetch('/api/soil/analyze', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();

    // Store result in sessionStorage and navigate to results page
    sessionStorage.setItem('soilResult', JSON.stringify(data));
    sessionStorage.setItem('soilRequest', JSON.stringify({ soilType, phValue, crop, waterAvail }));
    setLoading(false);
    window.location.href = '/results';
  } catch (err) {
    setLoading(false);
    showToast(t.errAPI + ' (' + err.message + ')');
  }
}

/* ═══════════════════════════════════════
   RESULTS PAGE — LOAD FROM SESSION
═══════════════════════════════════════ */
function loadResultsPage() {
  const resultRaw  = sessionStorage.getItem('soilResult');
  const requestRaw = sessionStorage.getItem('soilRequest');
  if (!resultRaw || !requestRaw) {
    // No result data — redirect back to soil guidance
    window.location.href = '/soil';
    return;
  }
  const data    = JSON.parse(resultRaw);
  const reqData = JSON.parse(requestRaw);
  renderResults(data, reqData);
}

/* ═══════════════════════════════════════
   PAGE INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  // Apply stored language
  applyLang(currentLang);

  // Init pH slider if present
  const phSlider = document.getElementById('phSlider');
  if (phSlider) updatePH(phSlider.value);

  // Init water chip
  const irrChip = document.getElementById('chip-irrigated');
  if (irrChip) irrChip.classList.add('selected');

  // Add ripple to buttons
  document.querySelectorAll('.submit-btn, .hero-cta, .back-btn').forEach(addRipple);

  // Load results if on results page
  if (document.getElementById('resultCards')) {
    loadResultsPage();
  }
// ─────────────────────────────────────────
//  LOGIN FUNCTION
//  Call this from your login.html form
// ─────────────────────────────────────────
async function loginUser() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const response = await fetch('/api/users/login', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.status === 'success') {
    // Save user info to browser's localStorage (stays even after closing tab)
    localStorage.setItem('userId',   data.userId);
    localStorage.setItem('username', data.username);
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/';  // Go to home page
  } else {
    showToast(data.message);  // Show error message
  }
}

// Check if user is logged in (call this on any page)
function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

// Get the logged-in username
function getUsername() {
  return localStorage.getItem('username') || 'Guest';
}

// Logout
function logout() {
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
  localStorage.removeItem('isLoggedIn');
  window.location.href = '/login';
}
// Call this when your market prices page loads
async function loadMarketPrices() {
  const response = await fetch('/api/market/prices');
  const prices   = await response.json();  // Array of MarketPrice objects

  const container = document.getElementById('pricesList');
  container.innerHTML = '';

  prices.forEach(p => {
    const trendIcon = p.trend === 'UP' ? '📈' : p.trend === 'DOWN' ? '📉' : '➡️';
    container.innerHTML += `
      <div class="price-card">
        <div class="price-crop">${p.cropName}</div>
        <div class="price-market">${p.market}</div>
        <div class="price-amount">₹${p.pricePerQuintal}/Quintal ${trendIcon}</div>
      </div>`;
  });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadMarketPrices);

async function detectPest() {
  const crop     = document.getElementById('pestCrop').value;
  const symptoms = document.getElementById('pestSymptoms').value;

  const response = await fetch('/api/pest/detect', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ crop, symptoms })
  });

  const result = await response.json();

  document.getElementById('pestName').textContent    = result.pestName;
  document.getElementById('treatment').textContent  = result.treatment;
  document.getElementById('pestResult').style.display = 'block';
}
}

);

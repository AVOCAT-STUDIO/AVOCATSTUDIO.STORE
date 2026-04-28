
// ── DATA ──
let classes=[
  {emoji:"🌌",name:"VR 입문 체험",age:"만 5–8세",price:"50,000",unit:"원 / 회",desc:"VR 기기를 처음 접하는 아이들을 위한 체험 수업. 가상 우주, 해저, 공룡 세계를 안전하게 탐험합니다.",feats:["VR 기기 사용법 기초","테마 가상공간 탐험","60분 · 소그룹 4인 이하"],featured:false},
  {emoji:"🎨",name:"VR 크리에이터 과정",age:"만 9–13세",price:"120,000",unit:"원 / 월",desc:"나만의 가상 세계를 직접 만들어보는 창작 수업. 월드 디자인과 기초 코딩을 배웁니다.",feats:["Roblox Studio 기초","나만의 월드 제작","90분 · 월 4회 · 6인 이하","월간 결과물 발표회"],featured:true},
  {emoji:"💻",name:"VR 코딩 & 심화",age:"만 12세 이상",price:"200,000",unit:"원 / 월",desc:"3D 공간 디자인과 스크립팅 심화. 포트폴리오 수준의 월드를 완성합니다.",feats:["게임 로직 & Lua 스크립트","아바타 의상 제작","90분 · 월 8회","수료증 발급"],featured:false}
];
let products={
  기기:[{icon:"🥽",name:"Meta Quest 3",desc:"가장 대중적인 독립형 VR 헤드셋.",url:""},{icon:"🎮",name:"Meta Quest 3S",desc:"입문자 추천 보급형 모델.",url:""}],
  앱:[{icon:"🌐",name:"Roblox",desc:"메타버스 월드 제작 및 게임 플랫폼.",url:""},{icon:"🏫",name:"Rec Room",desc:"VR 교육·소통 소셜 플랫폼.",url:""}],
  악세서리:[{icon:"🎧",name:"VR 스트랩",desc:"장시간 착용 편의성 향상 액세서리.",url:""},{icon:"🔋",name:"보조 배터리",desc:"VR 사용 시간 2배 연장 배터리.",url:""}]
};
let snsLinks={ig:'',yt:'',kk:'',em:''};
let reviews=[
  {phone:"8**2",star:5,text:"킨킨 선생님 덕분에 아이가 VR에 완전히 빠졌어요! 수업 후 스스로 월드도 만들고 싶다고 해서 정말 뿌듯합니다.",date:"2025.03.12"},
  {phone:"1**7",star:5,text:"디지털 리터러시 수업이 특히 좋았어요. 스마트폰·인터넷 예절까지 자연스럽게 배우더라고요.",date:"2025.02.20"},
  {phone:"4**9",star:4,text:"처음엔 VR 멀미 걱정했는데 선생님이 아이 페이스에 맞춰 조절해주셔서 안심했습니다.",date:"2025.01.08"}
];
let selectedStar=0,activeProdCat='기기',curPage=window.ACTIVE_PAGE_INDEX||0;
const PAGE_LINKS=['index.html','about.html','services.html','classes.html','career.html','products.html','reviews.html'];

// ── PAGE NAVIGATION ──
function goPage(n){
  if(PAGE_LINKS[n]) window.location.href=PAGE_LINKS[n];
}
function updateNavBtns(){
  for(let i=0;i<=6;i++){const b=document.getElementById('nb'+i);if(b)b.classList.toggle('active',i===curPage)}
}
updateNavBtns();

// ── SCROLL REVEAL ──
function initReveal(container){
  const els=container.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
  if(!container._revObs){
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(el=>obs.observe(el));
    container._revObs=obs;
  }else{els.forEach(el=>{if(!el.classList.contains('visible'))container._revObs.observe(el)})}
  // immediately trigger visible items
  els.forEach(el=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight*.95)el.classList.add('visible')});
}
document.querySelectorAll('.page').forEach(p=>initReveal(p));

// ── RENDER CLASSES ──
const classThumbSVGs=[
  `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0A0F1E"/><circle cx="200" cy="100" r="70" fill="#312E81" fill-opacity=".4"/><circle cx="200" cy="100" r="45" fill="#4F46E5" fill-opacity=".3"/><text x="200" y="118" text-anchor="middle" font-size="60">🌌</text><circle cx="50" cy="40" r="15" fill="#818CF8" fill-opacity=".2"/><circle cx="350" cy="160" r="20" fill="#06B6D4" fill-opacity=".15"/><circle cx="30" cy="170" r="2" fill="#818CF8" opacity=".6"/><circle cx="370" cy="30" r="3" fill="#06B6D4" opacity=".5"/></svg>`,
  `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0A0F1E"/><rect x="80" y="40" width="240" height="120" rx="12" fill="#1E293B" stroke="#818CF8" stroke-width=".8" stroke-opacity=".4"/><text x="100" y="80" fill="#818CF8" font-size="11" font-family="monospace">world = Instance.new</text><text x="100" y="100" fill="#06B6D4" font-size="11" font-family="monospace">  ("Model")</text><text x="100" y="120" fill="#4ade80" font-size="11" font-family="monospace">-- 🌐 나만의 월드!</text><text x="100" y="140" fill="#A78BFA" font-size="11" font-family="monospace">print("Hello World")</text><circle cx="340" cy="40" r="15" fill="#4F46E5" fill-opacity=".3"/><circle cx="60" cy="160" r="12" fill="#06B6D4" fill-opacity=".2"/></svg>`,
  `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="cth" cx="50%" cy="50%"><stop offset="0%" stop-color="#1E1B4B"/><stop offset="100%" stop-color="#0A0F1E"/></radialGradient></defs><rect width="400" height="200" fill="url(#cth)"/><g stroke="#06B6D4" stroke-opacity=".1"><line x1="200" y1="100" x2="0" y2="200"/><line x1="200" y1="100" x2="200" y2="200"/><line x1="200" y1="100" x2="400" y2="200"/></g><g transform="translate(200,90)"><rect x="-60" y="-30" width="120" height="60" rx="16" fill="#312E81"/><rect x="-55" y="-24" width="110" height="48" rx="12" fill="#1E1B4B"/><ellipse cx="-22" cy="0" rx="22" ry="19" fill="#4F46E5" opacity=".6"/><ellipse cx="22" cy="0" rx="22" ry="19" fill="#06B6D4" opacity=".5"/></g><text x="200" y="165" text-anchor="middle" fill="#818CF8" font-size="11" font-family="sans-serif">심화 과정</text></svg>`
];
function renderClasses(){
  const g=document.getElementById('class-grid');
  if(!g)return;
  g.innerHTML=classes.map((c,i)=>`
    <div class="class-card${c.featured?' featured':''} reveal" style="transition-delay:${i*.12}s">
      ${c.featured?'<div class="featured-badge">인기</div>':''}
      <div class="class-thumb">${classThumbSVGs[i]||`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:50px;background:#1E293B">${c.emoji}</div>`}</div>
      <div class="class-top"><div class="class-name">${c.name}</div><div class="class-age">${c.age}</div></div>
      <div class="class-body">
        <div class="class-price">${c.price}<span>${c.unit}</span></div>
        <div class="class-desc-t">${c.desc}</div>
        <ul class="class-feat">${c.feats.map(f=>`<li>${f}</li>`).join('')}</ul>
      </div>
      <button class="class-cta" onclick="goPage(6)">문의 / 후기 보기</button>
    </div>`).join('');
  initReveal(document.getElementById('page-classes'));
}

// ── RENDER PRODUCTS ──
const prodImgSVGs={
  기기:[
    `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#0F172A"/><g transform="translate(150,70)"><rect x="-70" y="-28" width="140" height="56" rx="16" fill="#312E81"/><rect x="-64" y="-22" width="128" height="44" rx="11" fill="#1E1B4B"/><ellipse cx="-28" cy="0" rx="25" ry="21" fill="#4F46E5" opacity=".5"/><ellipse cx="28" cy="0" rx="25" ry="21" fill="#06B6D4" opacity=".4"/><ellipse cx="-28" cy="-4" rx="11" ry="9" fill="#818CF8" opacity=".7"/><ellipse cx="28" cy="-4" rx="11" ry="9" fill="#67E8F9" opacity=".6"/></g></svg>`,
    `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#0F172A"/><g transform="translate(150,70)"><rect x="-65" y="-26" width="130" height="52" rx="14" fill="#0E7490"/><rect x="-59" y="-20" width="118" height="40" rx="10" fill="#1E1B4B"/><ellipse cx="-26" cy="0" rx="23" ry="19" fill="#06B6D4" opacity=".5"/><ellipse cx="26" cy="0" rx="23" ry="19" fill="#4F46E5" opacity=".4"/></g></svg>`
  ],
  앱:[
    `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#0F172A"/><circle cx="150" cy="70" r="45" fill="#1E293B" stroke="#818CF8" stroke-width="1" stroke-opacity=".4"/><text x="150" y="84" text-anchor="middle" font-size="40">🌐</text></svg>`,
    `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#0F172A"/><circle cx="150" cy="70" r="45" fill="#1E293B" stroke="#06B6D4" stroke-width="1" stroke-opacity=".4"/><text x="150" y="84" text-anchor="middle" font-size="40">🏫</text></svg>`
  ],
  악세서리:[
    `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#0F172A"/><circle cx="150" cy="70" r="45" fill="#1E293B" stroke="#7C3AED" stroke-width="1" stroke-opacity=".4"/><text x="150" y="84" text-anchor="middle" font-size="40">🎧</text></svg>`,
    `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#0F172A"/><circle cx="150" cy="70" r="45" fill="#1E293B" stroke="#818CF8" stroke-width="1" stroke-opacity=".3"/><text x="150" y="84" text-anchor="middle" font-size="40">🔋</text></svg>`
  ]
};
function renderProdTabs(){
  const tabs=document.getElementById('prod-tabs');
  if(!tabs)return;
  tabs.innerHTML=Object.keys(products).map(k=>`<button class="cat-tab${k===activeProdCat?' active':''}" onclick="setProdCat('${k}')">${k}</button>`).join('');
}
function setProdCat(c){activeProdCat=c;renderProdTabs();renderProds()}
function renderProds(){
  const grid=document.getElementById('prod-grid');
  if(!grid)return;
  const items=products[activeProdCat]||[];
  const imgs=prodImgSVGs[activeProdCat]||[];
  grid.innerHTML=items.map((p,i)=>`
    <div class="prod-card reveal" style="transition-delay:${i*.1}s">
      <div class="prod-card-img">${imgs[i]||`<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#1E293B"/><text x="150" y="84" text-anchor="middle" font-size="48">${p.icon}</text></svg>`}</div>
      <div class="prod-info">
        <div class="prod-name">${p.icon} ${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        ${p.url?`<a class="prod-link" href="${p.url}" target="_blank" rel="noopener">리퍼럴 링크 →</a>`:`<span class="prod-link" style="opacity:.4;cursor:default">링크 준비 중</span>`}
      </div>
    </div>`).join('');
  initReveal(document.getElementById('page-products'));
}

// ── RENDER REVIEWS ──
function renderReviews(){
  if(!document.getElementById('avg-score')||!document.getElementById('review-cards'))return;
  const avg=reviews.length?reviews.reduce((a,r)=>a+r.star,0)/reviews.length:0;
  document.getElementById('avg-score').textContent=avg.toFixed(1);
  document.getElementById('rv-count').textContent=`후기 ${reviews.length}개`;
  document.getElementById('avg-stars').textContent='★'.repeat(Math.round(avg))+'☆'.repeat(5-Math.round(avg));
  document.getElementById('bars-wrap').innerHTML=[5,4,3,2,1].map(s=>{
    const c=reviews.filter(r=>r.star===s).length,pct=reviews.length?Math.round(c/reviews.length*100):0;
    return `<div class="bar-row"><span style="min-width:22px">${s}★</span><div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div><span>${c}</span></div>`;
  }).join('');
  const cards=document.getElementById('review-cards');
  if(!reviews.length){cards.innerHTML='<p style="color:var(--muted);font-size:14px">아직 후기가 없습니다. 첫 후기를 남겨주세요!</p>';return}
  cards.innerHTML=reviews.map((r,i)=>`
    <div class="review-card reveal" style="transition-delay:${i*.08}s">
      <div class="rv-header"><span class="rv-author">${r.phone}</span><span class="rv-stars-disp">${'★'.repeat(r.star)}${'☆'.repeat(5-r.star)}</span></div>
      <div class="rv-date">${r.date}</div>
      <div class="rv-text">${r.text}</div>
    </div>`).join('');
  initReveal(document.getElementById('page-reviews'));
}

// ── STAR PICK ──
const sp=document.getElementById('star-pick');
if(sp) sp.querySelectorAll('span').forEach(s=>{
  s.addEventListener('click',()=>{selectedStar=+s.dataset.v;sp.querySelectorAll('span').forEach(x=>x.classList.toggle('on',+x.dataset.v<=selectedStar))});
  s.addEventListener('mouseover',()=>sp.querySelectorAll('span').forEach(x=>x.classList.toggle('on',+x.dataset.v<=+s.dataset.v)));
  s.addEventListener('mouseleave',()=>sp.querySelectorAll('span').forEach(x=>x.classList.toggle('on',+x.dataset.v<=selectedStar)));
});
function submitReview(){
  if(!document.getElementById('rv-phone'))return;
  const phone=document.getElementById('rv-phone').value.trim();
  const text=document.getElementById('rv-text').value.trim();
  if(phone.length<4){alert('핸드폰 뒷자리 4자리를 입력해주세요.');return}
  if(!selectedStar){alert('별점을 선택해주세요.');return}
  if(text.length<5){alert('후기 내용을 5자 이상 입력해주세요.');return}
  const masked=phone[0]+'**'+phone[phone.length-1];
  const d=new Date();
  reviews.unshift({phone:masked,star:selectedStar,text,date:`${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`});
  document.getElementById('rv-phone').value='';document.getElementById('rv-text').value='';selectedStar=0;sp.querySelectorAll('span').forEach(x=>x.classList.remove('on'));
  renderReviews();
}

// ── ADMIN ──
const ADMIN_PW='avocat2025';
function openAdmin(){document.getElementById('admin-overlay').classList.add('open');setTimeout(()=>document.getElementById('pw-input').focus(),60)}
function closeAdmin(){document.getElementById('admin-overlay').classList.remove('open');document.getElementById('admin-pw-view').style.display='block';document.getElementById('admin-panel').style.display='none';document.getElementById('pw-input').value='';document.getElementById('pw-err').style.display='none'}
function checkPw(){if(document.getElementById('pw-input').value===ADMIN_PW){document.getElementById('admin-pw-view').style.display='none';document.getElementById('admin-panel').style.display='block';buildClassEditor();buildProdEditor()}else document.getElementById('pw-err').style.display='block'}
function switchATab(n){document.querySelectorAll('.admin-tab').forEach((t,i)=>t.classList.toggle('active',i===n));document.querySelectorAll('.admin-pane').forEach((p,i)=>p.classList.toggle('active',i===n))}
document.getElementById('admin-overlay').addEventListener('click',function(e){if(e.target===this)closeAdmin()});

function buildClassEditor(){
  document.getElementById('class-editor').innerHTML=classes.map((c,i)=>`
    <div class="ci-row"><div class="ci-label">수업 ${i+1}: ${c.name}</div>
      <div class="arow"><div class="afield"><label>이모지</label><input id="ce-emoji-${i}" value="${c.emoji}"></div><div class="afield"><label>이름</label><input id="ce-name-${i}" value="${c.name}"></div></div>
      <div class="arow"><div class="afield"><label>연령</label><input id="ce-age-${i}" value="${c.age}"></div><div class="afield"><label>가격</label><input id="ce-price-${i}" value="${c.price}"></div></div>
      <div class="afield"><label>단위</label><input id="ce-unit-${i}" value="${c.unit}"></div>
      <div class="afield"><label>설명</label><textarea id="ce-desc-${i}">${c.desc}</textarea></div>
      <div class="afield"><label>특징 (줄바꿈으로 구분)</label><textarea id="ce-feats-${i}">${c.feats.join('\n')}</textarea></div>
      <div class="afield"><label><input type="checkbox" id="ce-feat-${i}" ${c.featured?'checked':''}> 인기 뱃지</label></div>
    </div>`).join('');
}
function saveClasses(){
  classes=classes.map((_,i)=>({emoji:document.getElementById(`ce-emoji-${i}`).value,name:document.getElementById(`ce-name-${i}`).value,age:document.getElementById(`ce-age-${i}`).value,price:document.getElementById(`ce-price-${i}`).value,unit:document.getElementById(`ce-unit-${i}`).value,desc:document.getElementById(`ce-desc-${i}`).value,feats:document.getElementById(`ce-feats-${i}`).value.split('\n').filter(Boolean),featured:document.getElementById(`ce-feat-${i}`).checked}));
  renderClasses();closeAdmin();alert('수업 정보 저장 완료!');
}
function buildProdEditor(){
  document.getElementById('prod-editor').innerHTML=Object.entries(products).map(([cat,items])=>`
    <div class="pi-row"><div class="ci-label" style="font-size:11px;letter-spacing:2px;margin-bottom:.5rem">${cat}</div>
      ${items.map((p,i)=>`<div style="background:var(--bg2);border-radius:8px;padding:.6rem;margin-bottom:.5rem">
        <div class="arow"><div class="afield"><label>아이콘</label><input id="pe-icon-${cat}-${i}" value="${p.icon}"></div><div class="afield"><label>이름</label><input id="pe-name-${cat}-${i}" value="${p.name}"></div></div>
        <div class="afield"><label>설명</label><input id="pe-desc-${cat}-${i}" value="${p.desc}"></div>
        <div class="afield"><label>리퍼럴/구매 링크</label><input id="pe-url-${cat}-${i}" value="${p.url}" placeholder="https://..."></div>
      </div>`).join('')}
    </div>`).join('');
}
function saveProducts(){
  Object.keys(products).forEach(cat=>{products[cat]=products[cat].map((_,i)=>({icon:document.getElementById(`pe-icon-${cat}-${i}`).value,name:document.getElementById(`pe-name-${cat}-${i}`).value,desc:document.getElementById(`pe-desc-${cat}-${i}`).value,url:document.getElementById(`pe-url-${cat}-${i}`).value}))});
  renderProdTabs();renderProds();closeAdmin();alert('제품 정보 저장 완료!');
}
function saveHero(){
  const h1=document.getElementById('a-h1').value,h2=document.getElementById('a-h2').value;
  if(!document.getElementById('hero-h1')){alert('Hero 수정은 홈 페이지에서 확인할 수 있습니다.');closeAdmin();return;}
  document.getElementById('hero-h1').innerHTML=h1+'<br><span class="grad-text">'+h2+'</span><br>아이들을 초대합니다';
  document.getElementById('hero-desc').textContent=document.getElementById('a-desc').value;
  document.getElementById('s1').textContent=document.getElementById('a-s1').value;
  document.getElementById('s2').textContent=document.getElementById('a-s2').value;
  document.getElementById('s3').textContent=document.getElementById('a-s3').value;
  closeAdmin();alert('Hero 저장 완료!');
}
function saveSNS(){
  snsLinks.ig=document.getElementById('a-ig').value;snsLinks.yt=document.getElementById('a-yt').value;
  snsLinks.kk=document.getElementById('a-kk').value;snsLinks.em=document.getElementById('a-em').value;
  applySnsButtons();closeAdmin();alert('SNS 저장 완료!');
}
function applySnsButtons(){
  const open=url=>url?window.open(url,'_blank'):alert('링크가 아직 설정되지 않았습니다.');
  const email=em=>em?window.location.href='mailto:'+em:alert('이메일이 아직 설정되지 않았습니다.');
  ['nav-ig','mob-ig'].forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=()=>open(snsLinks.ig)});
  ['nav-yt','mob-yt'].forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=()=>open(snsLinks.yt)});
  ['nav-kk','mob-kk'].forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=()=>open(snsLinks.kk)});
  ['nav-em','mob-em'].forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=()=>email(snsLinks.em)});
}

// ── SNS / MOBILE ──
function toggleSns(){document.getElementById('sns-drop').classList.toggle('open')}
document.addEventListener('click',e=>{if(!e.target.closest('.contact-wrap'))document.getElementById('sns-drop').classList.remove('open')});
function toggleMobile(){document.getElementById('mobile-menu').classList.toggle('open')}
document.addEventListener('click',e=>{if(!e.target.closest('nav')&&!e.target.closest('.mobile-menu'))document.getElementById('mobile-menu').classList.remove('open')});

// ── CANVAS STARS ──
const cvs=document.getElementById('hero-canvas');const ctx=cvs?cvs.getContext('2d'):null;
let W,H,stars=[];
function resizeCvs(){if(!cvs)return;W=cvs.width=window.innerWidth;H=cvs.height=window.innerHeight}
function initStars(){stars=[];for(let i=0;i<130;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.3,sp:Math.random()*.3+.04,o:Math.random()})}
function drawStars(){if(!ctx)return;ctx.clearRect(0,0,W,H);const t=Date.now()/1000;stars.forEach(s=>{const p=.35+.65*Math.abs(Math.sin(t*s.sp+s.x));ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(129,140,248,${p*s.o})`;ctx.fill()});requestAnimationFrame(drawStars)}
resizeCvs();initStars();drawStars();
window.addEventListener('resize',()=>{resizeCvs();initStars()});

// ── PARTICLES ──
const pc=document.getElementById('particles');
if(pc) ['#818CF8','#06B6D4','#A78BFA','#67E8F9','#4F46E5'].forEach(col=>{
  for(let i=0;i<8;i++){const el=document.createElement('div');el.className='p';const sz=Math.random()*4+2,lf=Math.random()*100,dur=Math.random()*14+8,del=Math.random()*12;el.style.cssText=`width:${sz}px;height:${sz}px;left:${lf}%;background:${col};animation-duration:${dur}s;animation-delay:-${del}s`;pc.appendChild(el)}
});

// ── INIT ──
renderClasses();renderProdTabs();renderProds();renderReviews();applySnsButtons();

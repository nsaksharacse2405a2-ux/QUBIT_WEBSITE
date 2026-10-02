const $=(q,e=document)=>e.querySelector(q),app=$("#app");
const cats={tech:["Technical Events","TECHNICAL"],non:["Non-Technical Events","NON-TECHNICAL"]};
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TBA='<span class="dim">TO BE ANNOUNCED</span>',v=x=>x?esc(x):TBA;
const art=e=>e.img?`<img src="${esc(e.img)}" alt="${esc(e.name)}">`:`<svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(e.name)}"><rect width="200" height="120" fill="#2a0813"/><path d="M8 28V8h20M172 8h20v20M192 92v20h-20M28 112H8V92" stroke="#ffc933" stroke-width="2" fill="none"/><text x="100" y="78" text-anchor="middle" font-family="Bowlby One,Impact,sans-serif" font-size="60" fill="#fde3c1">${esc(e.glyph)}</text></svg>`;
const face=i=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 200"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5c1228"/><stop offset="1" stop-color="#2a0813"/></linearGradient></defs><rect width="160" height="200" fill="url(#g)"/><path d="M0 200c0-42 30-62 80-62s80 20 80 62z" fill="${["#ffc933","#fde3c1","#e8a21d","#e0392b"][i%4]}" opacity=".85"/><circle cx="80" cy="82" r="34" fill="#fde3c1" opacity=".9"/><path d="M44 80c0-30 20-44 36-44s36 14 36 44c-8-16-20-24-36-24s-28 8-36 24z" fill="${["#6b1228","#2a0813","#8d0f16","#3a0b1a"][(i+1)%4]}"/></svg>`);
const people=(a,c)=>`<div class="people ${c}">${a.map((p,i)=>{const photo=p.photo||face(i);return `<figure class="person"><a class="av" href="${esc(photo)}" target="_blank" rel="noopener" aria-label="View full-size photo of ${esc(p.name)}"><img src="${esc(photo)}" alt="${esc(p.name)}"></a><figcaption><b>${esc(p.name)}</b><span>${esc(p.role)}</span></figcaption></figure>`}).join("")}</div>`;
const archiveCard=(g,i,duplicate=false)=>`<a class="tile" href="${esc(g.src)}" target="_blank" rel="noopener" ${duplicate?'tabindex="-1" aria-hidden="true"':''}><span class="archive-photo"><img src="${esc(g.src)}" alt="${duplicate?"":esc(g.label)}" loading="lazy"></span><span class="archive-caption"><small>ARCHIVE_${String(i+1).padStart(2,"0")}</small><span>${esc(g.label||"QUBIT 2026")}</span></span></a>`;
const DIM={tv:[160,130],mic:[80,150],cas:[160,104],reel:[120,120],vin:[120,120],strip:[400,64],rad:[150,110],tel:[140,100],bb:[180,104],spk:[90,130],cam:[160,110],pc:[150,130],cp:[150,94],pad:[150,90],bulb:[70,110],star:[100,100],spark:[100,100],zig:[120,30],arr:[100,40]};
const ICO={tech:["pc","bulb","cp","cam"],non:["pad","mic","tv","bb"]};
const D=(n,c="",st="",x="")=>`<svg class="dec ${c}" style="${st}" viewBox="0 0 ${DIM[n][0]} ${DIM[n][1]}" aria-hidden="true" focusable="false" ${x}><use href="#${n}"/></svg>`;
const SEP=`<div class="sep" aria-hidden="true">${D("strip","","","data-px='-.05'")}</div>`;
const nm=c=>CONFIG[c].map(e=>`<li>${esc(e.name)}</li>`).join("");
const home=()=>{const n=CONFIG.tech.length+CONFIG.non.length,all=[...CONFIG.tech,...CONFIG.non].map(e=>e.name).join(" ★ ")+" ★ ",ab=["QUBIT 2026 is a flagship technical and non-technical fest organised by the Department of Computer Science and Engineering (CSE), Mahatma Gandhi Institute of Technology (MGIT), bringing together students with diverse interests, skills, and talents on a common platform.","The fest is designed to provide participants with opportunities to demonstrate technical expertise, creativity, problem-solving abilities, communication skills, and teamwork through a diverse range of events. QUBIT features two major categories: Technical Events and Non-Technical Events, ensuring an engaging experience for students with different interests and strengths.","The Technical Events focus on computing, innovation, logical thinking, and practical problem-solving, providing participants with an opportunity to challenge their technical knowledge and showcase their skills. The Non-Technical Events provide a platform for creativity, communication, entertainment, and individual expression beyond the conventional academic environment.","QUBIT aims to create an environment where learning meets competition and creativity meets technology. Through interactive events, challenges, and collaborative experiences, the fest encourages students to step beyond the classroom, explore their capabilities, interact with peers, and celebrate both technical excellence and creative talent.","With its retro-inspired identity and contemporary event experience, QUBIT 2026 represents the spirit of the CSE community: innovative, competitive, creative, and connected."];
return `<section id="home" class="hero"><span class="halftone" data-par="-.1"></span><span class="burst" data-par=".07"></span>${D("tv","tvh fl","right:-7%;top:3%;width:min(46vw,560px);--r:7deg;--o:.5")}${D("mic","fl lg","left:-24px;bottom:14%;width:92px;--r:-10deg;--dc:var(--dgold)")}${D("star","pul","left:46%;top:9%;width:34px;--dc:var(--dgold)")}${D("spark","pul","right:27%;bottom:18%;width:28px")}${D("cas","spin lg","right:3%;bottom:5%;width:130px;--o:.8;--dc:var(--dgold)")}
<p class="eyebrow rv">${esc(CONFIG.dept)}<em>presents</em></p>
<h1 class="ttl" aria-label="QUBIT ’26"><span class="q">QUBIT</span><span class="yr">’26</span></h1>
<div class="ticket rv" style="--i:2"><small>Save the date</small><b>${esc(CONFIG.dates)}</b></div>
<a class="hc hc-tech rv" style="--i:3" href="#/tech"><h2>Technical Events</h2><ul>${nm("tech")}</ul><span class="btn">Browse ↗</span></a>
<a class="hc hc-non rv" style="--i:4" href="#/non"><h2>Non Technical Events</h2><ul>${nm("non")}</ul><span class="btn">Browse ↗</span></a>
<div class="cd" id="cd"></div></section>
<div class="band" aria-hidden="true"><div class="bt"><span>${all.repeat(2)}</span><span>${all.repeat(2)}</span></div></div>
${SEP}<section class="stats">${[[2,"Days of QUBIT"],[n,"Events"],[2,"Categories"],[29,"Years of MGIT"]].map(([x,l],i)=>`<div class="rv" style="--i:${i}"><b data-count="${x}">00</b><small>${l}</small></div>`).join("")}</section>
<section class="landing-poster"><div class="pw"><figure class="print"><img src="${esc(CONFIG.poster)}" alt="QUBIT ’26 official poster: CSE Department, MGIT. Technical and Non-Technical events, 16–17 Oct."></figure><span class="vt">Official poster · QUBIT ’26</span>${D("vin","spin","right:-46px;bottom:-60px;width:min(30vw,240px);--o:.75;--dc:var(--dgold)")}</div></section>
<section id="about" class="about"><div class="ab">${D("star","pul","left:-8px;top:-10px;width:30px;--dc:var(--dgold)")}${D("spk","lg","right:-22px;bottom:-60px;width:92px;--r:6deg;--o:.5")}<h2 class="mk"><span>About</span></h2><p class="sub rv">Organised by the Department of Computer Science and Engineering, Mahatma Gandhi Institute of Technology (MGIT)</p>${ab.map((t,i)=>`<p class="rv${i?"":" lede"}" style="--i:${i}">${t}</p>`).join("")}</div></section>
<section id="events">${D("cas","spin lg","right:4%;top:36px;width:150px;--r:-12deg;--dc:var(--dgold)")}${D("mic","fl lg","right:21%;top:18px;width:62px;--r:14deg")}${D("star","pul","left:44%;top:46px;width:30px;--dc:var(--dgold)")}${D("rad","lg","left:-56px;bottom:-34px;width:220px;--r:-6deg;--o:.32")}${D("zig","dr lg","right:7%;bottom:14px;width:150px;--dc:var(--dgold)")}<h2 class="mk"><span>Events</span></h2><div class="cats">${["tech","non"].map((c,k)=>`<a class="cat ${c} rv" style="--i:${k}" href="#/${c}"><small>0${k+1} / ${String(CONFIG[c].length).padStart(2,"0")} events</small><h3>${cats[c][0]}</h3><ul>${CONFIG[c].map((e,i)=>`<li><i>0${i+1}</i>${esc(e.name)}</li>`).join("")}</ul><span class="go">Browse <b>↗</b></span></a>`).join("")}</div></section>
${SEP}<section id="gallery">${D("reel","spin lg","right:3%;top:24px;width:120px;--dc:var(--dgold)")}${D("arr","lg","left:46%;top:44px;width:90px")}${D("star","pul","right:18%;top:62px;width:26px;--dc:var(--dgold)")}<h2 class="mk"><span>Archive</span></h2><div class="archive-controls"><span class="archive-note">Memories from earlier QUBITs</span></div><div class="archive-viewport" tabindex="0" aria-label="QUBIT photo archive">${CONFIG.gallery.length?`<div class="archive-track"><div class="archive-set">${CONFIG.gallery.map((g,i)=>archiveCard(g,i)).join("")}</div><div class="archive-set" aria-hidden="true">${CONFIG.gallery.map((g,i)=>archiveCard(g,i,true)).join("")}</div></div>`:"<p class=\"archive-empty\">No archive photographs are available yet.</p>"}</div></section>
<section id="faculty">${D("bulb","pul lg","right:6%;top:30px;width:50px;--r:12deg;--dc:var(--dgold)")}${D("spark","pul","right:15%;top:72px;width:24px")}<h2 class="mk"><span>Faculty</span></h2><p class="section-intro">The faculty who guide and support QUBIT.</p><div class="fgrid"><div><aside class="marq rv"><div class="mi"><h3>Chairman</h3><p><b>${esc(CONFIG.chairman.name)}</b><br>${esc(CONFIG.chairman.role)}</p><hr><h3>Faculty Coordinators</h3><ul>${CONFIG.facCoord.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div></aside><div class="rs lg">${D("rad","st","width:min(100%,250px);--r:-5deg;--o:.6")}</div></div><div>${people(CONFIG.faculty,"fac")}</div></div></section>
<section id="coordinators">${D("zig","dr lg","right:5%;top:40px;width:130px;--dc:var(--dgold)")}${D("spark","pul","right:3%;top:92px;width:28px")}${D("bb","lg","right:-80px;bottom:-34px;width:270px;--r:-6deg;--o:.26")}<h2 class="mk"><span>Coordinators</span></h2><p class="section-intro">Connect with the student coordinators who manage each event, assist participants, and ensure a smooth and engaging QUBIT experience.</p>${people(CONFIG.coordinators,"")}</section>
${SEP}<section id="contact">${D("tel","fl lg","right:6%;top:30px;width:170px;--r:8deg;--dc:var(--dgold)")}${D("pad","lg","left:-34px;bottom:-30px;width:190px;--r:-10deg;--o:.3")}${D("star","pul","right:31%;top:60px;width:28px;--dc:var(--dgold)")}<h2 class="mk"><span>Contact</span></h2><p class="section-intro">Questions about QUBIT ’26? Reach out to the CSE department team.</p><div class="cwrap"><div class="box cmap"><iframe title="MGIT location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${esc(CONFIG.mapEmbed)}"></iframe><a class="btn" href="${esc(CONFIG.mapLink)}" target="_blank" rel="noopener">Open in Maps ↗</a></div><div><div class="cinfo"><div class="box ci"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg><div><h3>Location</h3><p>${esc(CONFIG.location)}</p></div></div><div class="box ci"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h3l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v3a3 3 0 01-3 3A16 16 0 013 6a3 3 0 013-3z"/></svg><div><h3>Call</h3><p>${/\d{6,}/.test(CONFIG.phone)?`<a href="tel:${esc(CONFIG.phone.replace(/[^+\d]/g,""))}">${esc(CONFIG.phone)}</a>`:esc(CONFIG.phone)}</p></div></div></div><div class="box git"><h3>Get in Touch</h3><p>Questions about QUBIT 2026? Reach out to the CSE department team.</p></div></div></div></section>`};
const list=k=>`<section class="lp">${D("tv","fl lg","right:-70px;top:150px;width:330px;--r:-6deg;--o:.2")}${D("reel","spin lg","left:-56px;bottom:50px;width:200px;--o:.22;--dc:var(--dgold)")}<a class="back" href="#events">← Back</a><h2 class="mk"><span>${cats[k][0]}</span></h2>
<div class="tabs">${Object.keys(cats).map(c=>`<a class="btn ${c===k?"on":""}" href="#/${c}">${cats[c][1]}</a>`).join("")}</div>
<div class="grid">${CONFIG[k].map((e,i)=>`<article class="card c${i%4} rv" style="--i:${i}"><span class="num">0${i+1}</span>${D(ICO[k][i%4],"cdi","right:14px;top:14px;width:46px;--o:.35")}<h3>${esc(e.name)}</h3><a class="ex" href="#/event/${k}/${i}">Explore ↗</a><a class="cover" href="#/event/${k}/${i}" aria-label="Explore ${esc(e.name)}" tabindex="-1"></a></article>`).join("")}</div></section>`;
const detail=(k,i)=>{
  const e=CONFIG[k][i],t=e.team,p=e.prize||{},cs=e.coordinators||[];
  const pz=[["🥇 First prize",p.first],["🥈 Second prize",p.second],["🥉 Third prize",p.third]].filter(x=>x[1]);
  const ts=t==="individual"?"INDIVIDUAL":t?`${t.min} - ${t.max} MEMBERS`:"";
  const info=[["EVENT TYPE",cats[k][1]],["TEAM SIZE",ts],["REGISTRATION FEE",e.fee],["PRIZE POOL",e.pool],["DATE",e.date],["TIME",e.time],["VENUE",e.venue]];
  return `<section class="dtl">${D("reel","spin lg","right:-44px;top:100px;width:170px;--o:.28;--dc:var(--dgold)")}${D("star","pul","right:12%;top:90px;width:28px;--dc:var(--dgold)")}<a class="back" href="#/${k}">← Back to events</a>
<div class="dp"><figure class="print bigpost">${e.poster?`<button class="poster-trigger" type="button" aria-label="Enlarge ${esc(e.name)} poster"><img src="${esc(e.poster)}" alt="${esc(e.name)} poster"></button><dialog class="poster-dialog" aria-label="${esc(e.name)} poster"><form method="dialog"><button class="poster-close" aria-label="Close enlarged poster">Close ×</button></form><img src="${esc(e.poster)}" alt="${esc(e.name)} poster enlarged"></dialog>`:art(e)}</figure>
<div class="dh"><small class="dim">${cats[k][1]} EVENT</small><h1>${esc(e.name)}</h1><p class="tag">“${esc(e.tag||"Tagline pending")}”</p>
<div class="sec"><h3>Description</h3>${e.desc?e.desc.split("\n\n").map(x=>`<p>${esc(x)}</p>`).join(""):'<p class="dim">Description pending: what the event is, what participants do, the objective, rules and skills involved.</p>'}</div></div></div>
<div class="sec"><h3>Event Information</h3><div class="ib">${info.map(([a,b])=>`<div><small>${a}</small>${v(b)}</div>`).join("")}</div></div>
<div class="sec"><h3>Prize Money</h3><div class="prize">${pz.length?pz.map(([a,b])=>`<p>${a} ${esc(b)}</p>`).join(""):TBA}</div></div>
<div class="sec"><h3>Team Size</h3>${t==="individual"?"<p>TEAM SIZE: INDIVIDUAL PARTICIPATION</p>":t?`<p>MINIMUM MEMBERS: ${esc(t.min)}</p><p>MAXIMUM MEMBERS: ${esc(t.max)}</p>`:TBA}</div>
<div class="sec"><h3>Event Coordinator</h3>${cs.length?cs.map(c=>`<div class="box" style="padding:12px 16px;margin-bottom:14px;max-width:460px">${c.name?`<p>NAME: ${esc(c.name)}</p>`:""}${c.phone?`<p>PHONE: <a href="tel:${esc(c.phone.replace(/[^+\d]/g,""))}" style="text-decoration:underline">${esc(c.phone)}</a></p>`:""}${c.email?`<p>EMAIL: <a href="mailto:${esc(c.email)}" style="text-decoration:underline">${esc(c.email)}</a></p>`:""}</div>`).join(""):TBA}</div>
<div class="sec"><a class="reg" href="${esc(e.form||"#")}"${e.form&&CONFIG.newTab?' target="_blank" rel="noopener"':""}>Register Now</a></div></section>`};
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;let rvIO;
app.addEventListener("click",e=>{
  if(!(e.target instanceof Element))return;
  const trigger=e.target.closest(".poster-trigger");
  if(trigger){trigger.closest(".bigpost").querySelector(".poster-dialog").showModal();return}
  if(e.target.matches(".poster-dialog"))e.target.close();
});
function fx(){const els=app.querySelectorAll(".rv:not(.in),.mk:not(.in),.clip:not(.in)");
  if(RM){els.forEach(e=>e.classList.add("in"));app.querySelectorAll("[data-count]").forEach(e=>e.textContent=String(e.dataset.count).padStart(2,"0"));return}
  rvIO=rvIO||new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;rvIO.unobserve(x.target);x.target.classList.add("in")}),{threshold:.12});
  els.forEach(e=>rvIO.observe(e));
  const cIO=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;cIO.unobserve(x.target);const e=x.target,n=+e.dataset.count,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1300);e.textContent=String(Math.round(n*(1-Math.pow(1-p,3)))).padStart(2,"0");p<1&&requestAnimationFrame(f)})(t0)}),{threshold:.4});
  app.querySelectorAll("[data-count]").forEach(e=>cIO.observe(e))}
if(!RM){let tk=0;addEventListener("scroll",()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;document.querySelectorAll("[data-par],[data-px]").forEach(e=>e.style.translate=((e.dataset.px||0)*scrollY).toFixed(1)+"px "+((e.dataset.par||0)*scrollY).toFixed(1)+"px")})},{passive:true})}
// countdown
const T=new Date(CONFIG.target).getTime();
setInterval(tick,1000);
function tick(){const el=$("#cd");if(!el)return;const s=Math.max(0,Math.floor((T-Date.now())/1000));
  if(Date.now()>=T){el.innerHTML=`<p class="cdmsg">${CONFIG.afterMsg}</p>`;return}
  el.innerHTML=[["Days",s/86400],["Hours",s%86400/3600],["Mins",s%3600/60],["Secs",s%60]].map(([l,n])=>`<div><b>${String(Math.floor(n)).padStart(2,"0")}</b><small>${l}</small></div>`).join("")}
// router
let cur="",io,archiveFrame=0;
function route(){
  const h=location.hash,m=h.match(/^#\/(tech|non)$/),d=h.match(/^#\/event\/(tech|non)\/(\d+)$/),ok=d&&CONFIG[d[1]][d[2]];
  const key=m?h:ok?h:"home";
  if(key!==cur){if(archiveFrame)cancelAnimationFrame(archiveFrame);archiveFrame=0;cur=key;app.innerHTML=`<div class="view">${m?list(m[1]):ok?detail(d[1],+d[2]):home()}</div>`;
    if(key==="home"){tick();initArchive();io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&mark("#"+x.target.id)),{rootMargin:"-40% 0px -55% 0px"});app.querySelectorAll("section[id]").forEach(s=>io.observe(s))}else{io&&io.disconnect();mark("#events")}}
  if(key==="home"){let t=null;try{t=h.length>1&&$(h)}catch(e){}t?t.scrollIntoView():scrollTo(0,0)}else scrollTo(0,0);
  fx();
}
const mark=id=>document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")===id));
addEventListener("hashchange",route);route();
function initArchive(){
  const viewport=$(".archive-viewport"),track=$(".archive-track");
  if(!viewport||!track)return;
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let paused=reduced,last=0;
  viewport.addEventListener("mouseenter",()=>paused=true);
  viewport.addEventListener("mouseleave",()=>paused=false);
  viewport.addEventListener("focusin",()=>paused=true);
  viewport.addEventListener("focusout",e=>{if(!viewport.contains(e.relatedTarget))paused=false});
  const advance=time=>{
    if(last&&!paused){
      const first=track.querySelector(".archive-set");
      const gap=parseFloat(getComputedStyle(track).columnGap)||0;
      viewport.scrollLeft+=Math.min(time-last,50)*.025;
      if(viewport.scrollLeft>=first.getBoundingClientRect().width+gap)viewport.scrollLeft-=first.getBoundingClientRect().width+gap;
    }
    last=time;
    archiveFrame=requestAnimationFrame(advance);
  };
  if(!reduced&&CONFIG.gallery.length>1)archiveFrame=requestAnimationFrame(advance);
}
// boot
(()=>{const b=$("#boot"),i=$("#bari");let n=0;const t=setInterval(()=>{n++;i.style.width=n*6.25+"%";if(n>=16){clearInterval(t);$("#bootx").textContent+="\nSHOW TIME";setTimeout(()=>b.classList.add("off"),250)}},80)})();
// theme switch (dark / light)
const th=$("#theme"),root=document.documentElement;
function setTheme(l){root.classList.toggle("light",l);th.textContent=l?"Dark":"Light";try{localStorage.setItem("qubit-theme",l?"light":"dark")}catch(e){}}
let saved;try{saved=localStorage.getItem("qubit-theme")}catch(e){}
setTheme(saved==="light");th.onclick=()=>setTheme(!root.classList.contains("light"));

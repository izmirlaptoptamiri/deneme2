/* ═══════════════════════════════════════
   ENCRYPTFILES.ONLINE — SHARED UTILITIES
   ═══════════════════════════════════════ */
"use strict";

/* ── NAV HTML ─────────────────────────────────────────────────── */
function renderNav(activePage){
  const pages=[
    {href:'/',label:'Home'},
    {href:'/tools/',label:'All Tools'},
    {href:'/protect-pdf/',label:'Protect PDF',cls:'hide-md'},
    {href:'/encrypt/',label:'Encrypt Files',cls:'hide-md'},
    {href:'/compress-pdf/',label:'Compress PDF',cls:'hide-md'},
  ];
  document.getElementById('nav-placeholder').innerHTML=`
  <nav>
    <div class="wrap">
      <div class="nav-inner">
        <a href="/" class="logo">
          <div class="logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          EncryptFiles<span>.online</span>
        </a>
        <span class="nav-free">FREE</span>
        <div class="nav-links">
          ${pages.map(p=>`<a href="${p.href}" class="${p.cls||''}${activePage===p.href?' active':''}">${p.label}</a>`).join('')}
          <a href="/encrypt/" class="nav-cta">Encrypt Now</a>
        </div>
        <button class="nav-mob" onclick="toggleMobileMenu()" style="background:none;border:1px solid var(--border2);border-radius:var(--rs);color:var(--muted);padding:7px 10px;cursor:pointer;font-size:18px;line-height:1;">☰</button>
      </div>
    </div>
    <div id="mob-menu" style="display:none;border-top:1px solid var(--border);background:var(--bg2);">
      <div class="wrap" style="padding:12px 24px;display:flex;flex-direction:column;gap:4px;">
        ${pages.map(p=>`<a href="${p.href}" style="padding:10px 0;font-size:14px;color:var(--muted);text-decoration:none;border-bottom:1px solid var(--border);">${p.label}</a>`).join('')}
        <a href="/encrypt/" style="margin-top:12px;padding:12px;text-align:center;background:var(--accent);color:#000;font-weight:700;border-radius:var(--rs);text-decoration:none;">Encrypt Now</a>
      </div>
    </div>
  </nav>`;
}

function toggleMobileMenu(){
  const m=document.getElementById('mob-menu');
  m.style.display=m.style.display==='none'?'block':'none';
}

/* ── FOOTER HTML ──────────────────────────────────────────────── */
function renderFooter(){
  document.getElementById('footer-placeholder').innerHTML=`
  <footer>
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo" style="text-decoration:none;display:inline-flex;">
            <div class="logo-icon" style="width:26px;height:26px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <span style="margin-left:8px;font-family:var(--mono);font-size:13px;font-weight:600;">EncryptFiles<span style="color:var(--accent)">.online</span></span>
          </a>
          <p>Free browser-based encryption & document tools. Your files never leave your device. No account required.</p>
        </div>
        <div class="footer-col">
          <h4>Encrypt</h4>
          <a href="/encrypt/">Encrypt Files</a>
          <a href="/decrypt/">Decrypt Files</a>
          <a href="/protect-pdf/">Protect PDF</a>
          <a href="/unlock-pdf/">Unlock PDF</a>
          <a href="/protect-word/">Protect Word</a>
          <a href="/protect-excel/">Protect Excel</a>
        </div>
        <div class="footer-col">
          <h4>PDF Tools</h4>
          <a href="/merge-pdf/">Merge PDF</a>
          <a href="/split-pdf/">Split PDF</a>
          <a href="/compress-pdf/">Compress PDF</a>
          <a href="/pdf-to-word/">PDF to Word</a>
          <a href="/word-to-pdf/">Word to PDF</a>
          <a href="/pdf-to-jpg/">PDF to JPG</a>
        </div>
        <div class="footer-col">
          <h4>More Tools</h4>
          <a href="/compress-image/">Compress Image</a>
          <a href="/resize-image/">Resize Image</a>
          <a href="/remove-exif/">Remove EXIF</a>
          <a href="/password-generator/">Password Generator</a>
          <a href="/hash-generator/">Hash Generator</a>
          <a href="/tools/">All Tools →</a>
        </div>
      </div>
      <div class="footer-bot">
        <span>© ${new Date().getFullYear()} EncryptFiles.online — Free encryption & document tools for everyone.</span>
        <div class="footer-tags">
          <span class="ftag">AES-256-GCM</span>
          <span class="ftag">No Upload</span>
          <span class="ftag">100% Free</span>
          <span class="ftag">No Account</span>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ── COMMON UTILITIES ─────────────────────────────────────────── */
function fmtSize(b){if(b<1024)return b+' B';if(b<1048576)return(b/1024).toFixed(1)+' KB';if(b<1073741824)return(b/1048576).toFixed(1)+' MB';return(b/1073741824).toFixed(2)+' GB';}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function dl(blob,name){const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),5000);}
function showProg(id,s){document.getElementById('prog-'+id).style.display=s?'block':'none';}
function setP(id,p,t){document.getElementById('pf-'+id).style.width=p+'%';document.getElementById('pt-'+id).textContent=t;}
function showRes(id,type,msg){const el=document.getElementById('res-'+id);el.style.display='block';el.className='res '+(type==='ok'?'res-ok':'res-err');el.textContent=msg;}
function hideRes(id){const el=document.getElementById('res-'+id);if(el)el.style.display='none';}
function toggleFaq(btn){const item=btn.parentElement;const isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(el=>{el.classList.remove('open');el.querySelector('.faq-q').setAttribute('aria-expanded','false');});if(!isOpen){item.classList.add('open');btn.setAttribute('aria-expanded','true');}}
function togglePw(id,btn){const el=document.getElementById(id);el.type=el.type==='password'?'text':'password';btn.textContent=el.type==='password'?'Show':'Hide';}

function getFiletype(n){
  const e=n.split('.').pop().toLowerCase();
  if(e==='pdf')return'pdf';
  if(['jpg','jpeg','png','gif','webp','bmp','tiff','svg','ico','heic','raw','cr2','nef'].includes(e))return'img';
  if(['mp4','avi','mkv','mov','3gp','wmv','flv','webm'].includes(e))return'vid';
  if(['doc','docx','xls','xlsx','ppt','pptx','txt','csv','rtf'].includes(e))return'doc';
  if(['zip','rar','7z','tar','gz','iso'].includes(e))return'zip';
  return'any';
}
function ficonClass(n){return'fi-'+getFiletype(n);}
function ficonLabel(n){return{pdf:'PDF',img:'IMG',vid:'VID',doc:'DOC',zip:'ZIP',any:'FILE'}[getFiletype(n)];}

async function deriveKey(pw,salt,iterations=150000){
  const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),{name:'PBKDF2'},false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations,hash:'SHA-256'},km,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}

function pwStrength(pw){
  let s=0;
  if(pw.length>=8)s++;if(pw.length>=14)s++;
  if(/[A-Z]/.test(pw)&&/[a-z]/.test(pw))s++;
  if(/[0-9]/.test(pw)&&/[^A-Za-z0-9]/.test(pw))s++;
  return s;
}
function renderStrength(pw,barPrefix,lblId){
  const s=pwStrength(pw);
  const colors=['#ff5470','#ffb84d','#7c5cfc','#00e5a0'];
  const labels=['Too weak — add more characters','Weak — add uppercase & symbols','Good — almost there','Strong password ✓'];
  for(let i=0;i<4;i++)document.getElementById(barPrefix+(i+1)).style.background=i<s?colors[s-1]:'var(--border2)';
  if(lblId)document.getElementById(lblId).textContent=s>0?labels[s-1]:'Enter a password';
}

function setupDrop(dzId,onFiles){
  const el=document.getElementById(dzId);
  if(!el)return;
  el.addEventListener('dragover',e=>{e.preventDefault();el.classList.add('over');});
  el.addEventListener('dragleave',()=>el.classList.remove('over'));
  el.addEventListener('drop',e=>{e.preventDefault();el.classList.remove('over');onFiles(e.dataTransfer.files);});
}

/* ── SCHEMA / SEO HELPERS ────────────────────────────────────── */
function injectSchema(obj){
  const s=document.createElement('script');
  s.type='application/ld+json';
  s.textContent=JSON.stringify(obj);
  document.head.appendChild(s);
}

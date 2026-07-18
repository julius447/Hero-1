const rmq=matchMedia('(prefers-reduced-motion:reduce)');
const closeMegas=()=>{document.querySelectorAll('.nav__item.open').forEach(o=>{
  o.classList.remove('open');o.querySelector('.nav__link').setAttribute('aria-expanded','false');});
  document.body.classList.remove('menu-open');};

/* desktop mega: hover-intent (mouse only, per-item timers) + click + focus-out */
document.querySelectorAll('.nav__item[data-menu]').forEach(item=>{
  const link=item.querySelector('.nav__link');
  const openItem=()=>{clearTimeout(item._closeTimer);
    document.querySelectorAll('.nav__item.open').forEach(o=>{if(o!==item){o.classList.remove('open');o.querySelector('.nav__link').setAttribute('aria-expanded','false');}});
    item.classList.add('open');link.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');};
  item.addEventListener('pointerenter',e=>{if(e.pointerType!=='mouse')return;clearTimeout(item._closeTimer);item._openTimer=setTimeout(openItem,80);});
  item.addEventListener('pointerleave',e=>{if(e.pointerType!=='mouse')return;clearTimeout(item._openTimer);
    item._closeTimer=setTimeout(()=>{item.classList.remove('open');link.setAttribute('aria-expanded','false');
      if(!document.querySelector('.nav__item:hover, .mega:hover'))document.body.classList.remove('menu-open');},250);});
  link.addEventListener('click',()=>{clearTimeout(item._openTimer);item.classList.contains('open')?closeMegas():openItem();});
  item.addEventListener('focusout',e=>{if(!item.contains(e.relatedTarget)){item.classList.remove('open');link.setAttribute('aria-expanded','false');
    if(!document.querySelector('.nav__item.open'))document.body.classList.remove('menu-open');}});
});

/* mobile drawer: inert(+aria-hidden fallback), iOS-safe body scroll-lock, focus return */
const burger=document.getElementById('burger');
const drawer=document.querySelector('.drawer');
const pageMain=document.querySelector('main');
const supportsInert='inert' in drawer;
if(supportsInert)drawer.inert=true;else drawer.setAttribute('aria-hidden','true');
let _lockY=0;
const lockBody=()=>{_lockY=window.scrollY;const b=document.body.style;b.position='fixed';b.top=-_lockY+'px';b.left='0';b.right='0';b.width='100%';};
const unlockBody=()=>{const b=document.body.style;b.position='';b.top='';b.left='';b.right='';b.width='';window.scrollTo(0,_lockY);};
const setDrawer=open=>{
  if(open===document.body.classList.contains('drawer-open'))return;   /* idempotent: don't re-lock / steal focus */
  document.body.classList.toggle('drawer-open',open);
  burger.setAttribute('aria-expanded',open);burger.setAttribute('aria-label',open?'Stäng meny':'Öppna meny');
  if(supportsInert){drawer.inert=!open;pageMain.inert=open;}
  else{drawer.setAttribute('aria-hidden',String(!open));pageMain.setAttribute('aria-hidden',String(open));}
  if(open){lockBody();const f=drawer.querySelector('button,a');if(f)f.focus();}
  else{unlockBody();burger.focus();}
};
burger.addEventListener('click',()=>setDrawer(!document.body.classList.contains('drawer-open')));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>{setDrawer(false);closeMegas();}));
matchMedia('(min-width:993px)').addEventListener('change',e=>{if(e.matches)setDrawer(false);});

/* two-level accordions — reduced-motion safe, animated sibling close, correct parent height */
let accId=0;
document.querySelectorAll('[data-acc]').forEach(acc=>{
  const head=acc.querySelector(':scope > .acc__head');
  const body=acc.querySelector(':scope > .acc__body');
  const bid='acc-body-'+(++accId);body.id=bid;
  head.setAttribute('aria-expanded','false');head.setAttribute('aria-controls',bid);
  body.addEventListener('transitionend',e=>{if(e.target===body&&acc.classList.contains('open'))body.style.maxHeight='none';});
  head.addEventListener('click',()=>{
    const isOpen=acc.classList.contains('open');
    const reduce=rmq.matches;
    const parent=acc.parentElement.closest('[data-acc]');
    acc.parentElement.querySelectorAll(':scope > [data-acc].open').forEach(o=>{
      if(o!==acc){o.classList.remove('open');o.querySelector(':scope > .acc__head').setAttribute('aria-expanded','false');
        const ob=o.querySelector(':scope > .acc__body');
        if(ob.style.maxHeight==='none'){ob.style.maxHeight=ob.scrollHeight+'px';void ob.offsetHeight;}
        ob.style.maxHeight=null;}});
    if(isOpen){
      if(body.style.maxHeight==='none'){body.style.maxHeight=body.scrollHeight+'px';void body.offsetHeight;}
      acc.classList.remove('open');head.setAttribute('aria-expanded','false');body.style.maxHeight=null;
    }else{
      acc.classList.add('open');head.setAttribute('aria-expanded','true');
      body.style.maxHeight=reduce?'none':body.scrollHeight+'px';   /* reduce-motion: unpin now (no transitionend) */
    }
    if(parent){const pb=parent.querySelector(':scope > .acc__body');
      if(pb.style.maxHeight!=='none')pb.style.maxHeight=pb.scrollHeight+'px';}   /* child already expanded → no double-count */
  });
});

document.addEventListener('keydown',e=>{if(e.key==='Escape'){
  const openNav=document.querySelector('.nav__item.open');if(openNav)openNav.querySelector('.nav__link').focus();
  closeMegas();setDrawer(false);}});

/* decorative chevrons / arrows / phone glyphs are named by adjacent text — hide from AT */
document.querySelectorAll('.hdr svg, .drawer svg, .go').forEach(s=>s.setAttribute('aria-hidden','true'));

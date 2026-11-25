const nav=document.querySelector('nav');const toggle=document.querySelector('.hamb');
function showNav(open){nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Chiudi navigazione':'Apri navigazione');}
toggle.addEventListener('click',()=>showNav(!nav.classList.contains('open')));
nav.addEventListener('click',()=>showNav(false));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){showNav(false);toggle.focus();}});
const gallery=document.querySelector('dialog');const photo=gallery.querySelector('img');
document.querySelectorAll('.photos button').forEach(button=>button.addEventListener('click',()=>{const original=button.querySelector('img');photo.src=original.src;photo.alt=original.alt;gallery.showModal();}));
gallery.querySelector('button').addEventListener('click',()=>gallery.close());
gallery.addEventListener('click',event=>{if(event.target===gallery)gallery.close();});

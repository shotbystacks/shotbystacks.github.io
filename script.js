const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}


const dialog = document.querySelector('.lightbox');
if (dialog) {
  const dialogImage = dialog.querySelector('img');
  document.querySelectorAll('.work-card').forEach(card => card.addEventListener('click', () => {
    dialogImage.src = card.dataset.full;
    dialogImage.alt = card.querySelector('img').alt;
    dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && dialog.open) dialog.close();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

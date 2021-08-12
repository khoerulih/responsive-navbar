function classToggle() {
  document.querySelector('.nav-link').classList.toggle('nav-toggle-show');
}

document.querySelector('.nav-toggle').addEventListener('click', classToggle);

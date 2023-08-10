const toggleButton = document.getElementById('toggle-button');
const banner = document.getElementById('banner');
const nav = document.getElementById('nav');

toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light');
    banner.classList.toggle('headerLight');
    nav.classList.toggle('navLight')
  });
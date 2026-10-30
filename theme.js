/* Mobile navigation stays keyboard accessible and closes after selecting a section. */
(function () {
  var button = document.querySelector('.nav-toggle');
  var links = document.getElementById('primaryNavigation');
  if (!button || !links) return;
  function closeMenu() {
    links.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '메뉴 ☰';
  }
  button.addEventListener('click', function () {
    var opened = links.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(opened));
    button.textContent = opened ? '닫기 ×' : '메뉴 ☰';
  });
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && links.classList.contains('is-open')) {
      closeMenu();
      button.focus();
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
})();

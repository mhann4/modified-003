// fl.js
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isActive = sidebar.classList.contains('active');
  if (!isActive) {
    history.pushState({ sidebarOpen: true }, '');
  }
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

window.addEventListener('popstate', (event) => {
  if (sidebar.classList.contains('active')) {
    toggleMenu();
  }
});

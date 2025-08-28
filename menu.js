Document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("toggleCheckbox");
  checkbox.checked = true; // Auto-open menu on page load
});

window.addEventListener('popstate', function(event) {
  // Check if we're on the main menu page. If so, exit the app.
  if (window.location.href.includes('menu.html')) {
    window.close(); // or history.go(-1);
  }
});

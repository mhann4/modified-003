Document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("toggleCheckbox");
  checkbox.checked = true; // Auto-open menu on page load

  // This prevents the user from going back to a previous page.
  // When the menu page is loaded, it replaces the current history state.
  history.replaceState(null, null, 'menu.html');

  // Listen for the popstate event, which is triggered by the browser's back button.
  window.addEventListener('popstate', function(event) {
    // If the user tries to go back from the menu page, we close the window.
    if (window.location.href.endsWith('menu.html')) {
      window.close();
    }
  });
});

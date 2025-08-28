Document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("toggleCheckbox");
  checkbox.checked = true; // Auto-open menu on page load

  // Clear browser history when the menu page is loaded
  // This prevents the user from going back to a previous page
  // and ensures the phone's back key will exit the app from this page.
  history.replaceState(null, null, location.href);
});

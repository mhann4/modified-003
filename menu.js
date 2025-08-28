Document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("toggleCheckbox");
  checkbox.checked = true; // Auto-open menu on page load

  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.history.back(); // Go back to the previous page
  });

  // This is the core logic to prevent looping
  if (window.performance.navigation.type === 1) {
    // This part runs only on a page reload (F5 or browser refresh)
    // We do nothing here
  } else {
    // This part runs when navigating from another page (e.g., from giveaway.html)
    history.replaceState(null, null, location.href);
  }
});

// If the user navigates to this page from a different one,
// we will replace the history state to prevent going back.
window.onpageshow = function(event) {
  if (event.persisted) {
    history.replaceState(null, null, location.href);
  }
};

window.addEventListener('popstate', function(event) {
  // Check if we're on the menu page, then try to exit
  if (window.location.href.includes('menu.html')) {
    window.close();
  }
});

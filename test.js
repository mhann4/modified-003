// Function to initialize Google Translate Element
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'my', includedLanguages: 'en'}, 'google_translate_element');
}

// Function to trigger the translation to English
function translatePageToEnglish() {
  const translateElement = document.querySelector('.goog-te-combo');
  if (translateElement) {
    translateElement.value = 'en';
    translateElement.dispatchEvent(new Event('change'));
  }
}

// Automatically translate the page to English when it loads
// We use a slight delay to ensure the translate script has loaded
window.onload = function() {
  setTimeout(translatePageToEnglish, 1000); // 1 second delay
};

// Add the Google Translate script to the body
(function() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
})();

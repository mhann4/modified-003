// Function to load the Google Translate script
function loadGoogleTranslate() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
}

// Function to initialize Google Translate Element and select English
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'my',
    includedLanguages: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
  
  // Wait for the dropdown to be created and then set the value to English
  const interval = setInterval(() => {
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = 'en';
      selectElement.dispatchEvent(new Event('change'));
      clearInterval(interval);
    }
  }, 500);
}

// Function to handle the buttons and load the stream
function loadStream(quality) {
  const mainContainer = document.querySelector('.main-container');
  const streamContainer = document.getElementById('stream-container');
  const liveStreamFrame = document.getElementById('liveStream');

  let streamUrl = '';
  if (quality === 'hd') {
    streamUrl = 'https://okwintv.vip/';
  } else if (quality === 'sd') {
    streamUrl = 'https://socolive99.ac/';
  }

  liveStreamFrame.src = streamUrl;
  
  mainContainer.style.display = 'none';
  streamContainer.style.display = 'block';
  
  // Now, load the Google Translate element
  loadGoogleTranslate();
}

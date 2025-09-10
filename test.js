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

function loadGoogleTranslate() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'my',
    includedLanguages: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
  
  const interval = setInterval(() => {
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = 'en';
      selectElement.dispatchEvent(new Event('change'));
      clearInterval(interval);
    }
  }, 500);
}

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
  
  // Hide main container and show stream container
  mainContainer.style.display = 'none';
  streamContainer.style.display = 'block';
}

// Google Translate functions
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'my',
    includedLanguages: 'en'
  }, 'google_translate_element');
}

(function() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
})();

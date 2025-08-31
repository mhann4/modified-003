document.getElementById('matchCard').addEventListener('click', function() {
  const matchInfo = document.getElementById('matchInfo');
  const matchDetails = document.querySelector('.match-details');
  const qualityOptions = document.getElementById('qualityOptions');
  
  // Hide initial view and show quality options
  matchInfo.style.display = 'none';
  matchDetails.style.display = 'none';
  qualityOptions.style.display = 'block';
});

function loadVideo(quality) {
  const matchCard = document.getElementById('matchCard');
  const videoContainer = document.getElementById('videoContainer');
  
  // Hide the match card and show the video container
  matchCard.style.display = 'none';
  videoContainer.style.display = 'block';
  
  // Note: The iframe is already loaded with the URL in HTML,
  // so this function just needs to handle the display of elements.
}

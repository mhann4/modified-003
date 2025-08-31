document.getElementById('matchCard').addEventListener('click', function() {
  const matchInfo = document.getElementById('matchInfo');
  const matchDetails = document.querySelector('.match-details');
  const qualityOptions = document.getElementById('qualityOptions');
  
  matchInfo.style.display = 'none';
  matchDetails.style.display = 'none';
  qualityOptions.style.display = 'block';
});

function loadVideo(quality) {
  const matchCard = document.getElementById('matchCard');
  const videoContainer = document.getElementById('videoContainer');
  const videoFrame = document.getElementById('videoFrame');
  
  let videoSrc = '';
  if (quality === 'hd') {
    videoSrc = 'https://okwintv.vip/livestream/12391';
  } else if (quality === 'sd') {
    videoSrc = 'https://www.iamchanelwestcoast.com/truc-tiep/liverpool-vs-arsenal-31-08-2025/';
  }

  videoFrame.src = videoSrc;
  
  matchCard.style.display = 'none';
  videoContainer.style.display = 'block';
}

function goFullscreen() {
  const videoFrame = document.getElementById('videoFrame');
  if (videoFrame.requestFullscreen) {
    videoFrame.requestFullscreen();
  } else if (videoFrame.webkitRequestFullscreen) { /* Safari */
    videoFrame.webkitRequestFullscreen();
  } else if (videoFrame.msRequestFullscreen) { /* IE11 */
    videoFrame.msRequestFullscreen();
  }
}

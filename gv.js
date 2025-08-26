// Menu Functions
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isActive = sidebar.classList.contains('active');
  if (!isActive) {
    history.pushState({ sidebarOpen: true }, '');
  }
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

window.addEventListener('popstate', (event) => {
  if (sidebar.classList.contains('active')) {
    toggleMenu();
  }
});

// Browser ရဲ့ back key အတိုင်း အလုပ်လုပ်မယ့် function အသစ်
function goBack() {
  window.history.back();
}

// Video Data
const videoData = [
  { title: "App and bonus", thumb: "images/app-and-bonus.png", video: "1P5Aa179THk-2qIDFp8KsSmVJoY3eHRtw" },
  { title: "Friday bonus", thumb: "images/friday-bonus.png", video: "1PJvASoJ0s1y2vtDe8cJXmODyUyeRfMVA" },
  { title: "Ga ချိတ်/ဖြုတ်", thumb: "images/ga-setup-remove.png", video: "1RLdxOGoxLiA3DdNr19S68MnI3aqPsSgj" },
  { title: "Hyper Bonus", thumb: "images/hyper-bonus.png", video: "1PEvsEfe12HjtBaEgrk67qoaAhZojuGVN" },
  { title: "Monday bonus", thumb: "images/monday-bonus.png", video: "1PQY4wSjIQRjt0q7gkK0Tm3YC0AANRPHf" },
  { title: "System bet", thumb: "images/system-bet.png", video: "1P4AVEKKQr4EFczBFFToGet3LKDuLVOn-" },
  { title: "Top bins", thumb: "images/top-bins.png", video: "1PHbk8t2aw-Hc_785Ster9hpqlpNw61wz" },
  { title: "X2 Wednesday promotion", thumb: "images/x2-wednesday-promo.png", video: "1PDyQ94yAkFBbNk-qm9PbrhGBKZQPXr7f" },
  { title: "How to Sign up?", thumb: "images/how-to-sign-up.png", video: "1PQxDktomqsfwg4T0uiAdi1RtAleloBSy" },
  { title: "Loboki Bet Builder", thumb: "images/loboki-bet-builder.png", video: "10USKQYSCAnizbQcu88XJbnd8GAvcDho2" },
  { title: "Promo Codes", thumb: "images/promo-codes.png", video: "1c0eiqeuAFM3Wur1LBhcWAlC2XMxI2gE8" }
];

const searchInput = document.getElementById('searchInput');
const videoGrid = document.getElementById('videoGrid');
const videoModal = document.getElementById('videoModal');
const modalContent = videoModal.querySelector('.modal-content');
const closeBtn = videoModal.querySelector('.close-btn');

function renderVideos(filteredVideos) {
  videoGrid.innerHTML = '';
  if (filteredVideos.length > 0) {
    filteredVideos.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.thumb}" alt="${item.title}" />
        <h3>${item.title}</h3>
      `;
      card.onclick = () => openModal(item.video);
      videoGrid.appendChild(card);
    });
  } else {
    videoGrid.innerHTML = `<p style="text-align:center; margin-top: 50px;">No videos found matching your search.</p>`;
  }
}

function openModal(videoId) {
  // modal content ကို ရှင်းပစ်ပါ
  modalContent.innerHTML = '';
  // ဗီဒီယိုပြသဖို့အတွက် <video> tag အသစ်ဖန်တီးပါ
  const videoPlayer = document.createElement('video');
  videoPlayer.id = 'videoPlayer';
  videoPlayer.controls = true;
  videoPlayer.autoplay = true;
  videoPlayer.innerHTML = `<source src="https://drive.google.com/uc?export=download&id=${videoId}" type="video/mp4">
                           Your browser does not support the video tag.`;
  
  // close button ကို ပြန်ထည့်ပါ
  const closeButton = document.createElement('div');
  closeButton.className = 'close-btn';
  closeButton.onclick = closeModal;
  closeButton.innerHTML = '✖';

  modalContent.appendChild(closeButton);
  modalContent.appendChild(videoPlayer);
  videoModal.style.display = 'flex';
  history.pushState({ modalOpen: true }, '');
}

function closeModal() {
  const videoPlayer = document.getElementById('videoPlayer');
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.src = '';
  }
  videoModal.style.display = 'none';
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredVideos = videoData.filter(item => item.title.toLowerCase().includes(query));
  renderVideos(filteredVideos);
});

// Initial render of all videos on page load
renderVideos(videoData);


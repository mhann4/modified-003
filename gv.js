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

// Browser's back key action
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
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  frame.src = `https://drive.google.com/file/d/${videoId}/preview`;
  modal.style.display = 'flex';
  history.pushState({ modalOpen: true }, '');
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  frame.src = '';
  modal.style.display = 'none';
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredVideos = videoData.filter(item => item.title.toLowerCase().includes(query));
  renderVideos(filteredVideos);
});

// Initial render of all videos on page load
renderVideos(videoData);

const input = document.querySelectorAll("input");
const profilLogo = document.querySelectorAll(".profil-logo");
const modal = document.querySelector(".modal-container");

const toggleModal = () => {
  modal.classList.toggle("active");
};

input.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      input.value = "";
      input.blur();
    }
  });
});

profilLogo.forEach((logo) => {
  logo.addEventListener("click", toggleModal);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});


function copyToClipboard() {
  const textToCopy = "auralicy";
  navigator.clipboard.writeText(textToCopy);
  const messageElement = document.querySelector(".message .m");
  messageElement.textContent = "Copied!";
  setTimeout(() => {
    messageElement.textContent = "Add on Discord!";
  }, 2000); // Set the text back to the original after 2 seconds
}


new kursor({
  type: 1,
  color: '#ffffff',
  removeDefaultCursor: true, 
  
})


var typed3 = new Typed('.type', {
  strings: ['Im Emma :)', 'De lo mejor de mi entorno 🐱‍💻'],
  typeSpeed: 90,
  showCursor: false,
  backSpeed: 0,
  smartBackspace: true,
  loop: false
});


const audioButton = document.getElementById('audioButton');
const audioClip = document.getElementById('audioClip');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const slider = document.querySelector('.slider');

function toggleAudio() {
  if (audioClip.paused) {
    audioClip.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    slider.style.display = 'none';
  } else {
    audioClip.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    slider.style.display = 'none';
  }
}

audioClip.addEventListener('play', function() {
  slider.style.display = 'none'; 
});

audioClip.addEventListener('pause', function() {
  slider.style.display = 'block';
});
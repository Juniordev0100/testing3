const logoContainer = document.getElementById('logo-container');
const logo = document.getElementById('logo');

function checkConnection() {
  const online = navigator.onLine;

  if (online) {
    logo.src = 'logo-online.png'; // Ganti dengan path ke logo online
    setTimeout(() => {
      window.location.href = 'https://alamat-web-chatai'; // Ganti dengan alamat web Chatai
    }, 3000); // Redirect setelah 3 detik
  } else {
    logo.src = 'logo-offline.png'; // Ganti dengan path ke logo offline
  }
}

checkConnection();

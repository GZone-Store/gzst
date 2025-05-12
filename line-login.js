function lineLogin() {
  const clientId = '2007355204'; // LINE Channel ID
  const redirectUri = encodeURIComponent('https://gzonelineloginvip.glitch.me/callback'); // Backend URL
  const state = encodeURIComponent(location.href); // กลับมาหน้าเดิม
  const scope = encodeURIComponent('profile openid email');

  const lineAuthUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&prompt=consent`;

  window.location.href = lineAuthUrl;
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const email = urlParams.get('email');
  const picture = urlParams.get('picture');

  if (name && email) {
    document.getElementById("user-name").textContent = decodeURIComponent(name);
    document.getElementById("user-email").textContent = decodeURIComponent(email);
    if (picture) {
      document.getElementById("accountProfileImage").src = decodeURIComponent(picture);
    }
    document.getElementById("user-details").classList.remove("hidden");
    document.getElementById("login-prompt")?.classList.add("hidden");
  }
};

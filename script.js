function toggleDropdown() {
  document.getElementById("accountMenu").classList.toggle("show");
}

function toggleContact() {
  const contactOptions = document.getElementById("contactOptions");
  contactOptions.style.display = contactOptions.style.display === "none" ? "block" : "none";
}

function login() {
  alert("เข้าสู่ระบบสำเร็จ (จำลอง)");
  document.getElementById("logout").style.display = "block";
}

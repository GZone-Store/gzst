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

// ช่วยให้ dropdown ปิดเมื่อคลิกด้านนอก
window.onclick = function(event) {
  if (!event.target.matches('.dropdown img')) {
    const dropdown = document.getElementById("accountMenu");
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

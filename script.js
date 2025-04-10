document.getElementById('spin-button').addEventListener('click', function() {
  const wheel = document.getElementById('wheel');
  const spinAngle = Math.floor(Math.random() * 360 + 720); // สุ่มมุมหมุน
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${spinAngle}deg)`;

  // เพิ่มการแสดงผลโฆษณาหลังการหมุน
  setTimeout(() => {
    document.querySelector('.ads').style.display = 'block';  // แสดงโฆษณา
  }, 4000); // โฆษณาจะแสดงหลังจากหมุนเสร็จ
});

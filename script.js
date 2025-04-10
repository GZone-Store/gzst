document.getElementById('spin-button').addEventListener('click', function() {
  const optionsInput = document.getElementById('options').value;
  const optionsArray = optionsInput.split(',').map(option => option.trim());
  
  if (optionsArray.length === 0 || optionsArray[0] === '') {
    alert('กรุณากรอกตัวเลือกที่ต้องการสุ่ม');
    return;
  }

  const randomIndex = Math.floor(Math.random() * optionsArray.length);
  const result = optionsArray[randomIndex];

  // แสดงผลป็อปอัพ
  document.getElementById('result-text').textContent = `ยินดีด้วยคุณ ${result} คือผู้ชนะ`;

  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
});

// การปิดป็อปอัพและกลับไปที่หน้าหลัก
document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

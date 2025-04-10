navBtns.forEach(btn => btn.classList.remove('active'));
document.querySelector(`[data-page="${page}"]`).classList.add('active');

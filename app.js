import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuWomazKXngJRI5eGaLs3YPNJ0fQ1-_Hc",
  authDomain: "gzone-store.firebaseapp.com",
  projectId: "gzone-store",
  storageBucket: "gzone-store.firebasestorage.app",
  messagingSenderId: "20383169229",
  appId: "1:20383169229:web:e225735efbea6589120784",
  measurementId: "G-WZLDR9JQKS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

window.register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("รหัสผ่านไม่ตรงกัน");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("สมัครสมาชิกสำเร็จ"))
    .catch(error => alert("เกิดข้อผิดพลาด: " + error.message));
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("เข้าสู่ระบบสำเร็จ"))
    .catch(error => alert("เข้าสู่ระบบล้มเหลว: " + error.message));
};

window.logout = () => {
  signOut(auth).then(() => alert("ออกจากระบบแล้ว"));
};

window.loginWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(() => alert("เข้าสู่ระบบด้วย Google สำเร็จ"))
    .catch(error => alert("ผิดพลาด: " + error.message));
};

window.loginWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then(() => alert("เข้าสู่ระบบด้วย Facebook สำเร็จ"))
    .catch(error => alert("ผิดพลาด: " + error.message));
};

window.loginWithLine = () => {
  alert("Firebase ยังไม่รองรับ Line โดยตรง กรุณาใช้ Google หรือ Facebook แทนครับ");
};

function openModal() {
  document.getElementById("authModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

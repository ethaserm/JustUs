importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD_lb5_UyY2K2DQ3AOCopHcs1p4Kp_21vY",
  authDomain: "justus-d8e38.firebaseapp.com",
  databaseURL: "https://justus-d8e38-default-rtdb.firebaseio.com",
  projectId: "justus-d8e38",
  storageBucket: "justus-d8e38.firebasestorage.app",
  messagingSenderId: "422645809706",
  appId: "1:422645809706:web:d7c26471bd3f0b0e08b953"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'JustUs', {
    body: body || 'New message',
    icon: '/JustUs/icon.png',
    badge: '/JustUs/icon.png',
    tag: 'justus-msg',
    renotify: true,
    data: { url: 'https://ethaserm.github.io/JustUs/' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data?.url || 'https://ethaserm.github.io/JustUs/'));
});

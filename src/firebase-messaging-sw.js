importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
});

const messaging = firebase.messaging();

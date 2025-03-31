// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5fg4A-OYjtapDOKyOUd0iTnxrKX4t7Y",
  authDomain: "career-mentor-dbffc.firebaseapp.com",
  projectId: "career-mentor-dbffc",
  storageBucket: "career-mentor-dbffc.appspot.com",
  messagingSenderId: "632733746095",
  appId: "1:632733746095:web:df7f51f135cbdb552d255a",
  measurementId: "G-PPZRTYYGM6"
};

// ✅ Initialize Firebase (Check if it's already initialized)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// ✅ Define Global Variables
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// ✅ Make Firebase accessible globally
window.auth = auth;
window.db = db;
window.storage = storage;

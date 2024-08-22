  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzNlOCFFufqXXind_mtYduxHfg7zjMSjg",
    authDomain: "pizza-app-42380.firebaseapp.com",
    projectId: "pizza-app-42380",
    storageBucket: "pizza-app-42380.appspot.com",
    messagingSenderId: "645241564476",
    appId: "1:645241564476:web:e0016fc27412b24d9a8239",
    measurementId: "G-K73HB6VR1Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);
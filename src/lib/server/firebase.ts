// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDzWrXD81-b6aZR_izGcwa9gfizus7tJeU',
	authDomain: 'kit-boilerplate.firebaseapp.com',
	projectId: 'kit-boilerplate',
	storageBucket: 'kit-boilerplate.appspot.com',
	messagingSenderId: '38042958772',
	appId: '1:38042958772:web:c78b78caee4f78a405d0e1',
	measurementId: 'G-J1QVSF0KWG'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

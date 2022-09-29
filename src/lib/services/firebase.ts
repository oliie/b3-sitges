// Import the functions you need from the SDKs you need
import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { FirebaseConfig } from '$lib/config/firebase-config';
import { getFirestore } from 'firebase/firestore';

let app: FirebaseApp;

if (!getApps().length) {
	app = initializeApp(FirebaseConfig);
}

// Used to expose services
export const connect = () => {
	const db = getFirestore(app);

	return { db };
};

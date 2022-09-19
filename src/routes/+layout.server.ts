import type { Movie } from '$lib/types';
import type { LayoutServerLoad } from './$types';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDzWrXD81-b6aZR_izGcwa9gfizus7tJeU',
	authDomain: 'kit-boilerplate.firebaseapp.com',
	projectId: 'kit-boilerplate',
	storageBucket: 'kit-boilerplate.appspot.com',
	messagingSenderId: '38042958772',
	appId: '1:38042958772:web:c78b78caee4f78a405d0e1',
	measurementId: 'G-J1QVSF0KWG'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const load: LayoutServerLoad = async () => {
	const querySnapshot = await getDocs(collection(db, 'movies'));
	const movies: Movie[] = [];

	querySnapshot.forEach((doc) => {
		const { title, director, year } = doc.data();
		movies.push({ _id: doc.id, title, director, year });
	});

	return { movies };
};

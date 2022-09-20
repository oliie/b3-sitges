import type { Actions } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const actions: Actions = {
	'add-movie': async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const director = data.get('director');
		const year = data.get('year')!;

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
		const docRef = await addDoc(collection(db, 'movies'), {
			title,
			director,
			year: +year
		});

		console.log(docRef.id);
	}
};

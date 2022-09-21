import { addDoc, collection, getDocs } from 'firebase/firestore';
import { connect } from '$lib/services/firebase';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Movie } from '$lib/types';

export const actions: Actions = {
	'add-movie': async ({ request }) => {
		const { db } = connect();
		const data = await request.formData();
		const title = data.get('title');
		const director = data.get('director');
		const year = data.get('year')!;

		const docRef = await addDoc(collection(db, 'movies'), {
			title,
			director,
			year: +year
		});

		console.log(docRef.id);
	}
};

export const load: PageServerLoad = async () => {
	const { db } = connect();

	const querySnapshot = await getDocs(collection(db, 'movies'));
	const movies: Movie[] = [];

	querySnapshot.forEach((doc) => {
		const { title, director, year } = doc.data();
		movies.push({ _id: doc.id, title, director, year });
	});

	return { movies };
};

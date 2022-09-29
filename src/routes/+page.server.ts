import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { connect } from '$lib/services/firebase';
import { invalid } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { Movie } from '$lib/types';

const { db } = connect();

export const actions: Actions = {
	'add-movie': async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const director = data.get('director');
		const year = data.get('year')!;

		if (!(year as string).length || isNaN(+year)) {
			return invalid(400, { year, incorrect: true });
		}

		await addDoc(collection(db, 'movies'), { title, director, year: +year });

		return { success: true };
	},

	'delete-movie': async ({ url }) => {
		const id = url.searchParams.get('_id');

		await deleteDoc(doc(db, 'movies', id!));
	},

	'update-movie': async ({ request }) => {
		const data = await request.formData();
		const _id = data.get('_id');
		const title = data.get('title');
		const director = data.get('director');
		const year = data.get('year')!;

		if (!(year as string).length || isNaN(+year)) {
			return invalid(400, { year, incorrect: true });
		}

		const docRef = doc(db, 'movies', _id as string);

		await updateDoc(docRef, { title, director, year });

		return { success: true };
	}
};

export const load: PageServerLoad = async () => {
	const querySnapshot = await getDocs(collection(db, 'movies'));
	const movies: Movie[] = [];

	querySnapshot.forEach((doc) => {
		const { title, director, year } = doc.data();
		movies.push({ _id: doc.id, title, director, year });
	});

	return { movies };
};

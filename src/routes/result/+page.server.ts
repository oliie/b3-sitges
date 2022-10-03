import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { connect } from '$lib/services/firebase';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Answers } from '$lib/types';

export const actions: Actions = {
	'add-participant': async ({ request }) => {
		const { db } = connect();
		const data = await request.formData();
		const participants = data.get('participants');
		const ideas = data.get('ideas');
		const optional = data.get('optional');

		const docRef = await addDoc(collection(db, 'b3-sitges'), {
			ideas,
			participants, 
			optional
		});

		console.log(docRef.id);
	},
	'delete-participant': async ({ url }) => {
		const id = url.searchParams.get('_id');
		const { db } = connect();

		await deleteDoc(doc(db, 'b3-sitges', id!));
	}
};
/* export const actions: Actions = {
	'add-movie': async ({ request }) => {
		const { db } = connect();
		const data = await request.formData();
		const title = data.get('title');
		const director = data.get('director');
		const year = data.get('year')!; // VAD GÖR UTROPSTECKNET?

		const docRef = await addDoc(collection(db, 'movies'), {
			title,
			director,
			year: +year
		});

		console.log(docRef.id);
	},
	'delete-movie': async ({ url }) => {
		const id = url.searchParams.get('_id');
		const { db } = connect();

		await deleteDoc(doc(db, 'movies', id!));
	}
}; */

export const load: PageServerLoad = async () => {
	const { db } = connect();

	const querySnapshot = await getDocs(collection(db, 'sitges'));
	const answers: Answers[] = [];

	querySnapshot.forEach((doc) => {
		const { participants, ideas, optional } = doc.data();
		answers.push({ _id: doc.id, participants, ideas, optional });
	});

	return { answers };
};

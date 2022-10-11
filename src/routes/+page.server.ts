import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { connect } from '$lib/services/firebase';
import type { Actions } from '@sveltejs/kit';


export const actions: Actions = {
	'add-ideas': async ({ request }) => {
		const { db } = connect();
		const data = await request.formData();
		const dataString = data.get('allData');
		const parsedData= JSON.parse(dataString!.toString());
		
		if (!parsedData.optional) {
			parsedData.optional = 'Ingenting är bra idag'
		}

		await addDoc(collection(db, 'b3-sitges'), { ...parsedData });
	}
};

/* export const actions: Actions = {
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
	},
	'delete-movie': async ({ url }) => {
		const id = url.searchParams.get('_id');
		const { db } = connect();

		await deleteDoc(doc(db, 'movies', id!));
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
}; */

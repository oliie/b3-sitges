import { collection, getDocs } from 'firebase/firestore';
import { connect } from '$lib/services/firebase';
import type { Movie } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const { db } = connect();

	const querySnapshot = await getDocs(collection(db, 'movies'));
	const movies: Movie[] = [];

	querySnapshot.forEach((doc) => {
		const { title, director, year } = doc.data();
		movies.push({ _id: doc.id, title, director, year });
	});

	return { movies };
};

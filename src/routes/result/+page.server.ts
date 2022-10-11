import { collection, getDocs } from 'firebase/firestore';
import { connect } from '$lib/services/firebase';
import type { PageServerLoad } from './$types';
import type { Answer } from '$lib/types';

export const load: PageServerLoad = async () => {
	const { db } = connect();

	const querySnapshot = await getDocs(collection(db, 'b3-sitges'));
	const answers: Answer[] = [];

	querySnapshot.forEach((doc) => {
		const { participants, ideas, optional } = doc.data();
		answers.push({ _id: doc.id, participants, ideas, optional });
	});

	return { answers };
};

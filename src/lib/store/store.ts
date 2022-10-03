import { persistStore } from './persistStore';

const defaultData = {
	participants: [],
	ideas: [
		{
			idea: '',
			placeholder: 'Vi tänker att...',
			contact: ''
		},
		{
			idea: '',
			placeholder: 'Det vore najs...',
			contact: ''
		},
		{
			idea: '',
			placeholder: 'Det vore kul att...',
			contact: ''
		},
		{
			idea: '',
			placeholder: 'Vi borde...',
			contact: ''
		},
		{
			idea: '',
			placeholder: 'Vi tycker absolut att...',
			contact: ''
		}
	],
	optional: ''
}

export const store = persistStore('data', defaultData)
/* const stored = browser ? window.localStorage.getItem('groupStore') ?? groupStore : groupStore;
/* const test = browser ? window.localStorage.getItem('groupStorage') : null



if (typeof window !== 'undefined') {
	console.log('You are on the browser');
	// 👉️ can use localStorage here
} else {
	console.log('You are on the server');
	// 👉️ can't use localStorage
}

/* groupStore.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('groupStore', JSON.stringify(value));
	}
}); */

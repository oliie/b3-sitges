import { persistStore } from './persistStore';

const defaultData = {
	participants: [],
	ideas: [
		{
			idea: '',
			contact: ''
		},
		{
			idea: '',
			contact: ''
		},
		{
			idea: '',
			contact: ''
		},
		{
			idea: '',
			contact: ''
		},
		{
			idea: '',
			contact: ''
		}
	],
	optional: ''
}

export const store = persistStore('storData', defaultData)
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

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const persistStore = (key: string, initial: any) => {
    const persist = browser ? window.localStorage.getItem(key) : null
    const data = persist ? JSON.parse(persist) : initial

// @ts-ignore
    const store = writable(data, () => {
        // @ts-ignore
        const unsubscribe = store.subscribe(value => {
            browser ? window.localStorage.setItem(key, JSON.stringify(value)) : null
        })
        return unsubscribe
    })
    return store
}
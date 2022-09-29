import type { Movie } from '$lib/types';
import { writable } from 'svelte/store';

export const currentMovie = writable<Movie | null>(null);

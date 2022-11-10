import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import Heading from '$lib/components/Heading.svelte';
import MovieForm from '$lib/components/MovieForm.svelte';

describe('testing', () => {
	beforeEach(() => {
		cleanup();
	});

	it('should render heading', () => {
		render(Heading);

		console.log('hej');
		expect(Heading).toBeDefined();
	});

	it('should have a movie title', async () => {
		render(MovieForm);

		const postMovie = screen.getByText('Add movie');

		await fireEvent.click(postMovie);

		const errorText = await screen.getByText('Year is wrong format');

		expect(errorText).toBeDefined();
	});
});

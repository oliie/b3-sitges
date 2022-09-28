<script lang="ts">
	import { enhance } from '$app/forms';
	import Heading from '$lib/components/Heading.svelte';
	import MovieList from '$lib/components/MovieList.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-col items-center gap-8">
	<Heading>SvelteKit 🚀 Tailwind</Heading>

	<a class="btn btn-secondary btn-outline" href="https://kit.svelte.dev">SvelteKit Docs &raquo;</a>
</div>

<div class="divider" />

<form method="post" action="?/add-movie" use:enhance>
	<div class="w-1/3 mx-auto flex flex-col gap-2">
		<div class="text-center text-3xl text-secondary">Add a movie</div>
		<input type="text" name="title" placeholder="Title" class="input input-bordered w-full" />
		<input type="text" name="director" placeholder="Director" class="input input-bordered w-full" />
		<input type="text" name="year" placeholder="Year" class="input input-bordered w-full" />
		<button class="btn btn-secondary">Add movie</button>
	</div>
</form>

<div class="divider" />

<MovieList movies={data.movies} />

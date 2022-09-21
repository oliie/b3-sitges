<script lang="ts">
	import { enhance } from '$app/forms';
	import Heading from '$lib/components/Heading.svelte';
	import MovieList from '$lib/components/MovieList.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: console.log(data);
</script>

<Heading>I'm a heading from $lib!</Heading>

<h2 class="text-red-600">Welcome to SvelteKit</h2>

<p>
	Visit <a class="text-secondary" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<form method="post" action="?/add-movie" use:enhance>
	<div class="w-1/3 mx-auto flex flex-col gap-2">
		<input type="text" name="title" placeholder="Title" class="input input-bordered w-full" />
		<input type="text" name="director" placeholder="Director" class="input input-bordered w-full" />
		<input type="text" name="year" placeholder="Year" class="input input-bordered w-full" />
		<button class="btn btn-secondary">Add movie</button>
	</div>
</form>

<div class="divider" />

<MovieList movies={data.movies} />

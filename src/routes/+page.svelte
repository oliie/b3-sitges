<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import MovieForm from '$lib/components/MovieForm.svelte';
	import MovieList from '$lib/components/MovieList.svelte';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;

	export let form: ActionData;
</script>

<svelte:head>
	<title>SvelteKit 🚀 Tailwind</title>
</svelte:head>

<div class="flex flex-col items-center gap-8">
	<Heading>SvelteKit 🚀 Tailwind</Heading>

	<a target="_blank" class="btn btn-primary btn-outline" href="https://kit.svelte.dev">
		SvelteKit Docs &raquo;
	</a>
</div>

<div class="divider" />

<MovieForm formResponse={form} />

<div class="divider" />

<MovieList movies={data.movies} />

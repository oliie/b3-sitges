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

<div class="text-center">
	<Heading>SvelteKit 🚀 Tailwind</Heading>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
	<a
		target="_blank"
		class="btn btn-xs md:btn-sm btn-primary btn-outline"
		href="https://kit.svelte.dev/docs/introduction"
	>
		SvelteKit Docs &raquo;
	</a>
	<a
		target="_blank"
		class="btn btn-xs md:btn-sm btn-primary btn-outline"
		href="https://firebase.google.com/docs/build"
	>
		Firebase Docs &raquo;
	</a>
	<a
		target="_blank"
		class="btn btn-xs md:btn-sm btn-primary btn-outline"
		href="https://tailwindcss.com/docs/installation"
	>
		Tailwind Docs &raquo;
	</a>
	<a
		target="_blank"
		class="btn btn-xs md:btn-sm btn-primary btn-outline"
		href="https://daisyui.com/components/"
	>
		DaisyUI Docs &raquo;
	</a>
</div>

<div class="divider" />

<MovieForm formResponse={form} />

<div class="divider" />

<MovieList movies={data.movies} />

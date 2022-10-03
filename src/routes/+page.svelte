<script lang="ts">
	import { enhance } from '$app/forms';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import FormParticipants from '$lib/components/Forms/FormParticipants.svelte';
	import FormQuestions from '$lib/components/Forms/FormQuestions.svelte';
	import FormOptional from '$lib/components/Forms/FormOptional.svelte';
	/* import MovieList from '$lib/components/MovieList.svelte'; */
	/* import type { PageServerData } from './$types'; */

	export let data: PageServerData;
</script>

<div>
	<Hero />
</div>
<div class="flex justify-center mt-20 bg-white">
	<FormParticipants />
</div>
<div class="flex justify-center">
	<FormQuestions />
</div>
<div class="flex justify-center bg-white">
	<FormOptional />
</div>

<!-- <form method="post" action="?/add-movie" use:enhance>
	<div class="w-1/3 mx-auto flex flex-col gap-2">
		<div class="text-center text-3xl text-secondary">Add a movie</div>
		<input type="text" name="title" placeholder="Title" class="input input-bordered w-full" />
		<input type="text" name="director" placeholder="Director" class="input input-bordered w-full" />
		<input type="text" name="year" placeholder="Year" class="input input-bordered w-full" />
		<button class="btn btn-secondary">Add movie</button>
	</div>
</form> -->


<!-- <MovieList movies={data.movies} /> -->

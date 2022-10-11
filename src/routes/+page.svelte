<script lang="ts">
	import { enhance } from '$app/forms';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import FormParticipants from '$lib/components/Forms/FormParticipants.svelte';
	import FormQuestions from '$lib/components/Forms/FormQuestions.svelte';
	import FormOptional from '$lib/components/Forms/FormOptional.svelte';
	import { store } from '$lib/store/store';
	import type { Answer, Idea } from '$lib/types';
	/* import MovieList from '$lib/components/MovieList.svelte'; */
	/* import type { PageServerData } from './$types'; */

	/* export let data: PageServerData; */
	let errors: number = 0;
	/* let missingParticipants = 'Du saknar deltagare' */
	console.log($store.optional);
	const handleSubmit = () => {
		if (!$store.participants.length) {
			errors++;
			alert(`saknar deltagare: ', ${errors}`);
		}

		/* $store.ideas.forEach((item: Answer) => {
			if (!item.ideas.length) {
				errors++;
				alert(`saknar ide: ', ${errors}`);
			}
		}); */
		/* $store.optional.forEach((item: Answer) => {
			console.log(item.optional);
			if (!item.optional) {
				errors++;
				alert(`saknar optional: ', ${errors}`);
			}
		});
		$store.ideas.forEach((item: Idea) => {
			if (!item.idea || !item.contact) {
				errors++;
				alert(`saknar idea || contact: ', ${errors}`);
			}
		}); */
		/* if (!errors) {
			alert('POST to FB'); */
			/* postToFirebase(); */ // Hur gör man med denna för att posta i FB???
		/* } else {
			alert('ERROR'); */
			/* errorMessage = 'Du har inte fyllt i alla fält'; */
		/* } */
		
	};

	$: storeData = JSON.stringify($store);
</script>

<div>
	<Hero />
</div>
<div class="flex justify-center mt-20 bg-white">
	<FormParticipants {errors} />
</div>
<form on:submit={handleSubmit} method="post" action="?/add-ideas" use:enhance>
	<div class="flex justify-center">
		<FormQuestions />
	</div>
	<div class="flex justify-center bg-white">
		<FormOptional />
	</div>
	<div class="flex justify-center bg-white pb-20">
		<input type="hidden" name="allData" bind:value={storeData} required />
		<button
		data-mdb-ripple="true"
				data-mdb-ripple-color="light"
			type="submit"
			class="flex text-white border-none px-4 py-2 rounded-full bg-accent-secondary-coderight hover:bg-accent-secondary-coderight-darker font-semibold"
			>Vi är klara, skicka in svaret!</button
		>
	</div>
</form>

<!-- <h1>{storeData}</h1> -->

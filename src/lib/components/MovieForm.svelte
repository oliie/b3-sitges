<script lang="ts">
	import { enhance } from '$app/forms';
	import { currentMovie } from '$lib/stores/current-movie';
	import type { ActionData } from './$types';

	export let formResponse: ActionData;

	let posting = false;

	$: title = $currentMovie?.title || '';
	$: director = $currentMovie?.director || '';
	$: year = $currentMovie?.year || '';
	$: _id = $currentMovie?._id || '';

	$: if ($currentMovie) {
		title = $currentMovie.title;
		director = $currentMovie.director;
		year = $currentMovie.year + '';
		_id = $currentMovie._id!;
	}

	$: if (formResponse?.success) {
		title = '';
		director = '';
		year = '';
		_id = '';
		posting = false;
		currentMovie.set(null);
	}

	$: if (formResponse?.incorrect) {
		posting = false;
	}

	const handleCancel = () => currentMovie.set(null);
	const handleSubmit = () => (posting = true);
</script>

<form
	method="post"
	action={$currentMovie ? '?/update-movie' : '?/add-movie'}
	on:submit={handleSubmit}
	use:enhance
>
	<div class="w-1/3 mx-auto flex flex-col gap-2">
		<h2 class="text-center text-3xl text-secondary">
			{$currentMovie ? 'Edit movie' : 'Add movie'}
		</h2>

		{#if $currentMovie}
			<input type="hidden" bind:value={_id} name="_id" />
		{/if}

		<input
			type="text"
			value={title}
			name="title"
			placeholder="Title"
			class="input input-bordered w-full"
		/>

		<input
			type="text"
			value={director}
			name="director"
			placeholder="Director"
			class="input input-bordered w-full"
		/>

		<input
			type="text"
			value={year}
			name="year"
			placeholder="Year"
			class="input input-bordered w-full"
		/>

		{#if formResponse?.incorrect}
			<p class="text-red-500">Year is wrong format</p>
		{/if}

		<div class="grid {$currentMovie ? 'grid-cols-2' : 'grid-cols-1'} gap-2">
			{#if $currentMovie}
				<button type="button" on:click={handleCancel} class="btn btn-secondary btn-outline">
					Cancel
				</button>
			{/if}

			<button type="submit" class="btn btn-secondary" disabled={posting}>
				{#if posting}
					Loading...
				{:else}
					{$currentMovie ? 'Update' : 'Add'} movie
				{/if}
			</button>
		</div>
	</div>
</form>

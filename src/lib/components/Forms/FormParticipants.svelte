<script lang="ts">
	import { store } from '$lib/store/store';
	import deleteIcon from './delete.svg';
	import { enhance } from '$app/forms';
	
	export let errors: number = 0;
	let name = '';
	const handleSubmit = () => {
		store.update((current: any) => {
			current.participants = [...current.participants, name];
			return current;
		});
		
		name = '';
		errors = 0;
	};

	const handleRemove = (index: number) => {
		store.update((current: any) => {
			current.participants.splice(index, 1);
			return current;
		});
	};
</script>

<section class="flex my-20 px-8 md:px-0">
	<div class="flex container max-w-6xl">
		<form method="post" action="?/add-participant" class="flex-col md:w-2/3" on:submit|preventDefault={handleSubmit} use:enhance>
			<div class="flex-col space-y-3">
				<h1 class="flex text-black-coderight mb-4 text-2xl md:text-4xl">Deltagare</h1>
				<label for="name" class="text-black-coderight">Vilka är i din grupp?</label>
				<input
					type="text"
					name="participants"
					bind:value={name}
					placeholder="Förnamn + Efternamn"
					class="bg-secondary-coderight text-black-coderight rounded p-3 w-3/4 placeholder-accent-secondary-coderight"
					required
				/>
				<button
					class="flex text-white border-none px-4 py-2 rounded-full bg-accent-secondary-coderight hover:bg-accent-secondary-coderight-darker font-semibold"
					>Lägg till deltagare</button
				>
			</div>
		</form>
		<div class="flex-col md:w-1/3 text-black-coderight">
			{#if errors}
			<p>Missing participants</p>
				
			{/if}
			{#each $store.participants as participant, i}
				<div class="flex">
					<button class="pr-2" on:click={() => handleRemove(i)}>
						<img src={deleteIcon} alt="" width="20" />
					</button>
					<p>{participant}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

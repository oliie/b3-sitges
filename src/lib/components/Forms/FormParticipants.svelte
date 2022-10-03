<script lang="ts">
	import { store } from '$lib/store/store';
	import deleteIcon from './delete.svg';
	import { enhance } from '$app/forms';
	export let data: PageServerData;

	console.log('data!', data);

	let name = '';
	const handleSubmit = () => {
		store.update((current: any) => {
			current.participants = [...current.participants, name];
			return current;
		});
		name = '';
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
		<form method="post" action="?/add-participant" class="flex-col md:w-2/3" on:submit|preventDefault={handleSubmit}>
			<div class="flex-col space-y-3">
				<h2 class="flex text-black-coderight mb-4">Deltagare</h2>
				<label for="name" class="text-black-coderight">Vilka är i din grupp?</label>
				<input
					type="text"
					name="participants"
					bind:value={name}
					placeholder="Namn"
					class="bg-secondary-coderight text-black-coderight rounded p-3 w-3/4 placeholder-accent-secondary-coderight"
				/>
				<!--  <input type="text" name="director" placeholder="Director" class="input input-bordered w-full" />
                    <input type="text" name="year" placeholder="Year" class="input input-bordered w-full" /> -->
				<button
					class="flex text-white border-none px-4 py-2 rounded-full bg-accent-secondary-coderight font-semibold"
					>Lägg till deltagare</button
				>
			</div>
		</form>
		<div class="flex-col md:w-1/3 text-black-coderight">
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

<script lang="ts">
	import { store } from '$lib/store/store';

	let participants = {};
	let id = 0;
	const addIdea = () => {
		$store.ideas = [
			...$store.ideas,
			{
				idea: '',
				contact: ''
			}
		];
	};
	const removeIdea = (index: number) => {
		store.update((current: any) => {
			current.ideas.splice(index, 1);
			return current;
		});
	};
</script>

<section class="flex-col container max-w-4xl my-20 px-8 md:px-0">
	<div class="flex-col">
		<h1 class="flex text-black-coderight mb-4 text-2xl md:text-4xl">Hur kan B3 CodeRight bli ännu bättre</h1>
		<p class="flex text-black-coderight mb-4">
			Diskutera i gruppen hur CodeRight skulle kunna bli ett ännu bättre bolag. Vilka initiativ och
			sammanhang saknar vi idag? Skulle något kunna göras annorlunda för att bli bättre? Varje
			förslag måste ha en kontaktperson för att möjliggöra vidare bearbetning av detta i vårt
			framtida bolagsbygge.
		</p>
		<ul class="list-disc pl-12 mb-12">
			<li>Skriv era förslag i textrutorna nedan</li>
			<li>Minst 5 förslag och max 10</li>
			<li>Sista sektionen (vad som är bra idag) är inte obligatorisk, men väldigt uppskattad.</li>
		</ul>
		<div class="flex-col space-y-12">
			{#each $store.ideas as { idea, contact }, i}
				<div>
					<label for="suggestionOne"
						><span class="text-black-coderight uppercase text-sm">{`Förslag ${i + 1}`}</span></label
					>
					<textarea
						class="bg-white text-black-coderight rounded p-3 w-full placeholder-accent-secondary-coderight"
						type="submit"
						bind:value={idea}
						rows="6"
						placeholder="Skriv en bra idé"
						required
					/>

					<div class="flex justify-between">
						<select bind:value={contact} id="responsible" class="flex p-2 rounded" required>
							<option class="" value selected disabled> Välj kontaktperson </option>
							{#each $store.participants as person}
								<option value={person}>{person}</option>
							{/each}
						</select>
						{#if i >= 5}
							<button
								class="flex text-white border-none px-4 py-2 rounded-full bg-accent-primary-coderight hover:bg-accent-primary-coderight-darker font-semibold"
								type="button"
								on:click={() => removeIdea(i)}>Ta bort</button
							>
						{/if}
					</div>
				</div>
			{/each}
			<button
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
				class="flex text-white border-none px-4 py-2 rounded-full bg-primary-coderight hover:bg-primary-coderight-darker font-semibold transition duration-150 ease-in-out"
				type="button"
				on:click={addIdea}
			>
				+ Lägg till ytterligare förslag</button
			>
		</div>
	</div>
</section>

<script lang="ts">
	import { store } from '$lib/store/store';
	import { enhance } from '$app/forms';

	let idea: string = '';
	let responsible: any;

	const handleSubmit = () => {
		store.update((current: any) => {
			current.ideas.idea = [...current.ideas.idea, idea];
			current.ideas.contact = [...current.ideas.contact, responsible];
			return current;
		});
	};
</script>

<section class="flex-col container max-w-4xl my-20 px-8 md:px-0">
	<form class="flex" on:submit|preventDefault={handleSubmit} use:enhance>
		<div class="flex-col">
			<h2 class="flex text-black-coderight mb-4">Hur kan B3 CodeRight bli ännu bättre</h2>
			<p class="flex text-black-coderight mb-4">
				Här nedan ska ni i gruppen skriva hur CodeRight kan bli bättre. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Quisque feugiat orci libero, et feugiat enim congue. OBS era
				svar sparas i localStorage och kan ändras och uppdateras. Känner ni er klara så skickas det
				till databasen.
			</p>
			<ul class="list-disc pl-12 mb-12">
				<li>Skriv era förslag i textrutona nedan</li>
				<li>Minst 5 förslag, max 10</li>
				<li>Sista rutan är inte obligatorisk, men uppskattad.</li>
			</ul>
			<div class="flex-col space-y-12">
				{#each $store.ideas as { idea, placeholder, contact }, i}
					<div>
						<label for="suggestionOne"
							><span class="text-black-coderight uppercase text-sm">{`Förslag ${i + 1}`}</span
							></label
						>
						<textarea
							type="text"
							bind:value={idea}
							rows="6"
							{placeholder}
							class="bg-white text-black-coderight rounded p-3 w-full placeholder-accent-secondary-coderight"
						/>
						<label class="flex" for="responsible" />
						<div class="flex justify-between">
							<select
								
								id="responsible"
								class="flex p-2 rounded"
								name="responsible"
								required
							>
								<option class="text-acc" value="Välj ansvarig" selected disabled
									>Välj kontaktperson</option
								>
								{#each $store.participants as person}
									<option id="responsible" value={person}>{person}</option>
								{/each}
							</select>
							<button
								class="flex text-white border-none px-4 py-2 rounded-full bg-primary-coderight font-semibold"
								>Spara svar</button
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</form>
	<div class="flex mt-20 justify-center">
		<button
			class="flex text-white border-none px-4 py-2 rounded-full bg-accent-secondary-coderight font-semibold"
			>Vi är klara, skicka till databasen!</button
		>
	</div>
</section>

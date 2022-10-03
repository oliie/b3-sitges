<script lang="ts">
	import { store } from '$lib/store/store';
	import { enhance } from '$app/forms';

	let optinal: string = '';

	const handleSubmit = () => {
		store.update((current: any) => {
			current.optinal = [...current.optinal, optinal];
			return current;
		});
	};
</script>

<section class="flex-col container max-w-4xl my-20 px-8 md:px-0">
	<form class="flex" on:submit|preventDefault={handleSubmit} use:enhance>
		<div class="flex-col">
			<h2 class="flex text-black-coderight mb-4">Vad ska vi fortsätta med?</h2>
			<p class="flex text-black-coderight mb-4">
				Denna ruta är valfri men vi skulle uppskatta om ni ville skriva vad ni tycker är bra med B3
				CodeRight i dagsläget.
			</p>
			<ul class="list-disc pl-12 mb-12">
				<li>Skriv vad ni uppskattar i rutan nedan</li>
			</ul>
			<div class="flex-col space-y-12">
				<div>
					<label for="suggestionOne"
						><span class="text-black-coderight uppercase text-sm">Valfritt</span></label
					>
					<textarea
						type="text"
						bind:value={optinal}
						rows="6"
						placeholder="Vad gör vi bra idag?"
						class="bg-white text-black-coderight border rounded p-3 w-full placeholder-accent-secondary-coderight"
					/>
					<label class="flex" for="responsible" />
					<div class="flex justify-between">
						<button
							class="flex text-white border-none px-4 py-2 rounded-full bg-primary-coderight font-semibold"
							>Spara svar</button
						>
					</div>
				</div>
			</div>
		</div>
	</form>
	<div class="flex mt-20 justify-center">
		<button
			class="flex text-white border-none px-4 py-2 rounded-full bg-accent-secondary-coderight font-semibold"
			>Skicka svaret!</button
		>
	</div>
</section>

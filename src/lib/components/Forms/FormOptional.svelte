<script lang="ts">
	import { store } from '$lib/store/store';
	import { enhance } from '$app/forms';

	const handleSubmit = () => {};
</script>

<section class="flex-col container max-w-4xl my-20 px-8 md:px-0">
	<form class="flex" on:submit|preventDefault={handleSubmit} use:enhance>
		<div class="flex-col">
			<h1 class="flex text-black-coderight mb-4 text-2xl md:text-4xl">Vad ska vi fortsätta med?</h1>
			<p class="flex text-black-coderight mb-4">
				Denna ruta är valfri men vi skulle uppskatta om ni ville skriva vad ni tycker är bra med B3
				CodeRight i dagsläget. Vad är det viktigt att vi fortsätter med?
			</p>
			<div class="flex-col space-y-12">
				<div>
					<label for="suggestionOne"
						><span class="text-black-coderight uppercase text-sm">Valfritt</span></label
					>
					<textarea
						type="text"
						bind:value={$store.optional}
						rows="6"
						placeholder="Vad gör vi bra idag?"
						class="bg-white text-black-coderight border rounded p-3 w-full placeholder-accent-secondary-coderight"
					/>
					<label class="flex" for="responsible" />
				</div>
			</div>
		</div>
	</form>
</section>

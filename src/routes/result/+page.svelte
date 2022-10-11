<script lang="ts">
	import { enhance } from '$app/forms';
	import HeroResult from '$lib/components/Hero/HeroResult.svelte';
	import type { PageServerData } from './$types';
	import groupIllustration from './result_sitges_group.svg';

	export let data: PageServerData;
</script>

<div>
	<HeroResult />
</div>
<section class="flex justify-center bg-white">
	<div class="flex-col divide-y divide-primary-coderight">

	{#each data.answers as { participants, ideas, optional }, i}
		<div class="flex-col max-w-6xl my-12">
			<div class="flex-col mx-12 md:mx-0 md:flex md:flex-row">
				<div class="flex md:flex-col w-full md:w-1/5 mb-2 md:mt-4 md:mb-0">
					<div class="flex-col">
						<h3 class="mb-2 font-bold">{`Grupp ${i + 1}`}</h3>
						{#each participants as person}
							<p class="text-sm">{person}</p>
						{/each}
					</div>
					<div class="flex invisible sm:visible my-4 ml-12 md:ml-0 md:my-12">
						<img src={groupIllustration} alt="Illustration" width="200" />
					</div>
				</div>
				<div class="flex-col w-full md:flex md:w-4/5 space-y-4 divide-y divide-secondary-coderight">
					{#each ideas as { idea, contact }, j}
						<div>
							<h3 class="mt-4">{`Förslag ${j + 1}`}</h3>
							<p class="italic text-primary-coderight">{`Kontaktperson: ${contact}`}</p>
							<p class="mt-4 w-full">{idea}</p>
						</div>
					{/each}
					<div class="flex-col pt-12">
						<h3 class="md:text-2xl">Vad som är uppskattat med att jobba på B3 CodeRight idag (valfritt)</h3>
						<pre class="whitespace-pre-line font-body">{optional}</pre>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

</section>


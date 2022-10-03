<script lang="ts">
	import { enhance } from '$app/forms';
	import HeroResult from '$lib/components/Hero/HeroResult.svelte';
	import type { PageServerData } from './$types';
	import groupIllustration from './result_sitges_group.svg';

	export let data: PageServerData;
	console.log(data);
</script>

<div>
	<HeroResult />
</div>
	<section class="flex justify-center bg-white">
		<div class="flex max-w-4xl">
			<div class="flex w-2/3 my-20">
				<img src={groupIllustration} alt="Illustration" width="400" />
			</div>
			<div class="flex-col w-1/3 mt-20 pl-12">
				<h1 class="mb-4">Grupp 1</h1>
				<h3>Oliver Praesto</h3>
				<h3>Mikaela Johansson</h3>
				<h3>Mattias Pettersson</h3>
				<h3>Pierre Elmén</h3>
				<h3>Oliver Praesto</h3>
				<h3>Mikaela Johansson</h3>
				<h3>Mattias Pettersson</h3>
				<h3>Pierre Elmén</h3>
			</div>
		</div>
	</section>
	<!-- <div class="flex container"> -->
	<section class="flex justify-center my-20">
		<div class="flex container max-w-4xl">
			<h1 class="">Svar</h1>
		</div>
	</section>
	<!-- </div> -->

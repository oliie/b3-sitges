<script>
	import { enhance } from '$app/forms';
	import Heading from '$lib/Heading.svelte';
</script>

<Heading>I'm a heading from $lib!</Heading>
<h2 class="text-red-600">Welcome to SvelteKit</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h4 class="text-green-600">hej</h4>

<form class="flex flex-row" method="post" action="?/add-movie" use:enhance>
	<input
		type="text"
		name="title"
		placeholder="Title"
		class="input input-bordered w-full max-w-xs"
	/>
	<input
		type="text"
		name="director"
		placeholder="Director"
		class="input input-bordered w-full max-w-xs"
	/>
	<input type="text" name="year" placeholder="Year" class="input input-bordered w-full max-w-xs" />
	<button class="btn btn-secondary">Add movie</button>
</form>

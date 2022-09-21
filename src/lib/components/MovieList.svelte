<script lang="ts">
	import type { Movie } from '$lib/types';

	export let movies: Movie[] = [];
</script>

<ul>
	{#each movies as { title }}
		<li>{title}</li>
	{/each}
</ul>

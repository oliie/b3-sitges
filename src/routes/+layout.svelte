<script lang="ts">
	import type { Movie } from '$lib/types';
	export let data: { success: boolean; data: Movie[] } = <any>{};
	console.log(data);
</script>

<nav>
	<ul>
		{#each data.data as { title }}
			<li>{title}</li>
		{/each}
	</ul>
</nav>

<slot />

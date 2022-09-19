<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<nav>
	<ul>
		{#each data.movies as { title }}
			<li>{title}</li>
		{/each}
	</ul>
</nav>

<slot />

<script lang="ts">
	import type { Movie } from '$lib/types';

	export let movies: Movie[] = [];
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Director</th>
				<th>Released</th>
			</tr>
		</thead>
		<tbody>
			{#each movies as { title, director, year, _id }}
				<tr>
					<td>{_id}</td>
					<td>{title}</td>
					<td>{director}</td>
					<td>{year}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { currentMovie } from '$lib/stores/current-movie';
	import type { Movie } from '$lib/types';

	export let movies: Movie[] = [];

	const handleEdit = (movie: Movie) => {
		currentMovie.set(movie);
	};
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>&nbsp;</th>
				<th>Title</th>
				<th>Director</th>
				<th>Released</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each movies as { title, director, year, _id }}
				<tr>
					<td class="w-1">
						<button
							on:click={() => handleEdit({ title, director, year, _id })}
							class="btn btn-ghost btn-sm btn-primary">🖋️</button
						>
					</td>
					<td>{title}</td>
					<td>{director}</td>
					<td>{year}</td>
					<td class="text-right">
						<form method="post" action="?/delete-movie&_id={_id}" use:enhance>
							<button class="btn btn-sm btn-outline btn-primary">Remove</button>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<script lang="ts">
	import type { PageData } from './$types';
	import PartyCard from './PartyCard.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="p-8 flex flex-col gap-4">
	<h1 class="text-2xl">รายชื่อพรรคทั้งหมด</h1>

	{#each data.parties as party}
		<PartyCard {...party} href={party.id} />
	{/each}
</div>

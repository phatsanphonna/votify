<script lang="ts">
	import type { PageServerData } from './$types';
	import MemberCard from './MemberCard.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="flex flex-col gap-2">
	{#each data.members as member, index}
		<MemberCard {member} index={index + 1} />
	{/each}
</div>

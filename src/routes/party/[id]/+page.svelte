<script lang="ts">
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<svelte:head>
	<title>ประวัติพรรค{data.party.name}</title>
</svelte:head>

<p>{data.party.background}</p>

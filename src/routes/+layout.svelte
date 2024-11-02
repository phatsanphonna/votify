<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';
	import { queryClient } from '$lib/query';
	import { MobileNavbar } from '$lib/components/svelte';
	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
		{@render children()}
	<MobileNavbar />
</QueryClientProvider>

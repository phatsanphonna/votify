<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';
	import { queryClient } from '$lib/query';
	import { MobileNavbar } from '$lib/components/svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<Toaster />
	{@render children()}
	<MobileNavbar />
</QueryClientProvider>

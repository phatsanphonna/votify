<script lang="ts">
	import { cn } from '$lib/utils';
	import { LoaderCircleIcon } from 'lucide-svelte';
	import { Button, buttonVariants } from '../ui/button';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Properties extends HTMLButtonAttributes {
		class?: string;
		disabled?: boolean;
		isLoading?: boolean;
	}

	let { children, class: className, disabled, isLoading, ...others }: Properties = $props();
</script>

<Button
	class={cn(buttonVariants({ className }))}
	disabled={disabled || isLoading}
	on:click
	on:change
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{...others}
>
	<div class="flex items-center justify-center text-accent">
		{#if isLoading}
			<LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
		{:else}
			{@render (children as Snippet<[]>)()}
		{/if}
	</div>
</Button>

<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Votify</title>
</svelte:head>

<div class="min-h-screen text-center grid place-items-center">
	<div>
		<h1 class="text-8xl text-primary font-bold">Votify</h1>
		<a href="/vote" class={buttonVariants()}>เลือกตั้ง</a>
	</div>
</div>

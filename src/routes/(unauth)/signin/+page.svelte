<script lang="ts">
	import { goto } from '$app/navigation';
	import { LoadingButton } from '$lib/components/svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { createMutation } from '@tanstack/svelte-query';

	let nationalId = $state('');
	let password = $state('');

	const mutate = createMutation({
		mutationKey: ['signin'],
		mutationFn: async () => {
			const response = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ nationalId, password })
			});

			if (!response.ok) {
				throw new Error(JSON.parse((await response.json()).message));
			}

			return await response.json();
		},
		onSuccess: (data) => {
			goto('/vote');
		},
		onError: (error) => {
			console.error(JSON.stringify(error));
		}
	});
</script>

<div class="p-8 flex flex-col gap-4">
	<h1 class="text-center text-4xl font-bold text-primary">เข้าสู่ระบบ</h1>

	<form class="flex flex-col gap-2" onsubmit={async () => await $mutate.mutateAsync()}>
		<Input
			bind:value={nationalId}
			placeholder="เลขบัตรประชาชน"
			inputmode="numeric"
			disabled={$mutate.isPending}
		/>
		<Input
			bind:value={password}
			placeholder="รหัสผ่าน"
			type="password"
			disabled={$mutate.isPending}
		/>
		<LoadingButton type="submit" isLoading={$mutate.isPending}>เข้าสู่ระบบ</LoadingButton>
	</form>
</div>

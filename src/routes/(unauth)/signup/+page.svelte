<script lang="ts">
	import { goto } from '$app/navigation';
	import { LoadingButton } from '$lib/components/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { createMutation } from '@tanstack/svelte-query';

	let nationalId = $state('');
	let password = $state('');
	let confirmPassword = $state('');

	const mutate = createMutation({
		mutationKey: ['signup'],
		mutationFn: async () => {
			const response = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ nationalId, password, confirmPassword })
			});

			if (!response.ok) {
				throw new Error('Sign in failed');
			}

			return await response.json();
		},
		onSuccess: (data) => {
			goto('/vote');
		}
	});
</script>

<div class="p-8 flex flex-col gap-4">
	<h1 class="text-center text-4xl font-bold text-primary">สร้างบัญชีผู้ใช้</h1>

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
		<Input
			bind:value={confirmPassword}
			placeholder="ยืนยันรหัสผ่าน"
			type="password"
			disabled={$mutate.isPending}
		/>
		<LoadingButton type="submit" isLoading={$mutate.isPending}>สร้างบัญชีผู้ใช้</LoadingButton>
	</form>
</div>

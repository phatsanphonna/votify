<script lang="ts">
	import LoadingButton from '$lib/components/svelte/LoadingButton.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Dialog,
		DialogContent,
		DialogTrigger,
		DialogFooter,
		DialogClose
	} from '$lib/components/ui/dialog';
	import { createMutation } from '@tanstack/svelte-query';

	let {
		image,
		candidateNumber,
		candidateId,
		partyId,
		name,
		partyName
	}: {
		image: string;
		candidateNumber: number;
		name: string;
		partyName: string;
		candidateId: string;
		partyId: string;
	} = $props();

	let isVoted = $state(false);

	const mutate = createMutation({
		mutationKey: ['vote'],
		mutationFn: async () => {
			const response = await fetch('/api/vote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ candidateId, partyId })
			});

			if (!response.ok) {
				throw new Error('Failed to vote');
			}

			return response.json();
		},
		onSuccess: () => {
			isVoted = true;
		}
	});
</script>

<Dialog closeOnOutsideClick={false}>
	<DialogTrigger class="bg-[#DDE6ED] h-52 p-4 rounded-lg flex flex-col gap-2 item-center">
		<div class="relative">
			<img src={image} width="150" height="150" alt={`${name}`} class="rounded-lg" />
			<p class="absolute bottom-2 right-2 text-4xl font-bold bg-white rounded-full px-2">
				{candidateNumber}
			</p>
		</div>
		<span class="text-center w-full">{name}</span>
	</DialogTrigger>
	<DialogContent class="flex flex-col items-center gap-4">
		<div class="flex flex-col">
			{#if isVoted}
				<span class="text-2xl text-center font-bold text-[#509A71]">เลือกตั้งสำเร็จ</span>
			{/if}
			<span class="text-lg text-center"
				>ท่านได้เลือกผู้สมัคร <span class="text-[#526D82] font-bold">เบอร์ {candidateNumber}</span
				></span
			>
		</div>
		<div class="flex flex-col bg-[#526D82] w-full rounded-lg p-2 text-center text-white">
			<span class="text-2xl font-bold">{name}</span>
			<span>พรรค{partyName}</span>
		</div>
		<img src={image} width="250" height="250" alt={`${name}`} class="rounded-lg" />
		<span class="text-red-500">กรุณาตรวจสอบข้อมูลก่อนยืนยัน</span>

		{#if isVoted}
			<DialogFooter class="flex flex-row justify-between w-full gap-2">
				<DialogClose
					class={buttonVariants({
						className: 'w-full',
						variant: 'secondary'
					})}
				>
					กลับสู่หน้าหลัก
				</DialogClose>
			</DialogFooter>
		{:else}
			<DialogFooter class="flex flex-row justify-between w-full gap-2">
				<DialogClose
					class={buttonVariants({
						className: 'w-full',
						variant: 'secondary'
					})}
					disabled={$mutate.isPending}
				>
					ยกเลิก
				</DialogClose>
				<LoadingButton
					isLoading={$mutate.isPending}
					class="w-full"
					onclick={async () => $mutate.mutateAsync()}>ยืนยัน</LoadingButton
				>
			</DialogFooter>
		{/if}
	</DialogContent>
</Dialog>

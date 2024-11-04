<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { VoteIcon } from 'lucide-svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
	const { user, area } = data;
</script>

<div
	class="flex flex-col w-full bg-gradient-to-t from-[#27374D] to-[#9DB2BF] p-4 text-white shadow"
>
	<a href="/" class="underline">ย้อนกลับ</a>

	<div class="flex justify-between">
		<div class="flex flex-col justify-between">
			<div>
				<h1 class="text-2xl font-bold">สวัสดี คุณ{user.firstname}</h1>
			</div>
		</div>
	</div>
</div>

<div class="flex justify-between rounded-lg p-2 bg-[#DDE6ED] items-center m-4">
	{#if user.isVoted}
		<div class="flex gap-2 text-primary items-center">
			<VoteIcon />
			<div>
				<p class="text-primary">คุณได้ใช้สิทธิ์การเลือกตั้งแล้ว</p>
				<p class="text-primary">เมื่อ {user.votedAt?.toLocaleString()}</p>
			</div>
		</div>
	{:else}
		<div class="flex gap-2 text-primary">
			<VoteIcon />
			<p class="text-primary">คุณยังไม่ได้ใช้สิทธิ์เลือกตั้ง</p>
		</div>
		<a href="/vote" class={buttonVariants()}>เลือกตั้ง</a>
	{/if}
</div>

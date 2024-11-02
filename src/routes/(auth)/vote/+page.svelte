<script lang="ts">
	import type { PageData } from './$types';
	import VoteStatusCard from './VoteStatusCard.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="p-8 flex flex-col gap-4">
	<h1 class="text-center text-4xl font-bold text-primary">คูหาออนไลน์</h1>

	<VoteStatusCard
		firstname={data.user.firstname}
		lastname={data.user.lastname}
		isVoted={data.user.isVoted}
		votedAt={data.user.votedAt}
	/>

	<div>
		<p class="text-center text-2xl font-bold">รายชื่อผู้สมัครเลือกตั้ง{data.area.name}</p>
		<p class="text-center">
			ท่านสามารถเลือกได้เพียง <span class="font-bold text-[#C91313]">1 ครั้ง</span> เท่านั้น
		</p>
	</div>
</div>

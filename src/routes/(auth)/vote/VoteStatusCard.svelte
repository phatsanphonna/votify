<script lang="ts">
	import CandidateCard from "./CandidateCard.svelte";

	let {
		firstname,
		lastname,
		isVoted,
		votedAt
	}: {
		firstname: string;
		lastname: string;
		isVoted: boolean;
		votedAt: Date | null;
	} = $props();
</script>

<div class="bg-[#27374D] p-2 rounded-lg text-white">
	<p class="font-bold">สวัสดี, {firstname} {lastname}</p>
	{#if isVoted}
		<p class="text-sm">
			คุณได้ใช้สิทธิ์การเลือกตั้งแล้ว
			<span class="text-[#0F996D] font-bold">เมื่อ {votedAt?.toLocaleString()}</span>
		</p>
	{:else}
		<p class="text-sm">
			ขณะนี้ สิทธิ์การเลือกตั้งของคุณ
			<span class="text-[#C91313] font-bold">ยังไม่ได้ใช้งาน</span>
		</p>
	{/if}
	<p class="text-xs">กรุณาใช้สิทธิ์ภายในวันเวลาที่กำหนด เพื่อรักษาผลประโยชน์ของตน</p>
</div>


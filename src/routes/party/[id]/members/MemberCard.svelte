<script lang="ts">
	import type { PartyMember } from '@prisma/client';

	let { member, index }: { member: PartyMember; index: number } = $props();
</script>

<div class="border-b flex justify-between p-2">
	<div class="">
		<p class="text-sm text-primary">สมาชิกลำดับที่ {index}</p>
		<p class="text-lg">{member.name}</p>
	</div>
	<img src={member.profileImage} alt={member.name} width="50" height="50" class="rounded-full" />
</div>

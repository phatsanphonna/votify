<script lang="ts">
	import { cn } from '$lib';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { LayoutServerData } from './$types';

	import { page } from '$app/stores';

	// @ts-ignore
	let { data, children }: { data: LayoutServerData } = $props();
	const { party, candidate, ranking } = data;
</script>

<div
	class="flex flex-col w-full bg-gradient-to-t from-[#27374D] to-[#9DB2BF] p-4 text-white shadow"
>
	<a href="/party" class="underline">ย้อนกลับ</a>

	<div class="flex justify-between">
		<div class="flex flex-col justify-between">
			<div>
				<h1 class="text-2xl font-bold">พรรค{party.name}</h1>
				<p class="text-lg">{candidate.partyMember?.name}</p>
				<span>{party.votes} คะแนน</span>
			</div>

			<p class="text-4xl font-bold">อันดับที่ {ranking}</p>
		</div>
		<img src={party.image} alt={party.name} width="150" height="150" class="rounded-full" />
	</div>
</div>

<div class="p-8 flex flex-col gap-4">
	<ul class="flex gap-2">
		<li
			class={cn({
				underline: !$page.url.pathname.endsWith('policy') && !$page.url.pathname.endsWith('members')
			})}
		>
			<a href={`/party/${$page.params.id}`}>ประวัติ</a>
		</li>
		<Separator orientation="vertical" />
		<li
			class={cn({
				underline: $page.url.pathname.endsWith('policy')
			})}
		>
			<a href={`/party/${$page.params.id}/policy`}>นโยบาย</a>
		</li>
		<Separator orientation="vertical" />
		<li
			class={cn({
				underline: $page.url.pathname.endsWith('members')
			})}
		>
			<a href={`/party/${$page.params.id}/members`}>สมาชิก</a>
		</li>
	</ul>

	{@render children()}
</div>

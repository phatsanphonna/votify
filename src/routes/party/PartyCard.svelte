<script lang="ts">
	let {
		image,
		name,
		votes,
		href
	}: {
		image: string;
		name: string;
		votes: number;
		href: string;
	} = $props();
</script>

<a
	href={`party/${href}`}
	class="shadow bg-gradient-to-t from-[#27374D] to-[#9DB2BF] rounded-2xl p-4 flex flex-col gap-2 text-center justify-center items-center h-64"
>
	<img src={image} width="100" height="100" alt={`${name} party photo`} class="rounded-full" />
	<p class="text-2xl font-bold text-white">{name}</p>
	<p class="text-white">{votes} คะแนน</p>
</a>

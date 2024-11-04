<script>
	import { ChartBarBigIcon, HomeIcon, ListIcon, UserIcon, VoteIcon } from 'lucide-svelte';
	import { Button, buttonVariants } from '../ui/button';
	import { page } from '$app/stores';
</script>

<div class="h-24 fixed bottom-0 w-full p-4">
	<nav class="h-full w-full bg-neutral-100 shadow rounded">
		<ul class="flex justify-between items-center w-full h-full p-4">
			<li>
				<a
					href="/"
					class={buttonVariants({
						variant: $page.url.pathname === '/' ? 'default' : 'link',
						size: 'icon',
						class: 'rounded-full'
					})}
				>
					<HomeIcon />
				</a>
			</li>
			<li>
				<Button class="rounded-full" size="icon" disabled>
					<ChartBarBigIcon />
				</Button>
			</li>
			<li>
				<a
					href="/vote"
					class={buttonVariants({
						variant: $page.url.pathname.startsWith('/vote') ? 'default' : 'link',
						size: 'icon',
						class: 'rounded-full'
					})}
				>
					<VoteIcon />
				</a>
			</li>
			<li>
				<a
					href="/party"
					class={buttonVariants({
						variant: $page.url.pathname.startsWith('/party') ? 'default' : 'link',
						size: 'icon',
						class: 'rounded-full'
					})}
				>
					<ListIcon />
				</a>
			</li>
			<li>
				<a
					href="/me"
					class={buttonVariants({
						variant: $page.url.pathname.startsWith('/me') ? 'default' : 'link',
						size: 'icon',
						class: 'rounded-full'
					})}
				>
					<UserIcon />
				</a>
			</li>
		</ul>
	</nav>
</div>

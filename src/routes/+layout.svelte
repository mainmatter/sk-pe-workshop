<script>
	import { page } from '$app/stores';
	import '../global.css';
	const routes = [
		{ href: '/', name: 'Home' },
		{
			href: '/about',
			name: 'About'
		}
	];
</script>

<nav>
	{#each routes as route}
		{@const isActive = route.href === $page.route.id}
		<a href={route.href} data-active={isActive}>{route.name}</a>
	{/each}
</nav>

<slot />

<style>
	nav {
		display: flex;
	}

	a {
		padding: 5px 10px;
		text-decoration: none;
	}

	a[data-active='true'] {
		background-color: blue;
		border-radius: 20px;
		color: white;
	}
</style>

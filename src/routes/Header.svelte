<script>
	import { page } from '$app/stores';
	import favimage from '$lib/images/favicon.png';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
</script>

<header>
	<img src="{favimage}" alt="vand" class="favImage" width="60">
	<h1>Vand.hk</h1>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/essays' ? 'page' : undefined}>
				<a href="/essays">Essays</a>
			</li>
			<li aria-current={$page.url.pathname === '/bookshelf' ? 'page' : undefined}>
				<a href="/bookshelf">Bookshelf</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		// justify-content: space-between;
	}

	h1 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0.5em;
		font-weight: 400;
		font-size: 1em;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 25px;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 6.5px;
		right: 0;
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
		transform: rotate(90deg)
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: flex-start;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 400;
		font-size: 0.8rem;
		text-transform: capitalize;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		text-decoration: underline;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.favImage {
		width: 60px;
	}
</style>

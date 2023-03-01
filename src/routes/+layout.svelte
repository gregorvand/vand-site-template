<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { page } from '$app/stores';


	// export let pageData = page;
	 /** @type {import('./$types').PageData} */
	 export let data;
</script>

<div class="app">
	<Header/>

	<main>
	
		<h1>{$page.url.pathname}</h1>
		<slot />
	</main>

	<footer>
		<p>it is {data.date}</p>
	</footer>
</div>

<style lang="scss">

@mixin font {
		font-family: "indivisible", sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	h1 {
		font-size: 1.2rem;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		@include font;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
			font-size: 0.7rem;
		}
	}
</style>

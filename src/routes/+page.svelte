<script>
	import home from '$lib/images/GVC01153.webp';
</script>

<svelte:head>
	<title>Vand : Home</title>
	<meta name="description" content="gregor vand (vand.hk) :: Essays, Bookshelf, About" />
</svelte:head>

<section>
		<img src="{home}" width="500" alt="hello real world" class="main-image">
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.main-image {
		max-width: 80vw;
	}
</style>

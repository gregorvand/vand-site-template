<script>
	import * as bookshelf from './bookshelf.json'
</script>

<svelte:head>
	<title>Vand : Bookshelf</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<p>These are books that I own and have read at least 80%. Currently from the last 24 months -- more to come. <br>
		<p>This list is not a set of recommendations per se - I have given a blurb below each title as a snapshot of what I took away from reading it. To really appreciate a book, I try to read it twice. Denoted by <i>[2]</i> (or however many times)</p>
		<p>Date ordered (latest read at the top).</p>

		<span>For clarity, whilst I appreciate their use case, the below does not include audiobooks (ie all below are read -- but I survive in addition on podcasts).</span>


	<ul>	
			{#each bookshelf.books as book}
			<li>
				<h4>{book.title} ({book.author})</h4>		
				<p>{@html book.blurb}</p>
			</li>
			{/each}	
	</ul>
</div>


<style>
	ul {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100%;
		
	}

	span {
		font-size: 0.7rem;
	}

	h4 {
		margin-bottom: 0;
	}
</style>
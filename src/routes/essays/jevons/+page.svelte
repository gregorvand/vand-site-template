<script>
  import Date from '../../../components/Date.svelte'
  import ArticleContent, { metadata } from './Content.md'
</script>

<svelte:head>
	<title>Essays : {metadata.title}</title>
	<meta name="description" content="{metadata.title} by Vand" />
</svelte:head>

<h1>{metadata.title}</h1>
<Date date="{metadata.date}" />
<ArticleContent />
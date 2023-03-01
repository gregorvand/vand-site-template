<script>
	 import dayjs from 'dayjs'
   export let date
   export let dateToPrint = dayjs(date).format('MMMM YYYY')
</script>

<p>{dateToPrint}</p>

<style>
  p {
    font-style: italic;
  }
</style>
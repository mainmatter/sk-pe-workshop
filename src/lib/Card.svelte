<script>
	export let title;
</script>

<div class="card">
	<h3>{title}</h3>
	<div>
		<slot>Fallback content</slot>
	</div>
</div>

<style>
	.card {
		padding: 10px;
		border: 1px rgb(0, 0, 0, 20%) solid;
		border-radius: 5px;
	}
</style>

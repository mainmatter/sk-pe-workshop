<script>
	import Card from '$lib/Card.svelte';
	export let data;
	export let form;
</script>

<h1>Progressive Enhancement</h1>

<form method="POST" action="?/addNote">
	<div>
		<label for="title">Title</label>
		<input type="text" name="title" />
	</div>
	{#if form?.message}
		<div>{form.message}</div>
	{/if}
	<div>
		<label for="content">Content</label>
		<textarea name="content" cols="30" rows="3"></textarea>
	</div>
	<button type="submit">Add note</button>
</form>

{#each data.notes as note}
	<Card title={note.title}>
		<p>
			{note.content}
		</p>
		<form method="POST" action="?/removeNote">
			<input type="hidden" value={note.title} name="title" />
			<input type="hidden" value={note.content} name="content" />
			<button type="submit">Remove</button>
		</form>
	</Card>
{:else}
	<div>You don't have any notes to display.</div>
{/each}

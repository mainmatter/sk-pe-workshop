<script>
  const array = [
    {id: 'a',
    title: 'Hello!',
  content: 'Foo'
},
    {id: 'b',
    title: 'Hey!',
  content: 'Bar'
},
    {id: 'c',
    title: 'Hola',
  content: 'Baz'
},
  ]

  let reacted = false

  $: emoji = reacted ? '🤩' : '🥱'

  function foo(node, value) {
    console.log('mounted')
		return {
			update(value) {
        console.log(value)
			},
			destroy() {
        console.log('destroyed')
			}
		};
	}
</script>

<h2>
  Steps:
</h2>
<ol>
  <li>
    Create a new component.
  </li>
  <li>
    Add reactivity
  </li>
  <li>
    Conditionally show DOM elements with an `if` block
  </li>
  <li>
    Iterate over a list with an `each` block
  </li>
</ol>

<button on:click={()=> reacted = !reacted}>{emoji}</button>
<p>Loop through an iterable</p>
<ul>
  {#each array as value, index (value.id)}
  <li>
    {index}: {value.id} - {value.title} - {value.content}
  </li>
  {/each}
</ul>

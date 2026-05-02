<script lang="ts">
	import { Button } from 'obsidian-svelte-ui';

	let clickCount = $state(0);
</script>

<Button
	onClick={() => {
		clickCount++;
	}}
>
	Click me
</Button>

<p>Clicked: {clickCount} times</p>

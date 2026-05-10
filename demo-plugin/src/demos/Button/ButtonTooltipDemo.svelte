<script lang="ts">
	import { Button, setTooltip } from 'obsidian-svelte-ui';

	let clickCount = $state(0);
</script>

<Button
	onClick={() => {
		clickCount++;
	}}
	{@attach setTooltip(`Clicked: ${clickCount} times`)}
>
	Click me
</Button>

<p>Hover the button to see the count</p>

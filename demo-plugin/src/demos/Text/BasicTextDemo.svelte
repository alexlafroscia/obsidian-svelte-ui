<script lang="ts">
	import { Text } from 'obsidian-svelte-ui';

	let textValue = $state('Initial Value');
</script>

<Text
	value={textValue}
	placeholder="Enter a value"
	onChange={(value) => {
		textValue = value;
	}}
/>

<p>Value: {textValue}</p>

<script lang="ts">
	import { TextArea } from 'obsidian-svelte-ui';

	let textValue = $state('Initial Value');
</script>

<TextArea
	value={textValue}
	placeholder="Enter a value"
	onChange={(value) => {
		textValue = value;
	}}
/>

<p>Value: {textValue}</p>

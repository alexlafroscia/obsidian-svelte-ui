<script lang="ts">
	import { Color } from 'obsidian-svelte-ui';

	let colorValue = $state('#ff0000');
</script>

<Color
	value={colorValue}
	onChange={(value) => {
		colorValue = value;
	}}
/>

<p>Color: <code style="color: {colorValue}">{colorValue}</code></p>

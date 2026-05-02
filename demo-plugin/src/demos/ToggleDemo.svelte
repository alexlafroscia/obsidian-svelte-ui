<script lang="ts">
	import { Toggle } from 'obsidian-svelte-ui';

	let enabled = $state(false);
</script>

<Toggle
	value={enabled}
	onChange={(value) => {
		enabled = value;
	}}
/>

<p>Enabled: {enabled}</p>

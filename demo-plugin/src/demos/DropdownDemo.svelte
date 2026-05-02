<script lang="ts">
	import { Dropdown } from 'obsidian-svelte-ui';

	let selected = $state('option1');
	const options = { option1: 'Option 1', option2: 'Option 2', option3: 'Option 3' };
</script>

<Dropdown
	{options}
	value={selected}
	onChange={(value) => {
		selected = value;
	}}
/>

<p>Selected: {selected}</p>

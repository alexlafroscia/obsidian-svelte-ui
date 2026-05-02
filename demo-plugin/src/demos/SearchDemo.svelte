<script lang="ts">
	import { Search } from 'obsidian-svelte-ui';

	let searchValue = $state('');
</script>

<Search
	value={searchValue}
	placeholder="Search..."
	onChange={(value) => {
		searchValue = value;
	}}
/>

<p>Query: {searchValue}</p>

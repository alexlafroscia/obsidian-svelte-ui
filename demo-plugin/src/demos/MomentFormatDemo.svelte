<script lang="ts">
	import { MomentFormat } from 'obsidian-svelte-ui';

	let format = $state('YYYY-MM-DD');
	let sampleEl = $state<HTMLElement>();
</script>

<MomentFormat
	value={format}
	defaultFormat="YYYY-MM-DD"
	placeholder="Enter a date format"
	{sampleEl}
	onChange={(value) => {
		format = value;
	}}
/>

<p>Format: {format}</p>
<p>Sample: <span bind:this={sampleEl}></span></p>

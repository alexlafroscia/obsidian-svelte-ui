<script lang="ts">
	import { ProgressBar } from 'obsidian-svelte-ui';

	let progress = $state(50);
</script>

<ProgressBar value={progress} />

<input type="range" min="0" max="100" bind:value={progress} />
<p>Progress: {progress}%</p>

<script lang="ts">
	import { ExtraButton } from 'obsidian-svelte-ui';

	let clickCount = $state(0);
</script>

<ExtraButton
	icon="lucide-star"
	onClick={() => {
		clickCount++;
	}}
/>

<p>Clicked: {clickCount} times</p>

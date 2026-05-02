<script lang="ts">
	import { Slider } from 'obsidian-svelte-ui';

	let sliderValue = $state(50);
</script>

<Slider
	value={sliderValue}
	limits={{ min: 0, max: 100, step: 1 }}
	onChange={(value) => {
		sliderValue = value;
	}}
/>

<p>Value: {sliderValue}</p>

<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';

	let {
		suggestion,
		value
	}: {
		suggestion: Snippet<[T]>;
		value: T;
	} = $props();
</script>

{@render suggestion(value)}

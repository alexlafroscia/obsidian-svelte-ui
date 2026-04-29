<script lang="ts">
	interface Props {
		containerEl: HTMLElement | undefined | null;
	}

	let { containerEl = $bindable() }: Props = $props();
</script>

<div style="display: contents;" bind:this={containerEl}></div>

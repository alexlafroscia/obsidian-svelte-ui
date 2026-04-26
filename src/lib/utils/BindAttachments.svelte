<script lang="ts">
	import type { Attachment } from 'svelte/attachments';

	interface Props {
		node: HTMLElement | null | undefined;
	}

	let { node, ...rest }: Props = $props();

	$effect(() => {
		if (!node) return;

		const attachmentKeys = Object.getOwnPropertySymbols(rest);
		const callbacks = new Set<() => void>();

		for (const key of attachmentKeys) {
			const attachment = (rest as Record<symbol, Attachment>)[key];

			const cleanup = attachment(node);
			if (cleanup) {
				callbacks.add(cleanup);
			}
		}

		return () => {
			for (const callback of callbacks) {
				callback();
			}
		};
	});
</script>

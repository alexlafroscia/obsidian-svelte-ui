import { type TooltipOptions, setTooltip } from 'obsidian';
import type { Attachment } from 'svelte/attachments';

export function setTooltipAttachment(
	tooltip: string,
	options?: TooltipOptions | undefined
): Attachment<HTMLElement> {
	return (node) => {
		$effect(() => {
			setTooltip(node, tooltip, options);
		});
	};
}

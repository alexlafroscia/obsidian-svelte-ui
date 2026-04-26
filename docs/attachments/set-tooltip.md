# `setTooltip`

Attaches an Obsidian tooltip to an element using Obsidian's `setTooltip` API.

```svelte
<script>
	import { setTooltip } from 'obsidian-svelte-ui';
</script>

<button {@attach setTooltip('Save file', { placement: 'top' })}> Save </button>
```

This can also be attached to most of the components provided by this package to attach the toolip
to the underlying DOM node.

## Signature

```ts
function setTooltip(tooltip: string, options?: TooltipOptions): Attachment<HTMLElement>;
```

| Parameter | Type             | Description                                          |
| --------- | ---------------- | ---------------------------------------------------- |
| `tooltip` | `string`         | Tooltip text to display                              |
| `options` | `TooltipOptions` | Optional placement and display options from Obsidian |

The tooltip is reactive — if `tooltip` or `options` changes, it will be updated automatically.

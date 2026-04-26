# `Slider`

Wraps Obsidian's `SliderComponent` class as a Svelte component. Renders a range slider.

```svelte
<script>
	import { Slider } from 'obsidian-svelte-ui';

	let volume = $state(50);
</script>

<Slider
	value={volume}
	limits={{ min: 0, max: 100, step: 1 }}
	dynamicTooltip
	onChange={(v) => (volume = v)}
/>
```

## Props

| Prop             | Type                      | Default | Description                                               |
| ---------------- | ------------------------- | ------- | --------------------------------------------------------- |
| `disabled`       | `boolean`                 | `false` | Disable the slider                                        |
| `dynamicTooltip` | `boolean`                 | `false` | Show a tooltip with the current value while dragging      |
| `instant`        | `boolean`                 | —       | Fire `onChange` on every move rather than only on release |
| `limits`         | `SliderLimits`            | —       | Minimum, maximum, and step constraints                    |
| `onChange`       | `(value: number) => void` | —       | Called when the value changes                             |
| `value`          | `number`                  | —       | Current slider value                                      |

### `SliderLimits`

```ts
interface SliderLimits {
	min: number | null;
	max: number | null;
	step: number | 'any';
}
```

| Field  | Description                                             |
| ------ | ------------------------------------------------------- |
| `min`  | Minimum allowed value (`null` for no minimum)           |
| `max`  | Maximum allowed value (`null` for no maximum)           |
| `step` | Step increment, or `'any'` to allow arbitrary precision |

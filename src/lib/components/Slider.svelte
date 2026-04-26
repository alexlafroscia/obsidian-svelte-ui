<script lang="ts">
	import { SliderComponent } from 'obsidian';

	import BindAttachments from '$lib/utils/BindAttachments.svelte';
	import ExposeContainerElement from '$lib/utils/ExposeContainerElement.svelte';
	import {
		bindMethodArgumentsToProps,
		bindMethodsToBooleanProps
	} from '$lib/utils/props-to-methods.svelte';

	type OnChangeCallback = Parameters<SliderComponent['onChange']>[0];

	interface SliderLimits {
		min: number | null;
		max: number | null;
		step: number | 'any';
	}

	interface Props {
		disabled?: boolean;
		dynamicTooltip?: boolean;
		instant?: boolean;
		limits?: SliderLimits;
		onChange?: OnChangeCallback;
		value?: number;
	}

	let { disabled = false, dynamicTooltip = false, instant, limits, onChange, value, ...rest }: Props =
		$props();

	let containerEl: HTMLElement | null | undefined = $state();

	let instance = $derived.by(() => {
		if (containerEl) {
			return new SliderComponent(containerEl);
		}
	});
	let sliderEl = $derived(instance?.sliderEl);

	bindMethodsToBooleanProps(() => instance, {
		setDynamicTooltip: () => dynamicTooltip
	});

	bindMethodArgumentsToProps(() => instance, {
		onChange: () => onChange,
		setDisabled: () => disabled,
		setInstant: () => instant,
		setValue: () => value
	});

	$effect(() => {
		if (instance && limits) {
			instance.setLimits(limits.min, limits.max, limits.step);
		}
	});
</script>

<ExposeContainerElement bind:containerEl />
<BindAttachments node={sliderEl} {...rest} />

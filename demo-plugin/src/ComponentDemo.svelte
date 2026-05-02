<script lang="ts">
	import type { App } from 'obsidian';
	import { Tabs, Tab } from 'obsidian-svelte-ui';

	import ComponentShowcase from './ComponentShowcase.svelte';

	import ButtonDemo from './demos/ButtonDemo.svelte';
	import ButtonDemoSource from './demos/ButtonDemo.svelte?raw';
	import ColorDemo from './demos/ColorDemo.svelte';
	import ColorDemoSource from './demos/ColorDemo.svelte?raw';
	import DropdownDemo from './demos/DropdownDemo.svelte';
	import DropdownDemoSource from './demos/DropdownDemo.svelte?raw';
	import ExtraButtonDemo from './demos/ExtraButtonDemo.svelte';
	import ExtraButtonDemoSource from './demos/ExtraButtonDemo.svelte?raw';
	import MomentFormatDemo from './demos/MomentFormatDemo.svelte';
	import MomentFormatDemoSource from './demos/MomentFormatDemo.svelte?raw';
	import ModalDemo from './demos/ModalDemo.svelte';
	import ModalDemoSource from './demos/ModalDemo.svelte?raw';
	import ProgressBarDemo from './demos/ProgressBarDemo.svelte';
	import ProgressBarDemoSource from './demos/ProgressBarDemo.svelte?raw';
	import SearchDemo from './demos/SearchDemo.svelte';
	import SearchDemoSource from './demos/SearchDemo.svelte?raw';
	import SecretDemo from './demos/SecretDemo.svelte';
	import SecretDemoSource from './demos/SecretDemo.svelte?raw';
	import SliderDemo from './demos/SliderDemo.svelte';
	import SliderDemoSource from './demos/SliderDemo.svelte?raw';
	import TextDemo from './demos/TextDemo.svelte';
	import TextDemoSource from './demos/TextDemo.svelte?raw';
	import TextAreaDemo from './demos/TextAreaDemo.svelte';
	import TextAreaDemoSource from './demos/TextAreaDemo.svelte?raw';
	import ToggleDemo from './demos/ToggleDemo.svelte';
	import ToggleDemoSource from './demos/ToggleDemo.svelte?raw';

	interface Props {
		app: App;
	}

	let { app }: Props = $props();
</script>

<Tabs>
	<Tab title="Button">
		<ComponentShowcase source={ButtonDemoSource}>
			<ButtonDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Color">
		<ComponentShowcase source={ColorDemoSource}>
			<ColorDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Dropdown">
		<ComponentShowcase source={DropdownDemoSource}>
			<DropdownDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="ExtraButton">
		<ComponentShowcase source={ExtraButtonDemoSource}>
			<ExtraButtonDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="MomentFormat">
		<ComponentShowcase source={MomentFormatDemoSource}>
			<MomentFormatDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Modal">
		<ComponentShowcase source={ModalDemoSource}>
			<ModalDemo {app} />
		</ComponentShowcase>
	</Tab>

	<Tab title="ProgressBar">
		<ComponentShowcase source={ProgressBarDemoSource}>
			<ProgressBarDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Search">
		<ComponentShowcase source={SearchDemoSource}>
			<SearchDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Secret">
		<ComponentShowcase source={SecretDemoSource}>
			<SecretDemo {app} />
		</ComponentShowcase>
	</Tab>

	<Tab title="Slider">
		<ComponentShowcase source={SliderDemoSource}>
			<SliderDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Text">
		<ComponentShowcase source={TextDemoSource}>
			<TextDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="TextArea">
		<ComponentShowcase source={TextAreaDemoSource}>
			<TextAreaDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Toggle">
		<ComponentShowcase source={ToggleDemoSource}>
			<ToggleDemo />
		</ComponentShowcase>
	</Tab>
</Tabs>

<script lang="ts">
	import type { App } from 'obsidian';

	import ComponentShowcase from '../ComponentShowcase.svelte';
	import Tabs from '../tabs/Tabs.svelte';
	import Tab from '../tabs/Tab.svelte';

	import BasicTextDemo from './Text/BasicTextDemo.svelte';
	import BasicTextDemoSource from './Text/BasicTextDemo.svelte?raw';
	import TextInputSuggestDemo from './Text/TextInputSuggestDemo.svelte';
	import TextInputSuggestDemoSource from './Text/TextInputSuggestDemo.svelte?raw';

	interface Props {
		app: App;
	}

	let { app }: Props = $props();
</script>

<Tabs>
	<Tab title="Basic Text">
		<ComponentShowcase source={BasicTextDemoSource}>
			<BasicTextDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Input Suggest">
		<ComponentShowcase source={TextInputSuggestDemoSource}>
			<TextInputSuggestDemo {app} />
		</ComponentShowcase>
	</Tab>
</Tabs>

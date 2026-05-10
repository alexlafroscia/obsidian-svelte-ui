<script lang="ts">
	import ComponentShowcase from '../ComponentShowcase.svelte';
	import Tabs from '../tabs/Tabs.svelte';
	import Tab from '../tabs/Tab.svelte';

	import BasicButtonDemo from './Button/BasicButtonDemo.svelte';
	import BasicButtonDemoSource from './Button/BasicButtonDemo.svelte?raw';
	import ButtonTooltipDemo from './Button/ButtonTooltipDemo.svelte';
	import ButtonTooltipDemoSource from './Button/ButtonTooltipDemo.svelte?raw';
</script>

<Tabs>
	<Tab title="Basic Button">
		<ComponentShowcase source={BasicButtonDemoSource}>
			<BasicButtonDemo />
		</ComponentShowcase>
	</Tab>

	<Tab title="Tooltip">
		<ComponentShowcase source={ButtonTooltipDemoSource}>
			<ButtonTooltipDemo />
		</ComponentShowcase>
	</Tab>
</Tabs>

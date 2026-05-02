<script lang="ts">
	import { Tabs, Tab } from 'obsidian-svelte-ui';

	import ComponentShowcase from './ComponentShowcase.svelte';

	import TextDemo from './demos/TextDemo.svelte';
	import TextDemoSource from './demos/TextDemo.svelte?raw';
	import TextAreaDemo from './demos/TextAreaDemo.svelte';
	import TextAreaDemoSource from './demos/TextAreaDemo.svelte?raw';
</script>

<Tabs>
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
</Tabs>

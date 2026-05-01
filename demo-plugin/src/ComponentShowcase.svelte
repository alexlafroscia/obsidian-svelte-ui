<script lang="ts" module>
	import { createHighlighter } from 'shiki';

	const resolveHighlighter = createHighlighter({
		themes: ['github-light'],
		langs: ['svelte']
	});

	async function highlight(source: string) {
		const highlighter = await resolveHighlighter;

		return highlighter.codeToHtml(source, {
			lang: 'svelte',
			theme: 'github-light'
		});
	}
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		source: string;
		children: Snippet;
	}

	let { source, children }: Props = $props();
</script>

<section class="showcase">
	<div class="body">
		<!-- Left: live rendered component -->
		<div class="preview">
			<span class="label">Preview</span>
			<div class="stage">
				{@render children()}
			</div>
		</div>

		<!-- Right: syntax-highlighted source -->
		<div class="code">
			<span class="label">Source</span>
			{#await highlight(source)}
				<pre class="fallback">{source}</pre>
			{:then highlightedCode}
				{@html highlightedCode}
			{/await}
		</div>
	</div>
</section>

<style>
	.showcase {
		margin-bottom: 2.5rem;
		border: 1px solid #e2e8f0;
		border-radius: 0.75rem;
		overflow: hidden;
		font-family: inherit;
	}

	.body {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 640px) {
		.body {
			grid-template-columns: 1fr;
		}
	}

	.preview {
		padding: 1.5rem;
		border-right: 1px solid #e2e8f0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.code {
		padding: 1.5rem;
		background: #f8fafc;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.label {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #94a3b8;
	}

	.stage {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		padding: 0.5rem 0;
	}

	.fallback {
		margin: 0;
		font-size: 0.8rem;
		white-space: pre-wrap;
		color: #374151;
	}

	.code :global(.shiki) {
		margin: 0;
		padding: 0;
		font-size: 0.8rem;
		line-height: 1.6;
		background: transparent !important;
		overflow-x: auto;
		tab-size: 2;
	}
</style>

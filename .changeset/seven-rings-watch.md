---
'obsidian-svelte-ui': major
---

renamed `SvelteComponentChild` to `SvelteComponent`

Using this class in the `demo-plugin` made me realize the class is named in a really clunky way. Rather than keeping it, I decided to rename it; realistically, no one is using this library yet (other than me).

Replace your import of `SvelteComponentchild` with `SvelteComponent` and you're good-to-go!
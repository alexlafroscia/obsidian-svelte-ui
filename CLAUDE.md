# Claude Guidelines

## Component documentation

When modifying any file under `src/lib/components/` or `src/lib/attachments/`, you must also update the corresponding documentation file:

- `src/lib/components/<Name>.svelte` → `docs/components/<Name>.md`
- `src/lib/attachments/<name>.svelte.ts` → `docs/attachments/<name>.md`

Documentation files should reflect the current props interface exactly — keep the props table, types, defaults, and any usage notes in sync with the source.

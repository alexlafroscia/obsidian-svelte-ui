# Claude Guidelines

## Mono-Repo Structure

This mono-repo contains a few different packages.

- `obsidian-svelte-ui` is the main package; changes should be assumed to be made here. Other packages support the development of this one, and this is the only one that is published for consumption by other people.

## Component documentation

When modifying any file under `src/lib/components/` or `src/lib/attachments/`, you must also update the corresponding documentation file:

- `src/lib/components/<Name>.svelte` → `docs/components/<Name>.md`
- `src/lib/attachments/<name>.svelte.ts` → `docs/attachments/<name>.md`

Documentation files should reflect the current props interface exactly — keep the props table, types, defaults, and any usage notes in sync with the source.

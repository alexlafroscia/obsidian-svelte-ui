# obsidian-svelte-ui

## 2.0.0

### Major Changes

- 6c74708: renamed `SvelteComponentChild` to `SvelteComponent`

  Using this class in the `demo-plugin` made me realize the class is named in a really clunky way. Rather than keeping it, I decided to rename it; realistically, no one is using this library yet (other than me).

  Replace your import of `SvelteComponentchild` with `SvelteComponent` and you're good-to-go!

## 1.1.0

### Minor Changes

- 9270682: Add `Dropdown` component
- 9270682: Add `Toggle` component
- 9270682: Add `Text` component
- 9270682: Add `Slider` component
- 9270682: Add `MomentFormat` component
- 9270682: Add `Color` component
- 9270682: Add `ExtraButton` component
- 9270682: Add `Search` component
- 9270682: add `ProgressBar` component
- 9270682: Add `Secret` component
- 9270682: Add `TextArea` component

### Patch Changes

- 9270682: Allow attachments on Obsidian component wrappers
- 9270682: Ensure Obsidian components are mounted in a predictable DOM order
- a6bc3a3: Publishing functionality build so far:
  - Add `Button` component
  - Add `Modal` component
  - Add `setTooltip` attachment
  - Add `SvelteComponentChild` utility

## 1.0.1-beta.0

### Patch Changes

- a6bc3a3: Publishing functionality build so far:
  - Add `Button` component
  - Add `Modal` component
  - Add `setTooltip` attachment
  - Add `SvelteComponentChild` utility

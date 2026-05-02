# obsidian-svelte-ui

Svelte 5 components and utilities for building [Obsidian](https://obsidian.md) plugins.

Often times when building Obsidian plugins with Svelte, I find myself having to choose between the ease of building UI in Svelte and the desire to leverage the UI components provided by the Obsidian plugin API. This package aims to eliminate this choice by providing Svelte components that bridge this gap, allowing the Obsidian components to be rendered easily in Svelte. These aren't components built to look like the ones provided by Svelte; these are _the_ Obsidian components, exposed through a Svelte-friendly API.

## Installation

```sh
npm install obsidian-svelte-ui
# or
pnpm add obsidian-svelte-ui
```

Requires `obsidian ^1.12.3` and `svelte ^5.0.0` as peer dependencies.

Additionally, you will need to add the `svelte` condition to your Obsidian plugin's `esbuild` config file in order to allow the external Svelte components
within this package to be correctly resolved.

## Uaage

### Components

| Component                                                            | Description                              |
| -------------------------------------------------------------------- | ---------------------------------------- |
| [`Button`](obsidian-svelte-ui/docs/components/Button.md)             | Wraps Obsidian's `ButtonComponent`       |
| [`Color`](obsidian-svelte-ui/docs/components/Color.md)               | Wraps Obsidian's `ColorComponent`        |
| [`Dropdown`](obsidian-svelte-ui/docs/components/Dropdown.md)         | Wraps Obsidian's `DropdownComponent`     |
| [`ExtraButton`](obsidian-svelte-ui/docs/components/ExtraButton.md)   | Wraps Obsidian's `ExtraButtonComponent`  |
| [`Modal`](obsidian-svelte-ui/docs/components/Modal.md)               | Wraps Obsidian's `Modal`                 |
| [`MomentFormat`](obsidian-svelte-ui/docs/components/MomentFormat.md) | Wraps Obsidian's `MomentFormatComponent` |
| [`ProgressBar`](obsidian-svelte-ui/docs/components/ProgressBar.md)   | Wraps Obsidian's `ProgressBarComponent`  |
| [`Search`](obsidian-svelte-ui/docs/components/Search.md)             | Wraps Obsidian's `SearchComponent`       |
| [`Secret`](obsidian-svelte-ui/docs/components/Secret.md)             | Wraps Obsidian's `SecretComponent`       |
| [`Slider`](obsidian-svelte-ui/docs/components/Slider.md)             | Wraps Obsidian's `SliderComponent`       |
| [`Text`](obsidian-svelte-ui/docs/components/Text.md)                 | Wraps Obsidian's `TextComponent`         |
| [`TextArea`](obsidian-svelte-ui/docs/components/TextArea.md)         | Wraps Obsidian's `TextAreaComponent`     |
| [`Toggle`](obsidian-svelte-ui/docs/components/Toggle.md)             | Wraps Obsidian's `ToggleComponent`       |

### Attachments

Svelte 5 [attachments](https://svelte.dev/obsidian-svelte-ui/docs/svelte/svelte-attachments) are functions that can be applied to elements using the `{@attach ...}` directive.

| Attachment                                                         | Description                                |
| ------------------------------------------------------------------ | ------------------------------------------ |
| [`setTooltip`](obsidian-svelte-ui/docs/attachments/set-tooltip.md) | Attaches an Obsidian tooltip to an element |

### `SvelteComponent`

A class for rendering a Svelte component inside an Obsidian view, compatible with Obsidian's child lifecycle. See the [full documentation](obsidian-svelte-ui/docs/SvelteComponent.md).

## Example Plugins

The following repositories my be useful as references for how this package can be used:

- [`demo-plugin`](./demo-plugin/README.md)
  - Provides an example for all of the behavior provided by `obsidian-svelte-ui`
- [`obsidian-mdbase`](https://github.com/alexlafroscia/obsidian-mdbase)
  - [Rendering an `ExtraButton`](https://github.com/alexlafroscia/obsidian-mdbase/blob/c72737311df9e10d8a2b0bc9f2677dc86a41f87a/src/validation/FileValidationButton.svelte#L56-L71)
  - [Managing a Svelte child view](https://github.com/alexlafroscia/obsidian-mdbase/blob/c72737311df9e10d8a2b0bc9f2677dc86a41f87a/src/validation/validationButton.ts)
  - [`esbuild` config to resolve `.svelte` files](https://github.com/alexlafroscia/obsidian-mdbase/blob/567a6746bc2e23a44f4c62f42b19ac11b094c4ad/esbuild.config.mjs#L34)

## AI Disclaimer

This package makes use of AI as part of it's development. I would _not_ call it vibe-coded, but Claude has been used to automate the process of generating the Svelte component wrappers once a good pattern for doing so was discovered.

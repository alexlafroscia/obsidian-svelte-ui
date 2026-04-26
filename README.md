# obsidian-svelte-ui

Svelte 5 components and utilities for building [Obsidian](https://obsidian.md) plugins.

## Installation

```sh
npm install obsidian-svelte-ui
# or
pnpm add obsidian-svelte-ui
```

Requires `obsidian ^1.12.3` and `svelte ^5.0.0` as peer dependencies.

## Components

| Component                                         | Description                              |
| ------------------------------------------------- | ---------------------------------------- |
| [`Button`](docs/components/Button.md)             | Wraps Obsidian's `ButtonComponent`       |
| [`Color`](docs/components/Color.md)               | Wraps Obsidian's `ColorComponent`        |
| [`Dropdown`](docs/components/Dropdown.md)         | Wraps Obsidian's `DropdownComponent`     |
| [`ExtraButton`](docs/components/ExtraButton.md)   | Wraps Obsidian's `ExtraButtonComponent`  |
| [`Modal`](docs/components/Modal.md)               | Wraps Obsidian's `Modal`                 |
| [`MomentFormat`](docs/components/MomentFormat.md) | Wraps Obsidian's `MomentFormatComponent` |
| [`ProgressBar`](docs/components/ProgressBar.md)   | Wraps Obsidian's `ProgressBarComponent`  |
| [`Search`](docs/components/Search.md)             | Wraps Obsidian's `SearchComponent`       |
| [`Secret`](docs/components/Secret.md)             | Wraps Obsidian's `SecretComponent`       |
| [`Slider`](docs/components/Slider.md)             | Wraps Obsidian's `SliderComponent`       |
| [`Text`](docs/components/Text.md)                 | Wraps Obsidian's `TextComponent`         |
| [`TextArea`](docs/components/TextArea.md)         | Wraps Obsidian's `TextAreaComponent`     |
| [`Toggle`](docs/components/Toggle.md)             | Wraps Obsidian's `ToggleComponent`       |

## Attachments

Svelte 5 [attachments](https://svelte.dev/docs/svelte/svelte-attachments) are functions that can be applied to elements using the `{@attach ...}` directive.

| Attachment                                      | Description                                |
| ----------------------------------------------- | ------------------------------------------ |
| [`setTooltip`](docs/attachments/set-tooltip.md) | Attaches an Obsidian tooltip to an element |

## `SvelteComponentChild`

A class for rendering a Svelte component inside an Obsidian view, compatible with Obsidian's child lifecycle. See the [full documentation](docs/SvelteComponentChild.md).

## AI Disclaimer

This package makes use of AI as part of it's development. I would _not_ call it vibe-coded, but Claude has been used to automate the process of generating the Svelte component wrappers once a good pattern for doing so was discovered.

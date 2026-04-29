import { test, expect, vi } from 'vitest';
import { flushSync } from 'svelte';

import {
	bindPropToMethod,
	bindMethodsToBooleanProps,
	bindMethodArgumentsToProps
} from './props-to-methods.svelte.ts';

test('bindPropToMethod', () => {
	const cleanup = $effect.root(() => {
		let value = $state(false);
		let component = $state<{ onClick: () => void }>();

		bindPropToMethod(
			() => component,
			() => value,
			(c, v) => {
				if (v) {
					c.onClick();
				}
			}
		);
		flushSync();

		component = {
			onClick: vi.fn()
		};

		flushSync();

		expect(component.onClick).not.toHaveBeenCalled();

		value = true;
		flushSync();

		expect(component.onClick).toHaveBeenCalled();
	});

	cleanup();
});

test('bindMethodsToBooleanProps', () => {
	const cleanup = $effect.root(() => {
		let foo = $state(false);
		let bar = $state(false);

		let onCleanup = vi.fn();

		let component = {
			onFoo: vi.fn(),
			onBar: vi.fn()
		};

		bindMethodsToBooleanProps(() => component, {
			onFoo: () => foo,
			onBar: [() => bar, (c) => onCleanup(c)]
		});
		flushSync();

		expect(component.onFoo).not.toHaveBeenCalled();
		expect(component.onBar).not.toHaveBeenCalled();
		expect(onCleanup).not.toHaveBeenCalled();

		foo = true;
		flushSync();

		expect(component.onFoo).toHaveBeenCalled();
		expect(component.onBar).not.toHaveBeenCalled();
		expect(onCleanup).not.toHaveBeenCalled();

		bar = true;
		flushSync();

		expect(component.onBar).toHaveBeenCalled();
		expect(onCleanup).not.toHaveBeenCalled();

		bar = false;
		flushSync();

		expect(onCleanup).toHaveBeenCalledTimes(1);
		expect(onCleanup).toHaveBeenCalledWith(component);
	});

	cleanup();
});

test('bindMethodArgumentsToProps', () => {
	const cleanup = $effect.root(() => {
		let value = $state('initial');

		const component = {
			setText: vi.fn<(value: string) => void>()
		};

		bindMethodArgumentsToProps(() => component, {
			setText: () => value
		});
		flushSync();

		expect(component.setText).toHaveBeenCalledWith('initial');

		value = 'updated';
		flushSync();

		expect(component.setText).toHaveBeenCalledWith('updated');
	});

	cleanup();
});

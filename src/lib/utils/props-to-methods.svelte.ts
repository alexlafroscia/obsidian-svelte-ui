type ValueGetter<T> = () => T;

type MethodArgGetter<F> = F extends (...args: any[]) => unknown
	? () => Parameters<F>[0] | undefined
	: never;

type MethodArgGetters<T> = {
	[K in keyof T as T[K] extends (...args: any[]) => unknown ? K : never]?: MethodArgGetter<T[K]>;
};

/**
 * Calls the given method on the component when the produced value is `true`
 *
 * Used to bind a boolean property to a method call on an object
 */
export function bindMethodsToBooleanProps<
	Method extends string,
	T extends Record<Method, () => unknown>
>(getComponent: () => T | undefined, config: Record<Method, ValueGetter<boolean>>) {
	const entries = Object.entries<ValueGetter<boolean>>(config);

	for (const [methodName, retreiveValue] of entries) {
		bindPropToMethod(getComponent, retreiveValue, (c, v) => {
			if (v) {
				c[methodName as Method]();
			}
		});
	}
}

/**
 * Calls this given methods on the component with the produced value as an argument
 *
 * Used to bind a property or state to a method call on an object
 */
export function bindMethodArgumentsToProps<T extends object>(
	getComponent: () => T | undefined,
	config: MethodArgGetters<T>
) {
	const entries = Object.entries(config) as Array<[string & keyof T, () => unknown]>;

	for (const [methodName, retreiveValue] of entries) {
		bindPropToMethod(getComponent, retreiveValue, (c, v) => {
			if (v !== undefined) {
				(c[methodName] as (arg: unknown) => unknown)(v);
			}
		});
	}
}

export function bindPropToMethod<T, V>(
	getComponent: () => T | undefined,
	getValue: () => V,
	performSideEffect: (component: T, value: V) => void
) {
	$effect(() => {
		const component = getComponent();
		const value = getValue();

		if (component) {
			return performSideEffect(component, value);
		}
	});
}

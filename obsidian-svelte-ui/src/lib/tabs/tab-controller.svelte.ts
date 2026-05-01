import { createContext } from 'svelte';

class TabController {
	activeTabIndex = $state(0);
	tabs = $state<string[]>([]);

	register(tab: string) {
		this.tabs = [...this.tabs, tab];

		return () => {
			this.tabs = this.tabs.filter((t) => t !== tab);
		};
	}

	isActive(tab: string) {
		const tabIndex = this.tabs.indexOf(tab);

		return this.activeTabIndex === tabIndex;
	}
}

const [getContext, setContext] = createContext<TabController>();

export function createTabController() {
	const tabController = new TabController();

	setContext(tabController);

	return tabController;
}

export function getTabController() {
	return getContext();
}

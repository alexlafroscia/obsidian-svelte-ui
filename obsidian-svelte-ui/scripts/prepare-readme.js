import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const PACKAGE_DIR = resolve(__dirname, '..');
const BASE_URL = 'https://github.com/alexlafroscia/obsidian-svelte-ui/blob/main/';

function resolveUrl(url) {
	if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('#')) {
		return url;
	}
	const path = url.startsWith('./') ? url.slice(2) : url;
	return BASE_URL + path;
}

const readme = readFileSync(resolve(ROOT, 'README.md'), 'utf-8');

const output = readme.replace(
	/\[([^\]]*)\]\(([^)]+)\)/g,
	(match, text, url) => `[${text}](${resolveUrl(url)})`
);

writeFileSync(resolve(PACKAGE_DIR, 'README.md'), output);
console.log('README prepared for publishing');

import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	assetsInclude: './static/output.css',
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['**/*.{test,spec,unit}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
	}
};

export default config;

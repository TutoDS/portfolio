import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	server: {
		hmr: {
			overlay: false
		}
	},

	plugins: [
		react(),
		tsconfigPaths(),
		// checker({ typescript: true }),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false
			},
			optipng: {
				optimizationLevel: 7
			},
			mozjpeg: {
				quality: 20
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4
			},
			svgo: {
				plugins: [
					{
						name: 'removeEmptyAttrs',
						active: false
					}
				]
			}
		})
	]
});

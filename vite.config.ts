import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		// Relative to the root
		outDir: 'build',
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	plugins: [splitVendorChunkPlugin(), react(), viteTsconfigPaths()],
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), glsl()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 8080
  },
  assetsInclude: ['**/*.gltf']
});

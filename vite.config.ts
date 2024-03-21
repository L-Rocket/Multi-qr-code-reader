import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
   
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    https: {
      key: path.resolve(__dirname, 'server.key'), // 指定私钥文件路径
      cert: path.resolve(__dirname, 'server.cert') // 指定证书文件路径
    }
  },
  optimizeDeps: {
    include: ['src\assets\alert.mp3'],
  },
});

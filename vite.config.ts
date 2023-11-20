import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  return {
    server: {
      port: 3000, // Порт для розробки
      open: true, // Автоматично відкривати браузер
    },
    build: {
      outDir: 'dist', // Каталог для збереження результатів збірки
      assetsDir: 'assets', // Каталог для статичних ресурсів
      sourcemap: !isProduction, // Генерувати файли карт посилань
      minify: isProduction ? 'terser' : false, // Мініфікація за допомогою Terser
      manifest: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',

          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }

            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      }

    },
    plugins: [
      vue(),

    ],

    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

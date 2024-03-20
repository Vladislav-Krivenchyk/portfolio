import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/main.css',
            'resources/js/main.js',
        ]),
        VueI18nPlugin({
            runtimeOnly: false,
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
        }),

    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});

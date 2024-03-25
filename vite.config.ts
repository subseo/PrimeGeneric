import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import {resolve} from 'path'

export default defineConfig({
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'PrimeGeneric',
            formats: ['es'],
            fileName: 'prime-generic'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [vue(),
        dts({
            include: ['lib'],
            insertTypesEntry: true,
            rollupTypes: true,
        }),],
})

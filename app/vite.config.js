
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.API_KEYY=': JSON.stringify(env.API_KEYY),
            'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
            // If you want to exposes all env variables, which is not recommended
            // 'process.env': env
        },plugins: [react()]
    };
});

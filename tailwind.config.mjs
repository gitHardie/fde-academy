/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: { extend: { colors: { ink:'#0B0B14',surface:'#161B26',paper:'#F5F7FA',amber:'#FF7A29',cyan:'#2DD4FF',muted:'#8A93A6' }, fontFamily: { heading:['"Space Grotesk"','sans-serif'], body:['"Noto Sans SC"','sans-serif'] } } },
  plugins: [],
};
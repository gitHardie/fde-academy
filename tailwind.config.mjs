/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E1A',
        surface: '#111827',
        paper: '#F5F7FA',
        amber: '#FF7A29',
        cyan: '#2DD4FF',
        muted: '#8A93A6'
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Noto Sans SC"', 'sans-serif']
      }
    }
  },
  plugins: [],
};

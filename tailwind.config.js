import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
 },
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#191919",
          },
        },
      },
    }),
  ],
}

// corePlugins: {
//   preflight: false,
// },
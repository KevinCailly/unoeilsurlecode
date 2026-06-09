/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           "var(--bg)",
        surface:      "var(--surface)",
        text:         "var(--text)",
        primary:      "var(--primary)",
        secondary:    "var(--secondary)",
        muted:        "var(--muted)",
        orange: {
          DEFAULT: "var(--orange)",
          bg:      "var(--orange-bg)",
          text:    "var(--orange-text)",
        },
        indigo: {
          DEFAULT: "var(--indigo)",
          bg:      "var(--indigo-bg)",
          text:    "var(--indigo-text)",
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}

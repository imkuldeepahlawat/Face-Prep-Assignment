/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {},
=======
    extend: {
      colors: {
        'tPrimary': '#082f49',
      },
    },
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3
  },
  plugins: [],
}
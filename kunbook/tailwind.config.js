module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kunbook-primary': '#4A90E2',
        'kunbook-secondary': '#F5A623',
        'kunbook-background': '#F4F4F4',
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html", // Include index.html if needed
    ],
    theme: {
      extend: {
        colors: {
          customBlue: '#1E40AF',
        },
        spacing: {
          128: '32rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // Optional plugin for forms
    ],
  }
  
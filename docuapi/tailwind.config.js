module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this path matches the files where Tailwind classes are used
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/actions/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css", // Include your CSS file

    // Include components if necessary
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        // Add other color variables similarly
      }
    }
  }
}
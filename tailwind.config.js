module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "#fefdf5", 
		  primary: "#334155", 
		  secondary: "#64748b", 
		  accent: "#e6f7f0", 
		  buttonPrimary: "#4f46e5", 
		  
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  business: "#fefdf5",
		  trusted: "#e6f7f0", 
		  feature1: "#FBDEE5", 
		  feature2: "#CCEFF6",
		  feature3: "#F9EB71", 
		},
		borderRadius: {
		  lg: "1.5rem", 
		  featureCard: "1rem", 
		  trustedCard: "0.75rem",
		  md: "calc(var(--radius) - 2px)", 
		  sm: "calc(var(--radius) - 4px)", 
		},
		spacing: {
		  18: "4.5rem", 
		  "business-padding": "3rem 8rem",
		  "feature-padding": "2rem 4rem", 
		  "trusted-padding": "3rem", 
		},
		fontFamily: {
		  body: ["Arial", "Helvetica", "sans-serif"],
		  feature: ["Geist Sans", "Arial", "sans-serif"], 
		},
		screens: {
		  xs: "480px", 
		  sm: "640px", 
		  md: "768px",
		  lg: "1024px", 
		  xl: "1280px", 
		  "2xl": "1536px", 
		},
		animation: {
		  "slide-up": "slideUp 1s ease-out", 
		  "slide-up-delay-1": "slideUp 1s ease-out 0.1s", 
		  "slide-up-delay-2": "slideUp 1s ease-out 0.2s", 
		  "slide-up-delay-3": "slideUp 1s ease-out 0.3s", 
  
		  
		  "slide-left-to-right": "slideLeftToRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)", 
		  "slide-left-to-right-delay-1": "slideLeftToRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s", 
		  "slide-left-to-right-delay-2": "slideLeftToRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.4s", 
		  "slide-left-to-right-delay-3": "slideLeftToRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.6s", 
		  "slide-left-to-right-delay-4": "slideLeftToRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.8s", 
		},
		keyframes: {
		  slideUp: {
			"0%": { transform: "translateY(50%)", opacity: "0" }, 
			"100%": { transform: "translateY(0)", opacity: "1" }, 
		  },
  
		  
		  slideLeftToRight: {
			"0%": { transform: "translateX(-100%)", opacity: "0" }, 
			"100%": { transform: "translateX(0)", opacity: "1" }, 
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")], // Adding animation plugin
  };
  
  
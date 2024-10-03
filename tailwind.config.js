/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",

      md: "412px",

      xmd: "540px",

      slg: "768px",

      lg: "820px",

      xlg: "1024px",

      "xlg-min": {
        raw: "(min-width: 1024px) and (max-height: 1366px)",
      },

      "xlg-max": {
        raw: "(min-width: 1024px) and (max-height:600px)",
      },

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#1C5237",
        secondary: "#D52027",
        background: "#f8fafc",
        textColor: "#0f172a",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        roboto_mono: ["var(--font-roboto-mono)"],
        montserrat: ["var(--font-montserrat)"],
        jost: ["var(--font-jost)"],
      },
      dropShadow: {
        strong: "0 1px 15px #9EC6B2",
        blur: "0 35px 2px #f8fafc",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      backgroundImage: {
        contactUsBanner: "url('/images/contact-banner.jpg')",
        webherobg: "url('/img/homepage.png')",
        mobileherobg: "url('/img/mobile-hero.jpg')",
        building: "url('/img/bg-02.jpg')",
        "bg-03": "url('/img/img-07.jpeg')",
        space: "url('/img/bg-03.jpg')",
      },
      boxShadow: {
        "3xl": "2px 2px 5px 4px #ccc",
        "4xl": "2px 2px 5px 1px #191D1F",
        "5xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "6xl":
          " 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

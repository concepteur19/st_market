import type { Config } from "tailwindcss";

// const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          0: '#2DA5F3',
          1: '#1B6392',
          2: '#2484C2',
          3: '#124261'
        },
        black: {
          0: '#191C1F',
          1: '#5F6C72',
          2: '#475156',
          3: '#F2F4F5',
          4: '#E4E7E9'
        },
        orange: {
          0: '#FA8232',
          1: '#F7E99E',
          2: '#FFE7D6',
          3: '#FFCEAD'
        }
      },
      fontFamily: {
        publicL: ["PublicSans-Light", "light"],
        publicR: ["PublicSans-Regular", "regular"],
        publicSB: ["PublicSans-SemiBold", "semi-bold"],
        publicB: ["PublicSans-Bold", "Bold"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;

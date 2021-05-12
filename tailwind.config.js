module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      DEFAULT: "1rem",
      lg: "13rem",
      full: "50%",
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        transparent: "transparent",
        black: "#0A0A0A",
        white: "#F5F5F5",
        blue: "#5DC5DC",
        /* blue: "#25A9E1" */ orange: "#EB7551",
      },
      textColor: {
        black: "#0A0A0A",
        white: "#EBEBEB",
        ligthGreen: "#00bfa5",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

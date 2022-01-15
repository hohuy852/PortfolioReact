module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10rem",
      },
    },
    extend: {
      colors: {
        header: "#1c1e2e",
        "red-custom": "#ff4a57",
        "color-1": "#1F2235"
      },
      fontSize: {
        "header-1": ["18px", { lineHeight: "26px" }],
        "h2": ["32px", {lineHeight: "38.4px"}]
      },
      height: {
        '5': '5px'
      }
    },
    fontFamily: {
      body: ['"Poppins"', "sans-serif"],
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#202430",
      backgroundLight: "#3A4151",
      "gradient1-color1": "#FF99C3",
      "gradient1-color2": "#FFD162",
      "gradient2-color1": "#F5FFA0",
      "gradient2-color2": "#3EF3E8",
      "gradient3-color1": "#3A4AE4",
      "gradient3-color2": "#3B85E6",
      "gradient3-color3": "#3EE4E8",
      "gradient3-color4": "#3EF3E8",
      textcolor: "#FFFFFF",
      "highlighted-textcolor": "#FBFBFB",
      navigation: "#000000",
      navigationDefault: "#3A4151",
      gradientColorStops: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    fontSize: {
      h1: ["36px", { lineHeight: "54px" }],
      h2: ["24px", { lineHeight: "36px" }],
      h3: ["18px", { lineHeight: "27px" }],
      xs: ["10px", { lineHeight: "11.72px" }],
      sm: ["12px", { lineHeight: "15px" }],
      xl: ["64px", { lineHeight: "78.02px" }],
      ft: ["16px", { lineHeight: "21px" }],
    },

    extend: {
      borderRadius: {
        xs: "20px",
        s: "30px",
        m: "50px"
      },
      fontFamily: {
        poppins: "Poppins"
      },
      dropShadow: {
        'button': '0px 3px 10px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
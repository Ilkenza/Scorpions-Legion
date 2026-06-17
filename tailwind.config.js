/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glcrvena: "#FF3131",
        bgsiva: "#171717",
        scrvena: "#ff4a4a",
        hcrvena: "#9f1C1c",
        yellow: "#fde047",
        bela: "#fff8f8",
        plava: "#499BF8",
        dcrvena: "#ff5858",
        // Osvežena paleta — slojevi tamne pozadine
        bgdark: "#0b0b0f",
        surface: "#15151c",
        surface2: "#1d1d26",
      },
      boxShadow: {
        disc: "inset 0 -3.25em 0 0 #499BF8",
        "glow-red": "0 0 35px -5px rgba(255,49,49,0.45)",
        "glow-blue": "0 0 35px -5px rgba(73,155,248,0.45)",
        "glow-soft": "0 12px 40px -10px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "mb-pocetna": "url('/src/Home/assets/mobile/mbhome.webp')",
        "mb-onama": "url('/src/Home/assets/mobile/mbaboutus.webp')",
        "desk-pocetna": "url('/src/Home/assets/desktop/deskhome.webp')",
        "desk-onama": "url('/src/Home/assets/desktop/deskaboutus.webp')",
        "ilkenza-logo": "url('/src/Home/assets/ilkenza-logo.webp')",
        "nesko-logo": "url('/src/Home/assets/nesko-logo.webp')",
      },
      gridTemplateColumns: {
        10: "repeat(2, minmax(0, .34fr))",
      },
      fontFamily: {
        TitilliumWeb: "Titillium Web, sans-serif",
        display: "Rajdhani, sans-serif",
      },
      keyframes: {
        bounce2: {
          "0%, 100%": {
            transform: "translateY(-50%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        bounce2: "bounce2 1s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

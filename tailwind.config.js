/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        TitilliumWeb: 'Titillium Web, sans-serif'
      },
      keyframes:{
        bounce2:{
          '0%, 100%': { transform: 'translateY(-50%)', animationtimingfunction: 'cubic-bezier(0.8,0,1,1);' },
          '50%': { transform: 'none', animationtimingfunction: 'cubic-bezier(0,0,0.2,1)' }
        }
      },
      animation: {
        bounce2: 'bounce2 1s infinite'
      }
    },
    colors:{
      glcrvena:"#FF3131",
      bgsiva: "#171717",
      scrvena: "#ff4a4a",
      hcrvena:"#9f1C1c",
      yellow: "#fde047",
      bela: "#fff8f8",
      plava: "#499BF8",
      dcrvena: "#ff5858",
    },
    boxShadow:{
      disc: "inset 0 -3.25em 0 0 #499BF8"
    },
    backgroundImage:{
        'mb-pocetna': "url('/src/assets/mobile/mbpocetna.png')",
        'mb-onama': "url('/src/assets/mobile/mbonama.png')",
        'desk-pocetna': "url('/src/assets/desktop/deskpocetna.png')",
        'desk-onama': "url('/src/assets/desktop/deskonama.png')",
        'ilkenza-logo': "url('/src/assets/ilkenza-logo.png')",
        'nesko-logo': "url('/src/assets/nesko-logo.png')"
    }
  },
  plugins: [],
}

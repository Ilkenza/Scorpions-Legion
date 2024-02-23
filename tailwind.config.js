/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '10': 'repeat(2, minmax(0, .34fr));'
      },
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
        'mb-pocetna': "url('/src/Home/assets/mobile/mbhome.png')",
        'mb-onama': "url('/src/Home/assets/mobile/mbaboutus.png')",
        'desk-pocetna': "url('/src/Home/assets/desktop/deskhome.png')",
        'desk-onama': "url('/src/Home/assets/desktop/deskaboutus.png')",
        'ilkenza-logo': "url('/src/Home/assets/ilkenza-logo.png')",
        'nesko-logo': "url('/src/Home/assets/nesko-logo.png')"
    }
  },
  plugins: [],
}

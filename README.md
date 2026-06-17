# Scorpions Legion

Sajt CS2 Discord zajednice **Scorpions Legion** — landing strana sa informacijama o
serveru, vlasnicima i FAQ, plus alat **Team Generator** za nasumično deljenje učesnika
u timove.

🔗 Live: <https://scorpionslegion.netlify.app>

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (rutiranje)
- [Tailwind CSS](https://tailwindcss.com/) (stilovi)
- [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/) (animacije)
- [react-icons](https://react-icons.github.io/react-icons/), [react-scroll](https://www.npmjs.com/package/react-scroll), [react-collapse](https://www.npmjs.com/package/react-collapse)

## Rute

| Putanja          | Opis                                  |
| ---------------- | ------------------------------------- |
| `/`              | Početna strana (O nama, Vlasnici, FAQ)|
| `/teamgenerator` | Generator timova                      |

## Pokretanje

```bash
npm install      # instalacija zavisnosti
npm run dev      # development server na http://localhost:3000
npm run build    # produkcioni build u dist/
npm run preview  # lokalni pregled produkcionog build-a
npm run lint     # ESLint provera
```

## Struktura

```text
src/
├── Home/                 # Landing strana
│   ├── Components/        # Nav, Home, Aboutus, Owners, FAQ, Footer, ...
│   ├── assets/           # slike (logo, pozadine)
│   └── HomeApp.jsx
└── TeamGenerator/        # Generator timova
    ├── Components/        # Navbar, TeamGenerator, Footer
    └── TeamGeneratorApp.jsx
```

## Deploy

Hostuje se na Netlify. `public/_redirects` obezbeđuje SPA fallback (sve rute → `index.html`)
da osvežavanje client-side ruta poput `/teamgenerator` ne vraća 404.

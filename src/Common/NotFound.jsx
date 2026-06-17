import { Link } from "react-router-dom";
import Logo from "../Home/assets/logo.webp";
import usePageMeta from "./usePageMeta";

function NotFound() {
  usePageMeta({ title: "404 - Stranica nije nađena | Scorpions Legion" });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img src={Logo} alt="Scorpions Legion" className="w-24 mb-6" />
      <h1 className="text-[6rem] sm:text-[9rem] font-bold text-glcrvena leading-none glow-text">404</h1>
      <p className="text-dcrvena text-xl sm:text-2xl font-bold mb-2">
        Stranica nije nađena
      </p>
      <p className="text-bela/70 mb-8 max-w-md">
        Stranica koju tražiš ne postoji ili je premeštena.
      </p>
      <Link
        to="/"
        className="border-2 rounded-md text-plava inline-flex items-center px-6 py-3 border-plava text-lg font-bold duration-300 ease-linear hover:shadow-disc hover:text-bela active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plava"
      >
        Nazad na početnu
      </Link>
    </div>
  );
}

export default NotFound;

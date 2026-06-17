import { Link } from "react-router-dom";
import Icons from "../../Home/Components/Icons";
import Links from "../../Home/Components/Links";

const socials = [
  { icon: "discord", url: "https://discord.gg/hcbMShPYJ8" },
  { icon: "instagram", url: "https://www.instagram.com/scorpionslegion" },
  { icon: "steam", url: "https://steamcommunity.com/groups/scorpionslegion" },
  { icon: "tiktok", url: "https://www.tiktok.com/@scorpionslegion" },
];

function Footer() {
  const socialBtn =
    "w-11 h-11 flex items-center justify-center rounded-xl glass text-bela text-xl transition-all duration-300 hover:text-glcrvena hover:border-glcrvena hover:shadow-glow-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glcrvena";

  return (
    <footer className="relative bg-surface/40 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-glcrvena to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-12">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <Links linkov="logo" stil="w-20" />
          <Link
            to="/"
            className="text-bela/70 hover:text-glcrvena transition-colors duration-200 font-display uppercase tracking-wider"
          >
            &larr; Nazad na početnu
          </Link>
        </div>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={socialBtn}
              aria-label={s.icon}
            >
              <Icons ikonice={s.icon} stilovi="" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-bela/50 text-sm text-center">
            Copyright &copy; {new Date().getFullYear()} Scorpions Legion. Sva prava zadržana.
          </p>
          <p className="text-bela/50 text-sm">
            Made by{" "}
            <a
              href="https://linktr.ee/ilkenza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-glcrvena hover:underline"
            >
              korodicilija
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

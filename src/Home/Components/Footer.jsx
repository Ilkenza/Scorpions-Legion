import { Link } from "react-router-dom";
import Icons from "./Icons";
import Links from "./Links";

const socials = [
  { icon: "discord", url: "https://discord.gg/hcbMShPYJ8" },
  { icon: "instagram", url: "https://www.instagram.com/scorpionslegion" },
  { icon: "steam", url: "https://steamcommunity.com/groups/scorpionslegion" },
  { icon: "tiktok", url: "https://www.tiktok.com/@scorpionslegion" },
];

function Footer() {
  const hea = "text-xl text-glcrvena font-bold uppercase tracking-wider mb-4";
  const linkStyle =
    "text-bela/70 inline-flex items-center text-base py-1 cursor-pointer transition-colors duration-200 hover:text-glcrvena";
  const socialBtn =
    "w-11 h-11 flex items-center justify-center rounded-xl glass text-bela text-xl transition-all duration-300 hover:text-glcrvena hover:border-glcrvena hover:shadow-glow-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glcrvena";

  return (
    <footer className="relative bg-surface/40 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-glcrvena to-transparent"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 py-14">
        <div className="flex flex-col items-start gap-4">
          <Links linkov="logo" stil="w-20" />
          <p className="text-bela/60 text-sm max-w-xs">
            Scorpions Legion — CS2 Discord zajednica za igru, druženje i takmičenje.
          </p>
          <div className="flex gap-3 mt-1">
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

        <div className="flex flex-col">
          <h3 className={hea}>Navigacija</h3>
          <Links linkov="pocetna" stil={linkStyle} />
          <Links linkov="onama" stil={linkStyle} />
          <Links linkov="vlasnici" stil={linkStyle} />
          <Links linkov="pravila" stil={linkStyle} />
          <Links linkov="faq" stil={linkStyle} />
        </div>

        <div className="flex flex-col">
          <h3 className={hea}>Zajednica</h3>
          <a
            href="https://discord.gg/hcbMShPYJ8"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <Icons ikonice="discord" stilovi="mr-2" />
            Discord
          </a>
          <Link to="/teamgenerator" className={linkStyle}>
            Team Generator
          </Link>
          <a
            href="https://steamcommunity.com/groups/scorpionslegion"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <Icons ikonice="steam" stilovi="mr-2" />
            Steam grupa
          </a>
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

import Icons from "./Icons";
import Links from "./Links";

function Footer() {
  const hea = "text-2xl text-bela font-bold";
  const LinkStyles =
    "text-bela inline-flex items-center text-lg py-1 cursor-pointer transition-all ease-lenear duration-300 hover:text-glcrvena";
  const IconStyles = "mr-1";
  return (
    <>
      <footer>
        <div className="flex flex-col min-[520px]:flex-row items-center justify-evenly p-10 bg-[#1E1E1E]">
          <Links linkov="logo" stil="w-24" />
          <div className="flex flex-col justify-center my-3">
            <h3 className={hea}>Quick Links</h3>
            <Links linkov="pocetna" stil={LinkStyles} />
            <Links linkov="onama" stil={LinkStyles} />
            <Links linkov="vlasnici" stil={LinkStyles} />
            <Links linkov="faq" stil={LinkStyles} />
          </div>
          <div className="flex flex-col">
            <h3 className={hea}>Social Media</h3>
            <a
              href="https://discord.gg/hcbMShPYJ8"
              target="blank"
              className={LinkStyles}
            >
              <Icons ikonice="discord" stilovi={IconStyles} />
              Discord
            </a>
            <a
              href="https://www.instagram.com/scorpionslegion"
              target="blank"
              className={LinkStyles}
            >
              <Icons ikonice="instagram" stilovi={IconStyles} />
              Instagram
            </a>
            <a
              href="https://steamcommunity.com/groups/scorpionslegion"
              target="blank"
              className={LinkStyles}
            >
              <Icons ikonice="steam" stilovi={IconStyles} />
              Steam Grupa
            </a>
            <a
              href="https://www.tiktok.com/@scorpionslegion"
              target="blank"
              className={LinkStyles}
            >
              <Icons ikonice="tiktok" stilovi={IconStyles} />
              Tiktok
            </a>
          </div>
        </div>
        <div className="bg-[#001111] p-2">
          <h6 className="text-glcrvena font-bold text-xs sm:text-sm text-center">
            Copyright &copy; 2024 Scorpions Legion All Rights Reserved. Made by{" "}
            <a
              href="https://linktr.ee/ilkenza"
              className="text-bela underline hover:text-glcrvena"
            >
              korodicilija
            </a>
          </h6>
        </div>
      </footer>
    </>
  );
}

export default Footer;

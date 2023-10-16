import Icons from "./Icons";
import Links from "./Links";

function Footer() {
  const hea = "text-2xl text-bela font-bold";
  const bod =
    "text-bela inline-flex items-center text-lg py-1 cursor-pointer transition-all ease-lenear duration-300 hover:text-glcrvena";
  const ik = "mr-1";
  return (
    <>
      <footer>
        <div className="flex flex-col min-[520px]:flex-row items-center justify-evenly p-10 bg-[#1E1E1E]">
          <Links linkov="logo" stil="w-32" />
          <div className="flex flex-col justify-center my-3">
            <h3 className={hea}>Quick Links</h3>
            <Links linkov="pocetna" stil={bod} />
            <Links linkov="onama" stil={bod} />
            <Links linkov="vlasnici" stil={bod} />
            <Links linkov="faq" stil={bod} />
          </div>
          <div className="flex flex-col">
            <h3 className={hea}>Social Media</h3>
            <a
              href="https://discord.gg/hcbMShPYJ8"
              target="blank"
              className={bod}
            >
              <Icons ikonice="discord" stilovi={ik} />
              Discord
            </a>
            <a
              href="https://www.instagram.com/scorpionslegion"
              target="blank"
              className={bod}
            >
              <Icons ikonice="instagram" stilovi={ik} />
              Instagram
            </a>
            <a
              href="https://steamcommunity.com/groups/scorpionslegion"
              target="blank"
              className={bod}
            >
              <Icons ikonice="steam" stilovi={ik} />
              Steam Grupa
            </a>
            <a
              href="https://www.tiktok.com/@scorpionslegion"
              target="blank"
              className={bod}
            >
              <Icons ikonice="tiktok" stilovi={ik} />
              Tiktok
            </a>
          </div>
        </div>
        <div className="bg-[#001111] p-2">
          <h6 className="text-glcrvena font-bold text-xs sm:text-sm text-center">
            Copyright &copy; 2023 Scorpions Legion All Rights Reserved. Made by{" "}
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

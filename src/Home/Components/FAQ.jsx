import Aos from "aos";
import { useEffect, useState } from "react";
import FAQitem from "./FAQitem";
import SectionHeader from "../../Common/SectionHeader";

function Faq () {
  const [open, setOpen] = useState(false)
  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }

    setOpen(index)
  }
  useEffect(() => {
    Aos.init({duration:500, 
      easing:"ease-in-out"});
  }, []);
  const data = [
    {
      title: "Kako da vidim sve kanale?",
      desc: 'To mozete uraditi tako sto kliknete na nase ime servera i izace vam padajuci meni i tu kliknete Prikazi sve kanale ili kliknete kanali i uloge onda razgledaj kanale i zapratite kategoriju koju zelite ili kanal.'
    },
    {
      title: "Kakvi rolovi imaju da se uzmu?",
      desc: 'Rolovi koji mogu da se uzmu su igrice, godine, boje, drzave, pol i ako imate cs2 role mozete uzeti cs2 rank, cs2 status i cs2 rating ove sve rankove mozete uzeti u kanali u uloge.'
    },
    {
      title: "Kako da nadjem kanal koji mi treba?",
      desc: 'Ukoliko ne znate da nadjete kanal koji vam treba na serveru postoji server map i tamo ima sve objasnjeno za cega svaki kanal sluzi.'
    },
    {
      title: "Kako da napravimo partnership?",
      desc: 'Da napravite partnership sa nama otvorite tiket za partnership onda morate da imate vise od 100 membera i da ste cs2 server.'
    },
    {
      title: "Kako da se prijavim u staff?",
      desc: 'Da biste se prijavili za staff morate da otvorite tiket za prijavu za staff onda da napisete koliko imate godina, kako biste poboljsali server, da li ste pre bili negde u staff i zasto zelite u staff.'
    }
  ]
  const mid = Math.ceil(data.length / 2);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.map((d) => ({
      "@type": "Question",
      name: d.title,
      acceptedAnswer: { "@type": "Answer", text: d.desc },
    })),
  };
  return (
    <div id="FAQ" className="w-full min-h-screen flex items-center flex-col text-glcrvena py-24 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionHeader eyebrow="Pitanja i odgovori" title="FAQ" />
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {[data.slice(0, mid), data.slice(mid)].map((col, c) => (
          <div key={c} className="flex flex-col gap-4">
            {col.map((item, j) => {
              const index = c === 0 ? j : mid + j;
              return (
                <FAQitem
                  key={index}
                  num={index + 1}
                  open={index === open}
                  title={item.title}
                  desc={item.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq

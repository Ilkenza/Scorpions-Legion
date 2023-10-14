import Aos from "aos";
import { useEffect, useState } from "react";
import FAQitem from "./FAQitem";

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
      desc: 'Rolovi koji mogu da se uzmu su igrice, godine, boje, drzave, pol to sve mozete uzeti u self roles i ako imate cs2 role mozete uzeti cs2 rank, cs2 status i cs2 rating ovo mozete uzeti u cs2 roles.'
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
  return (
    <div id="FAQ" className="bg-cover bg-no-repeat bg-center w-full h-[100vh] flex justify-center items-center flex-col text-glcrvena">
      <h3 className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-bold" data-aos="fade-up">FAQ</h3>
      <div className="h-[0.5rem] w-[9rem] sm:w-[12rem] md:w-[15rem] bg-glcrvena mb-14" data-aos="fade-up"></div>
      <div className="w-[90%] sm:w-[35rem] md:w-[42.5rem]">
        {data.map((data, index) => {
          return <FAQitem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
      })}
      </div>
    </div>
  )
}

export default Faq

/*<div key={i} className="bg-[#1E1E1E] mb-5 p-0 rounded-lg" data-aos="fade-up"
data-aos-delay="30">
<div className="flex items-center justify-between cursor-pointer p-5" onClick={() => toggle(i)}>
  <h2 className="text-4xl font-bold">{item.question}</h2>
  <span className={ico}>{selected === i ? <Icons ikonice="downangle" stilovi={tra}/> : <Icons ikonice="upangle" stilovi={tra}/> }</span>
  </div>
  <div className={selected === i ? show : cont } ><p className={bo} >{item.answer}</p></div>
</div>
*/
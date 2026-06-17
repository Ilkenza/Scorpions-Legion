import Cta from "./Components/CtaBand";
import Faq from "./Components/FAQ";
import Footer from "./Components/Footer";
import Mreze from "./Components/Networks";
import Nav from "./Components/Nav";
import Onama from "./Components/Aboutus";
import Pocetna from "./Components/Home";
import Pravila from "./Components/Rules";
import Vlasnici from "./Components/Owners";
import usePageMeta from "../Common/usePageMeta";

function HomeApp() {
  usePageMeta({
    title: "Scorpions Legion - CS2 Discord Community",
    description:
      "Discord server za CS2 igrace, za igranje, pricanje i druzenje. Self rolovi, ekonomija, giveaway, CS2 rolovi.",
    canonical: "https://scorpionslegion.netlify.app/",
  });
  return (
    <>
      <Nav />
      <Mreze />
      <Pocetna />
      <Onama />
      <Vlasnici />
      <Pravila />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default HomeApp;

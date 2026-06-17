import Navbar from "./Components/Navbar"
import TeamGenerator from "./Components/TeamGenerator"
import Footer from "./Components/Footer"
import usePageMeta from "../Common/usePageMeta"


function TeamGeneratorApp() {
  usePageMeta({
    title: "Team Generator - Scorpions Legion",
    description:
      "Nasumicno podeli ucesnike u timove za CS2 meceve i mikseve. Besplatan generator timova.",
    canonical: "https://scorpionslegion.netlify.app/teamgenerator",
  });
  return (
    <>
      <Navbar/>
      <TeamGenerator/>
      <Footer/>
    </>
  )
}
export default TeamGeneratorApp
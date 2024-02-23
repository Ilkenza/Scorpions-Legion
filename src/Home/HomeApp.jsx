import Faq from "./Components/FAQ"
import Footer from "./Components/Footer"
import Mreze from "./Components/Networks"
import Nav from "./Components/Nav"
import Onama from "./Components/Aboutus"
import Pocetna from "./Components/Home"
import Vlasnici from "./Components/Owners"

function HomeApp() {

  return (
    <>
    <Nav/>
    <Mreze/>
    <Pocetna/>
    <Onama/>
    <Vlasnici/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default HomeApp

import { Link } from "react-scroll";
import PropTypes from "prop-types"
import Logo from "../assets/logo.webp";


const Links = ({ linkov, stil }) => { 
    const linkovi = {
        pocetna: <Link spy={true} smooth={true} offset={-96} activeClass="text-glcrvena" to="Pocetna" className={stil} >Pocetna</Link>,
        onama: <Link spy={true} smooth={true} offset={-96} activeClass="text-glcrvena" to="Onama" className={stil}>O nama</Link>,
        logo: <img src={Logo} alt="logo" className={stil}/>,
        vlasnici: <Link spy={true} smooth={true} offset={-96} activeClass="text-glcrvena" to="Vlasnici" className={stil}>Vlasnici</Link>,
        pravila: <Link spy={true} smooth={true} offset={-96} activeClass="text-glcrvena" to="Pravila" className={stil}>Pravila</Link>,
        partneri: <Link spy={true} smooth={true} offset={-96} activeClass="text-glcrvena" to="Partneri" className={stil}>Partneri</Link>,
        faq: <Link spy={true} smooth={true} offset={-96} activeClass="text-glcrvena" to="FAQ" className={stil}>FAQ</Link>
    }
    return (
        <>
        {linkovi[linkov]}
      </>
    );
  };
  Links.propTypes = {
    linkov: PropTypes.string.isRequired,
    stil: PropTypes.string
  };

export default Links
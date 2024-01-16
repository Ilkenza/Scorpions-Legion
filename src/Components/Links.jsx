import { Link } from "react-scroll";
import PropTypes from "prop-types"
import Logo from "../assets/Logo.png";


const Links = ({ linkov, stil }) => { 
    const linkovi = {
        pocetna: <Link spy={true} smooth={true} to="Pocetna" className={stil} >Pocetna</Link>,
        onama: <Link spy={true} smooth={true} to="Onama" className={stil}>O nama</Link>,
        logo: <img src={Logo} alt="logo" className={stil}/>,
        vlasnici: <Link spy={true} smooth={true} to="Vlasnici" className={stil}>Vlasnici</Link>,
        faq: <Link spy={true} smooth={true} to="FAQ" className={stil}>FAQ</Link>
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
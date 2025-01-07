import logo from "../assets/Sk_logo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { Link } from 'react-router-dom';


const Navbar =() =>{

    const handleLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/senthil-kumar-2519b5255";
      };
    
    const handleGit= () => {
        window.location.href = "https://github.com/Senthilmsd";
    };

    const handleFacebook = () => {
        window.location.href = "https://www.facebook.com/senthil.msd.75";
    };

    const handleInstagram = () => {
        window.location.href = "https://www.instagram.com/senthilmsd_/";
    };
    return(
    <div>
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="" />

            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl mr-20">
                <FaLinkedin onClick={handleLinkedIn}/>   
                <FaGithub onClick={handleGit}/>
                <FaFacebook onClick={handleFacebook}/>
                <FaInstagram onClick={handleInstagram}/>
            </div>
        </nav>
    </div>
    )
    
}

export default Navbar;
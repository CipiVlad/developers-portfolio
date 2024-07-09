import { IconBar } from '../model/models'
import { IoLogoGithub } from "react-icons/io5";
import { PiDevToLogoFill } from "react-icons/pi";
import { SiFrontendmentor } from "react-icons/si";

const Navbar = () => {
    const { github, devto, frontendMentor } = IconBar;

    // styling icons in navbar
    const styleIcons = {
        width: "25px",
        height: "25px",
        color: "white",
        margin: "0 5px",
    }
    return (
        <nav>
            <h1>cipivlad</h1>
            <div className="icons">
                <a href={github} target="_blank">
                    <IoLogoGithub
                        style={styleIcons}
                    />
                </a>

                <a href={devto} target="_blank">
                    <PiDevToLogoFill
                        style={styleIcons}
                    />
                </a>

                <a href={frontendMentor} target="_blank">
                    <SiFrontendmentor
                        style={styleIcons}
                    />
                </a>
            </div>
        </nav>
    )
}
export default Navbar
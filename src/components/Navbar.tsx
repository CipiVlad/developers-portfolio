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
            <div>
                <a href="#">
                    <h1>cipivlad</h1>
                </a>
            </div>

            <div>
                <a href={github}>
                    <IoLogoGithub
                        style={styleIcons}
                    />
                </a>

                <a href={devto}>
                    <PiDevToLogoFill
                        style={styleIcons}
                    />
                </a>

                <a href={frontendMentor}>
                    <SiFrontendmentor
                        style={styleIcons}
                    />
                </a>
            </div>
        </nav>
    )
}
export default Navbar
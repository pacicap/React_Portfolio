import logo from "../assets/PaciliaLogoW2.png"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { Link } from "react-scroll"


const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-1 fixed top-0 left-0 w-full bg-neutral-950 bg-opacity-90 shadow-lg">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-20" src={logo} alt="logo"></img>
        </a> 
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <ul className="flex list-none">
          <li>
              <Link
                to="about"
                smooth={true}
                activeClass="text-yellow-600"
                duration={500}
                className="cursor-pointer p-2 text-sm text-neutral-300 hover:text-cyan-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="technologies"
                smooth={true}
                activeClass="text-yellow-600"
                duration={500}
                className="cursor-pointer p-2 text-sm text-neutral-300 hover:text-cyan-400"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                activeClass="text-yellow-600"
                duration={500}
                className="cursor-pointer p-2 text-sm text-neutral-300 hover:text-cyan-400"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                activeClass="text-yellow-600"
                duration={500}
                className="cursor-pointer p-2 text-sm text-neutral-300 hover:text-cyan-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                activeClass="text-yellow-600"
                duration={500}
                className="cursor-pointer p-2 text-sm text-neutral-300 hover:text-cyan-400"
              >
                Contact
              </Link>
            </li>
          </ul>

        <a href="https://www.linkedin.com/in/pacilia-abanda-437194122/">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com/pacicap">
          <FaGithub></FaGithub>
        </a>      
      </div>
    </nav>
  ) 
}

export default Navbar
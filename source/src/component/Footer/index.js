import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle, FcRating } from "react-icons/fc";
import "./style.scss";
function Footer() {
    return(
        <>
        <ul className="Footer">
            <li><a href="https://www.facebook.com/"><FcGoogle /></a></li>
            <li><a href="https://www.facebook.com/"><FaGithub /></a></li>
            <li><a href="https://www.facebook.com/"><FaLinkedinIn /></a></li>
            <li><a href="https://www.facebook.com/"><FcRating /></a></li>
        </ul>
        </>
    )
}
export default Footer;
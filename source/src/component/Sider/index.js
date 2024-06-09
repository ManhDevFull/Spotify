import { FaHome } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { GiWolfHead } from "react-icons/gi";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import "./style.scss";
import Library from "./Library";
import Follow from "./Follow";
function Sider() {
    return <>
        <section className="sider">
            <div>
                <NavLink id="logo" to="/"><GiWolfHead id="imgLogo" /><p>Chill.mp3</p></NavLink>
            </div>
            <nav className="sider__menu">
                <ul>
                    <li>
                        <NavLink to="/"><i className='list'><FaHome /></i>Trang chủ</NavLink>
                    </li>
                    <li>
                    <NavLink to="history"><i className='list'><LiaCompactDiscSolid /></i>Lịch sử</NavLink>
                    </li>
                    <li>
                        <NavLink to="alllibrary"><i className='list'><BiLibrary /></i>Thư viện MP3</NavLink>
                    </li>
                </ul>
                <Library />
                <Follow />
            </nav>
        </section>
    </>
}

export default Sider;


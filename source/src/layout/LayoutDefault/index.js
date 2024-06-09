import Sider from "../../component/Sider/index";
// import { Outlet } from "react-router-dom";
import Main from "../../component/Main/index";
import Play from "../../component/Play/index";
import Footer from "../../component/Footer/index";
function LayoutDefault() {
    return (
        <>
            <Sider />
            <Main />
            <Play />
            <Footer />
        </>
    )
}
export default LayoutDefault;
import Search from "./Search";
import { Outlet } from "react-router-dom";
import "../Main/style1.scss";
function Main() {
    return (
        <>
            <main>
                <Search />
                <section className="main1__song">
                    <Outlet />
                   
                </section>
            </main>
        </>
    )
}
export default Main;
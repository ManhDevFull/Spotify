import { SlUserFollowing } from "react-icons/sl"
import { Link } from "react-router-dom"
function Follow() {
    const value = sessionStorage.getItem('stateLogin')

    return (
        <>
            {value ? <div className="none">
                <h4>Đang theo dõi</h4>
                <ul className="follow">
                    <li>
                        <Link href="https://zingmp3.vn/">
                            <div>
                                <img src="https://imgs.vietnamnet.vn/Images/2017/05/11/11/20170511115324-1.jpg" alt="Sơn Tùng MT-P" />
                                <h4>Sơn Tùng MT-P</h4>
                                <button><SlUserFollowing /></button>
                            </div>
                        </Link>
                    </li>

                </ul></div> :
                <></>}
        </>
    )
}
export default Follow;
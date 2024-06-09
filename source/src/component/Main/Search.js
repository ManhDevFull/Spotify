import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Login from "../login";
import { stateLogin } from "../../actions/login";

import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
function Search() {
    const [a,b] = useState(false)
    const handleA =()=>{
        b(!a)
    }
    const dispatch = useDispatch()
    const stlogin = useSelector(state => state.reducerLogin)
    const value = sessionStorage.getItem('stateLogin')
    const id = sessionStorage.getItem('id')
    const handleX = () => {
        sessionStorage.clear()
        window.location.reload()
    }
    const [data,setData] =useState([])
    useEffect(()=>{
            const fetchApi = async () => {
            fetch(`http://localhost:3000/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        setData(data)
                    })
            }
            fetchApi()
        }, [id])
        console.log(data)
    return (
        <>
            <div className="search">
                <form>
                    <input id="search" type="text" placeholder="Tìm kiếm..." />
                    <button><FaSearchengin /></button>
                </form>
                {value ?
                    <>
                        <div className="User">
                            <img src={data.avata} alt={data.name} />
                            <h3>{data.name}</h3>
                            <div>
                                <div><MdOutlineArrowDropDown className="signOut" onClick={handleA} /></div>
                                {a ?
                                <ul>
                                    <li>Trang cá nhân</li>
                                    <li onClick={handleX}>Đăng xuất</li>
                                </ul>:
                                <></>}
                            </div>
                        </div>
                    </> :
                    <button id="login" onClick={() => { dispatch(stateLogin("login")) }}>Đăng nhập</button>
                }
            </div>

            {stlogin && <Login />}

        </>
    )
}
export default Search;
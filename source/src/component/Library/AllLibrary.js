import { BsMusicNoteList } from "react-icons/bs"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setNewL } from "../../actions/setNewL"
import { Outlet, Link } from "react-router-dom"
import { TbHttpDelete } from "react-icons/tb"
import { RiDeleteBin6Line } from "react-icons/ri"
import "./style.scss";
function AllLibrary() {


    const [data, setData] = useState([])
    const value = sessionStorage.getItem('stateLogin')
    const stateNew = useSelector(state => state.setNewLib)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchApi = async () => {
            fetch("http://localhost:3000/library")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }
        fetchApi()
    }, [stateNew])
    const handleSet = (item) => {
        const del = () => {
            fetch(`http://localhost:3000/library/${item.id}`, {
                method: "DELETE",
            })
            dispatch(setNewL("NEW"))
        }
        del()
    }
    return (
        <>
            {value ? <>
                <div className="All">
                    <h1>Tất cả thư viện của bạn</h1>
                    <div className="All__Library">
                        {data.map(item => (
                            <Link className="All__item" key={item.id} to={"/alllibrary/" + item.id}>
                                <img src="https://tutientruyen5.xyz/app/manga/uploads/covers/de-tu-tu-luyen-con-ta-thi-luoi-bieng.jpg" alt="Ảnh" />
                                <p>{item.number} Bài hát<BsMusicNoteList /></p>
                                <div>
                                    <img src="https://tutientruyen5.xyz/app/manga/uploads/covers/de-tu-tu-luyen-con-ta-thi-luoi-bieng.jpg" alt="Ảnh" />
                                    <h4>{item.name}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <details className="Delete">
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                {item.name === "Nhạc yêu thích" || item.name === "Nhạc tải xuống" ? <></> :
                                    <RiDeleteBin6Line onClick={() => { handleSet(item) }} />}
                            </li>
                        ))}
                    </ul>
                    <summary>
                        <TbHttpDelete />
                    </summary>
                </details>
                <Outlet /></> :
                <div className="Librarys">
                    <h1>Tất cả thư viện của bạn</h1>
                    <p>Vui lòng đăng nhập để xem.</p>
                </div>}
        </>
    )
}
export default AllLibrary;

// <div className="All__item">
//     <img src="https://tutientruyen5.xyz/app/manga/uploads/covers/de-tu-tu-luyen-con-ta-thi-luoi-bieng.jpg" alt="Ảnh" />
//     <p>18 Bài hát<BsMusicNoteList /></p>
//     <div>
//         <img src="https://tutientruyen5.xyz/app/manga/uploads/covers/de-tu-tu-luyen-con-ta-thi-luoi-bieng.jpg" alt="Ảnh" />
//         <h4>Name library</h4>
//     </div>
// </div>

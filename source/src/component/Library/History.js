import { FaPlayCircle } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { music } from "../../actions/music";
import "./style.scss";
import { useParams } from "react-router-dom";
function History() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const linkId = useParams()
    const value = sessionStorage.getItem('stateLogin')
    useEffect(() => {
        const fetchApi = async () => {
            fetch("http://localhost:3000/history")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }
        fetchApi()
    }, [linkId])
    return (
        <>{value ? <>
            {data &&
                (<div className="Librarys">
                    <h1>Lịch sử nghe nhạc</h1>
                    <div className="Library">
                        {data.map(item => (
                            <div className="L__item" onClick={() => dispatch(music(item))} key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <div className="L__name">
                                    <div className="L__name--left">
                                        <h3>{item.name}</h3>
                                        <p>{item.author}</p>
                                    </div>
                                    <i><FaPlayCircle /></i>
                                </div>
                                <i><MdOutlinePlayCircle /></i>
                            </div>
                        ))
                        }
                    </div>
                </div>)}</> :
            <div className="Librarys">
                <h1>Lịch sử nghe nhạc</h1>
                <p>Vui lòng đăng nhập để xem.</p>
            </div>}
        </>
    )
}
export default History;
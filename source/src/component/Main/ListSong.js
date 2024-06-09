import { useEffect, useState } from "react"
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { music } from "../../actions/music";

function ListSong(props) {
    const { name, pass } = props
    const dispatch = useDispatch()

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:3000/${pass}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }
        fetchApi()
    }, [pass])
    return (
        <>
            <div className="List">
                <h1>{name}</h1>
                <div className="List__items">
                    {data.map(item => (
                        <div className="List__item" onClick={()=> dispatch(music(item))} key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div className="List__name">
                                <div className="List__name--left">
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
            </div>

        </>
    )
}
export default ListSong;
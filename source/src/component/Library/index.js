import { FaPlayCircle } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { music } from "../../actions/music";
import "./style.scss";
import { useParams } from "react-router-dom";
function CLibrary() {
    const [data, setData] = useState([])
    const [NameL, setNameL] = useState([])
    const dispatch = useDispatch()
    const linkId = useParams()

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:3000/library/${linkId.id}`)
                .then(res => res.json())
                .then(data => {
                    setData(data.list)
                })
        }
        fetchApi()
    }, [linkId])
    useEffect(() => {
        const nameL = async () => {
            fetch("http://localhost:3000/library")
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        if (item.id === linkId.id) {
                            setNameL(item.name)
                        }
                    });
                })
        }
        nameL()
    }, [linkId])
    return (
        <>
            {data &&
                (<div className="Librarys">
                    <h1>{NameL}</h1>
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
                </div>)
            }
            {data.length === 0 && <p className="titleL">Thư mục chưa có nội dùng nào.</p>}

        </>
    )
}
export default CLibrary;
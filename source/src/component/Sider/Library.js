import { MdOutlineLibraryMusic } from "react-icons/md";
import { TbLibraryPlus } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { setNewL } from "../../actions/setNewL";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
// import { Button } from "antd";
function Library() {
    const dispatch = useDispatch()
    const stateNew = useSelector(state => state.setNewLib)
    const [data, setData] = useState([])
    const [newL, setNew] = useState(true)
    const value = sessionStorage.getItem('stateLogin')
  
    const handleSet1 = () => { setNew(!newL) }
    const handleNew = (e) => {
        e.preventDefault()
        const idItem = `nguyenthanhmanh${Date.now()}`
        const item1 = {
            "id": idItem,
            "img": "",
            "number": "0",
            "name": e.target[0].value,
            "list": []
        }
        fetch("http://localhost:3000/library", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item1)
        })
        dispatch(setNewL("NEW"))
        handleSet1()
    }
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
    return (
        <>
            {value ? <div className="none">
                <h4>Thư viện của bạn</h4>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <NavLink to={"/alllibrary/" + item.id} key={item.id}><i className='list'><MdOutlineLibraryMusic /></i>{item.name}</NavLink>
                        </li>
                    ))}
                    <li onClick={handleSet1}>
                        <p><i className='list'><TbLibraryPlus /></i>Tạo mới thư mục</p>
                    </li>
                    {newL ?
                        "" :
                        <li>
                            <form onSubmit={handleNew}>
                                <input type="text" autoFocus></input>
                                <button id="NewL" style={{ borderRadius: "3px", width: "30px", marginTop: "5px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>Tạo</button>
                            </form>
                        </li>
                    }

                </ul>
            </div> : <></>}
        </>
    )
}
export default Library;
import { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

function Slide() {

    const [datas, setDatas] = useState([])
    // const [sta, setSta] = useState(true)
    useEffect(() => {
        fetch("http://localhost:3000/slide")
            .then(res => res.json())
            .then(data => {
                setDatas(data)
            })
    }, [])
    const handlePrev = () => {
        const a = datas[0]
        datas.shift()
        const b = [...datas, a]
        setDatas(b)
    }
    // if (datas.length !== 0) {
    //     setTimeout(() => {
    //         handlePrev()
    //     }, 5000)
    // }
    const handleNext = () => {
        const a = datas[datas.length - 1]
        datas.pop()
        const b = [a, ...datas]
        setDatas(b)
    }
    return (
        <>
            <div className="Slide">
                <button onClick={handlePrev} className="back"><FcPrevious /></button>
                {datas.map((item, index) => (
                    <div className="Slide__item" key={index}>
                        <img src={item.img} alt={`Ca sĩ ${item.name}`} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
                <button onClick={handleNext} className="next"><FcNext /></button>
            </div>


        </>
    )
}
export default Slide;
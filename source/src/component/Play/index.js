/* eslint-disable react-hooks/exhaustive-deps */
import { MdNavigateNext, MdOutlineReplay10 } from "react-icons/md"; import { FaRandom } from "react-icons/fa"; import { TbRepeat, TbRepeatOff } from "react-icons/tb"; import { GiLoveHowl, GiSettingsKnobs } from "react-icons/gi"; import { IoMdPause, IoMdPlay, IoMdVolumeHigh } from "react-icons/io"; import { GrFormPrevious } from "react-icons/gr"; import { playMusic } from "../../actions/music"; import "./style.scss"; import { useSelector, useDispatch } from "react-redux"; import { useState, useRef, useEffect } from "react";
function Play() {
    const dispatch = useDispatch()
    const [repeat, setRepeat] = useState(true)
    const [time, setTime] = useState(0)
    const [timeN, setTimeN] = useState(0)
    const [like, setLike] = useState(true)
    const [taskbar, setTaskbar] = useState(false)
    const audioRef = useRef(null)

    const stateMusic = useSelector(state => state.reducerMusic)
    useEffect(() => {
        const handleSet1 = () => {
            if (stateMusic.state === true) {
                audioRef.current.play();
            }
            if (stateMusic.state === false) {
                audioRef.current.pause();
            }
        }
        handleSet1()
        audioRef.current.addEventListener('loadedmetadata', () => {
            const duration = audioRef.current.duration
            setTime(duration)
            audioRef.current.removeEventListener('loadedmetadata', null, false);
        })
        audioRef.current.addEventListener('timeupdate', () => {
            const currentTime = audioRef.current.currentTime
            setTimeN(currentTime)

        })

    }, [stateMusic.state])

    useEffect(() => {
        if (timeN !== 0
            && time === timeN
            && repeat === true) {
            dispatch(playMusic("SET_PLAY"))
        }
    }, [timeN])


    const handleSet2 = () => { setTaskbar(!taskbar) }
    const handleSet3 = () => {
        setRepeat(!repeat)
    }
    const handleLike = () => { setLike(!like) }
    const handleTime = (e) => {
        const currentTime = e.target.value
        audioRef.current.currentTime = currentTime
    }

    return (
        <>
            <audio ref={audioRef} src={stateMusic.mp.mp3} id="Audio" loop={!repeat} controls> {/* <source ref={linkMu} src="https://a128-z3.zmdcdn.me/ce6a16298529462b9a69048a4d52072d?authen=exp=1716173036~acl=/ce6a16298529462b9a69048a4d52072d/*~hmac=297f49ad3649fbc344d0e0c214346d7b" type="audio/mpeg" /> */}
            </audio>
            {
                taskbar ?
                    <section className="Play1">

                        <img src={stateMusic.mp.img} alt="Ảnh" />
                        <div className="status" onClick={() => { dispatch(playMusic("SET_PLAY")) }}> {stateMusic.state ? <IoMdPause /> : <IoMdPlay />}</div>
                        <div className="clicK" onClick={handleSet2}><MdNavigateNext /></div>
                    </section>
                    :
                    <section className="Play2">
                        <img src={stateMusic.mp.img} alt="Ảnh" />
                        {/* Phần tên bài hát */}
                        <div className="Play2__name">
                            <h3>{stateMusic.mp.name}</h3>
                            <p>{stateMusic.mp.author}</p>
                        </div>
                        {/* Phần lựa chọn  */}
                        <div className="Play2__lis">
                            <div><FaRandom /></div>
                            <div><MdOutlineReplay10 /></div>
                            <div onClick={() => { dispatch(playMusic("SET_PLAY")) }}> {stateMusic.state ? <IoMdPause /> : <IoMdPlay />}</div>
                            <div><MdOutlineReplay10 /></div>
                            <div onClick={handleSet3}> {repeat ? <TbRepeatOff /> : <TbRepeat />}</div>
                        </div>
                        {/* Phần thời gian phát  */}
                        <div className="Play2__time">
                            <time>{String(Math.floor(timeN / 60)).padStart(2, '0')}:{String(Math.floor(timeN % 60)).padStart(2, '0')}</time>
                            <input type="range" min={0} max={time} value={timeN} onInput={handleTime} />
                            <time>{String(Math.floor(time / 60)).padStart(2, '0')}:{String(Math.floor(time % 60)).padStart(2, '0')}</time>
                        </div>
                        {/* Phần setting và volum  */}
                        <div className="Play2__setting">
                            <GiLoveHowl className={like && "likE"} onClick={handleLike} />
                            <IoMdVolumeHigh />
                            <GiSettingsKnobs />
                        </div>
                        <div className="clicK" onClick={handleSet2}><GrFormPrevious /></div>


                    </section>
            }

        </>
    )
}
export default Play;


const setHistory = (mu) => {
    fetch("http://localhost:3000/history", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mu)
    })
}
// const Time = (mp3)=>{
//  getDurationFromMP3(mp3)
//   .then((duration) => {
//     console.log(`Song duration: ${duration} seconds`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }
const reducerMusic = (state = {
    state: false,
    type: "",
    mp: {
        time:"2:30",
        author: "Sơn Tùng MT-P",
        name: "Chúng ta không thuộc về nhau",
        img: "https://cuoikitkw.vercel.app/image/remix1.jpg",
        mp3: "https://a128-z3.zmdcdn.me/ce6a16298529462b9a69048a4d52072d?authen=exp=1717430050~acl=/ce6a16298529462b9a69048a4d52072d/*~hmac=e710e8db5b0510149c195264e5a70f20"
    }
}, action) => {

    switch (action.type) {
        case "PLAY_MUSIC":
            setHistory(action.item)
            // Time(action.item.mp.pm3)
            return {
                ...state,
                state: action.state,
                type: "",
                mp: action.item
            }
        case "SET_PLAY":
            return {
                ...state,
                state: !state.state,
                type: "",
            }
        default:
            return state
    }
}
export default reducerMusic;
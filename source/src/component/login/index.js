import {  useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { stateLogin } from "../../actions/login";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
function Login() {
    const dispatch = useDispatch()
    const [stLogin, setStLogin] = useState(true)
    const handleSet1 = () => { setStLogin(!stLogin) }
    const [user, setUser] = useState([])
    const vLogin = useSelector(state => state.reducerTestLogin)
    console.log(vLogin)
        useEffect(() => {
            const callData = () => {
                fetch("http://localhost:3000/users")
                    .then(res => res.json())
                    .then(data =>
                        setUser(data))
            }
            callData()
        }, [])
        console.log(user)
 


    const handlLogin = (e) => {
        e.preventDefault()
        user.forEach(item => {
            if(item.email === e.target[0].value  && item.pass === e.target[1].value){
                sessionStorage.setItem('stateLogin', true)
                sessionStorage.setItem('id', item.id)
                dispatch(stateLogin("login"))
                dispatch(stateLogin("PASS"))
                window.location.reload()
            }
            else{
                alert("You false")
            }
        })
    }
    return (
        <>

            {stLogin ?

                /*--------Đăng nhập---------*/
                <section className="Login">
                    <h1>Đăng nhập</h1>
                    <button className="x" onClick={() => {dispatch(stateLogin("login"))}}>< IoClose /> Close</button>
                    <form onSubmit={handlLogin}>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input id="email" name="email" type="email" />
                        </p>
                        <p>
                            <label htmlFor="password">Password:</label>
                            <input id="password" name="password" type="password" />
                        </p>
                        <p>

                            <input type="checkbox" id="savelg" /><label htmlFor="savelg">Duy trì đăng nhập
                            </label>
                        </p>
                        <button>Đăng nhập</button>
                    </form>
                    <button onClick={handleSet1}>Đăng ký</button>
                </section> :

                /*--------Đăng ký---------*/
                <section className="Signup">
                    <h1>Đăng ký</h1>
                    <button className="x" onClick={() => { dispatch(stateLogin("login")) }}>< IoClose /> Close</button>
                    <form action="">
                        <p>
                            <label htmlFor="nameuser">Name:</label>
                            <input id="nameuser" name="nameuser" type="text" />
                        </p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input id="email" name="email" type="email" />
                        </p>
                        <p>
                            <label htmlFor="password">Password:</label>
                            <input id="password" name="password" type="password" />
                        </p>

                        <button>Đăng nhập</button>
                    </form>
                    <button onClick={handleSet1}>Đăng ký</button>
                </section>
            }
        </>
    )
}
export default Login;
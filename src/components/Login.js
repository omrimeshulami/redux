import {login, clear} from "../features/user";
import {changeColor} from "../features/color";
import {useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
const Login = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [color, setColor] = useState(useSelector((state)=>state.color.value))
    const stateColor = useSelector((state)=> state.color.value)
    console.log(color)
    useEffect(() => dispatch(login({name: "nameMissing", age: "ageMissing", email: "emailMissing"})))
    const dispatch = useDispatch()
    return (
        <div>
            <p style={{color:stateColor}}> name:<input type="text" onChange={(e) => setName(e.target.value)}/></p>
            <p style={{color:stateColor}}> age:<input type="text" onChange={(e) => setAge(e.target.value)}/></p>
            <p style={{color:stateColor}}> email:<input type="text" onChange={(e) => setEmail(e.target.value)}/></p>
            <p style={{color:stateColor}}> color:<input type="text" onChange={(e) => setColor(e.target.value)}/></p>

            <button onClick={() => dispatch(changeColor(color))}>change color</button>
            <button onClick={() => dispatch(login({name: name, age: age, email: email}))}>Login</button>
            <button onClick={() => dispatch(clear())}>Logout</button>



        </div>
    )
}
export default Login
import {useSelector} from "react-redux";

const Profile = () =>{
    const user = useSelector((state)=>state.user.value)
    const color = useSelector((state)=> state.color.value)
    console.log(color)
    return(
        <div>
            <h1 style={{color:color}} >Profile Page</h1>
            <p style={{color:color}}>Name:{user.name}</p>
            <p style={{color:color}}>Age:{user.age}</p>
            <p style={{color:color}}>Email:{user.email}</p>

        </div>
    )
}
export default Profile
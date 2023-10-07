import { useNavigate } from "react-router-dom"
import { useAuth } from "../provider/authProvider"



const Logout = ()=>{
    const {setToken} = useAuth()
    const navigate = useNavigate()

    const handeLogout = ()=>{
   setToken()
   navigate("/", {replace:true})

    }

   setTimeout(()=>{
     handeLogout()
    
   }, 3 * 1000 )


     return   <>Logout page</>


}


export default Logout
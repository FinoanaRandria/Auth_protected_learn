import { useNavigate } from "react-router-dom"
import { useAuth } from "../provider/authProvider"




const Login = ()=>{
  const  {setToken} = useAuth()
  const navigate = useNavigate()

  const handleLogin = ()=>{
    setToken("this is a test token")
       navigate("/", {replace:true})
  };
 
    <div>login</div>


  setTimeout(()=>{
       handleLogin()

  }, 3 * 1000)

}

export default Login;
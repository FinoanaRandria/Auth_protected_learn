import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";


 

const AuthContext = createContext()



const AuthProvider = ({children})=>{

}

const [token,setToken_] = useState(localStorage.getItem("token"));

const setToken = (newtoken) =>{

    setToken_(newtoken)

}



useEffect(()=>{
  if(token){
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    localStorage.setItem('token',token)
  }else{

    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem('token')
  }

},[token])

const contextValue = useMemo() a
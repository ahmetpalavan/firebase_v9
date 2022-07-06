import { useState } from "react";
import { auth } from "../firebase/config";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {useAuthContext} from "../hooks/useAuthContext"
export const useLogin=()=>{
    
    const [error, setError] = useState(null);
    const {dispatch}=useAuthContext()
    const login=(email,password)=>{
        setError(null);
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            // console.log('Kullanıcı Giriş Yaptı',res.user);
            dispatch({type:'LOGIN',payload:res.user})
        })
        .catch((err)=>{
            setError(err.message)
        })
    }
        return{error,login}
}

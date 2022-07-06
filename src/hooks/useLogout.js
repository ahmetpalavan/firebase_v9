import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";
export const useLogout=()=>{
    const {dispatch}=useAuthContext()
    const logout=()=>{
        signOut(auth)
        .then(()=>{
            // console.log('Çıkış yapıldı');
            dispatch({type:'LOGOUT'})
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return {logout}
}
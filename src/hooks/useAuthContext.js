import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext=()=>{
    const context=useContext(AuthContext);


    if (!context) {
        throw Error('Bir Hata Oluştu')
    }
    return context
}
import { useEffect,useState,useRef } from "react";

import {db} from '../firebase/config'
import {collection,onSnapshot,query,where} from 'firebase/firestore'

export const useCollection=(col,_q)=>{
    const [documents, setDocuments] = useState(null)
    const q=useRef(_q).current;
    useEffect(()=>{
        let ref=collection(db,col);
        if(q){
            ref=query(ref,where(...q))
        }
        const unsub= onSnapshot(ref,(snapshot)=>{
            let result=[];
            snapshot.docs.forEach(doc=>{
                result.push({id:doc.id, ...doc.data()})
            })
                setDocuments(result)
        },err=>{
            console.log(err.message);
        })
        return()=>unsub();
    },[col,q])
    
        return{documents}
}
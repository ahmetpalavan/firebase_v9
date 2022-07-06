import { useState } from 'react'
import {db} from '../firebase/config'
import {collection,addDoc} from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'
export default function BookForm() {
const [newBook, setNewBook] = useState('')
const {user}=useAuthContext()

const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(newBook)
    const ref=collection(db,'books')
    await addDoc(ref,{
        title:newBook,
        uid:user.uid
    })
    setNewBook('')
}

return (
    <form onSubmit={handleSubmit}>
    <label>
        <span>Yeni Kitap Ekle</span>
        <input 
        required
        type="text"
        onChange={(e) => setNewBook(e.target.value)}
        value={newBook}
        />
    </label>
    <button>EKLE</button>
    </form>
)
}
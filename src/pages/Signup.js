import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const{error,signup}=useSignup()



const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    signup(email,password)
}
return (
    <div>
    <h2>Üye Ol</h2>
    <form onSubmit={handleSubmit}>
        <label>
        <span>Email Adresiniz:</span>
        <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        </label>
        <label>
        <span>Parola:</span>
        <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        </label>
        <button>Üye Ol</button>
        {error&&<p>{error}</p>}
    </form>
    </div>
)
}
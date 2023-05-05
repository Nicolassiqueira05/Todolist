import { useState } from "react"
import { Link } from "react-router-dom"

const Inputlogin = ({func}) =>{
    const [userValue, setUserValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const HandleChange = {
        user: (e) => setUserValue(e.target.value),
        password: (e) => setPasswordValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        func(userValue, passwordValue)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User" onChange={HandleChange.user}/>
            <input type="password" placeholder="Password" onChange={HandleChange.password}/>
            <button type="submit">login</button>
            <Link to="/register">register</Link>
        </form>
    )
}

export default Inputlogin
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Inputregister = ({func}) =>{

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Confirmpassword, setConfirmpassword] = useState("")

    const HandleChange = {
        Email: (e) => {setEmail(e)},
        Password: (e) => {setPassword(e)},
        ConfirmPassword: (e) => {setConfirmpassword(e)}
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        func(Email, Password, Confirmpassword)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={HandleChange.Email}/>
            <input type="text" placeholder="Password" onChange={HandleChange.Password}/>
            <input type="text" placeholder="Confirm password" onChange={HandleChange.ConfirmPassword}/>
            <button type="submit">Register</button>
            <Link to="/">Login</Link>
        </form>
    )
}
export default Inputregister
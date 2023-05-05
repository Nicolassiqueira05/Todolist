import { useState } from "react"

const Inputitem = (func) =>{
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = () =>{
        func(inputValue)
    }

    return(
        <form id="Inputitem" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} id="Input"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default Inputitem
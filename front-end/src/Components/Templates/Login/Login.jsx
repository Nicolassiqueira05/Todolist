import React from 'react'
import { useNavigate } from 'react-router-dom'
import Inputlogin from '../../Organisms/Inputlogin/Inputlogin'

import login from '../../../Apis/login'

const Login = () =>{
    const navigate = useNavigate()
    const handleLogin = async (email, password) =>{
        const autorized = await login(email, password)
        if (autorized == true){
            navigate("/main")
        }
    }
    return(
        <div id='Login'>
            <Inputlogin func={handleLogin}/>
        </div>
    )
}

export default Login
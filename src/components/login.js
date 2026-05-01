import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState ({username: '', password: ''})
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.username === 'a' && formData.password === 'a'){
         localStorage.setItem("isLogin", true);
         navigate('/reqres');
        }   else {
            alert ('Login Gagal')
        }
    }

  return (
    <>

    <h1>Login</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
    <label>Username</label>
    <input name='username' value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}/>
    <br/>
    <label>Password</label>
    <input name='password' type='password' value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}/>
    <button type='submit'>GO!</button>
    </form>
    </>
  )
}

export default Login
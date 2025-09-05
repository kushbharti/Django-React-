import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {setIsLoggedIn} = useContext(AuthContext)

  const navigate =useNavigate()


  const handleLogin = async(e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {username, password}
    console.log('User-Detail ===> ',userData);

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
      localStorage.setItem('accessToken: ',response.data.access)
      localStorage.setItem('refreshToken: ', response.data.refresh)
      console.log('Login Successful.')
      navigate('/')
      setIsLoggedIn(true)

    }catch(error){
      console.error('invalide Credentials',error.response.data)
      setError('invalide Credentials;')
    }finally{
      setLoading(false)
    }

  }


  return (
    <>
    
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light text-center mb-4'>Login to Our Portal</h3>
                    <form onSubmit={handleLogin}>

                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                            
                        </div>

                        <div className="mb-3">
                            <input type='password'className='form-control ' placeholder='Set Password' value={password} onChange= {(e) => setPassword(e.target.value)}/>
                          
                        </div>

                        {error && <div className='text-danger'>{error} </div> }

                        {loading ? (
                            <button type='submit' className='btn btn-info d-block mx-auto' disabled>Logging In....</button>
                        ) : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                        )
                        }

                        

                    </form>

                </div>
            </div>
        </div>


    </>
  )
}

export default Login
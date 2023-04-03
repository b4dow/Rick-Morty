import {useState} from 'react'


const Login = ({userData, handleChange, login}) => {

 

  // estado para los errores
  const [ errors, setErrors ] = useState({
    user: "",
    password: "",
  })

  // function para saber las teclas que presiona el usuario
  
  const handleSubmit = (event) => {
    event.preventDefault()
    login()
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">User: </label>
            <input type="text" name="user" value={userData.user} onChange={handleChange} />
            <label htmlFor="">Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login
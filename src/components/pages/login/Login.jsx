import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../partials/Header'
import { LiaEyeSlashSolid, LiaEyeSolid } from 'react-icons/lia';


const Login = () => {

  const [hasValue, setHasValue] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [getEmail, setGetEmail] = React.useState()
  const [getPassword, setGetPassword] = React.useState()
  const navigate = useNavigate();

  let email  ="clarencejake@gmail.com"
  let password ="12345";

  const handleChange = (e) =>
  {
    if(e.target.value !=="")
    {
      setHasValue(true);
      setGetPassword(e.target.value)
    }else
    {
      setHasValue(false);
    }
  } 


  
  
  const handleGetEmail = (e) => setGetEmail(e.target.value)


  const handleShowPassword = () => setShowPassword(!showPassword)
  // console.log(showPassword)


  const handleCheckLogin = () =>
  {
    if((getEmail === email) && (getPassword === password))
    {
        navigate('/home')
    }
    else
    {
      console.log("Error")
    }
  }



  return (
   <>
   <div className="login bg-[url('../../img/bg-login.jpg')] h-screen w-full bg-cover relatve isolate">
    <div className='backdrop h-full w-full absolute top-0 left-0 bg-black/70 z-[-1]'></div>
    <Header isLogin={true}/>

    <div className="form absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="w-[450px] bg-black/70 h-[800px] p-14"><h1 className='text-3xl text-white font-bold mb-8'>Sign Up</h1>
    
    <form action="" className='text-white'>
      <div className="input__wrapper">
        <input type="text" name='email'required onChange={(e) => handleGetEmail(e)}/>
        <label htmlFor="email">Email or Mobile Number</label>
      </div>

      <div className="input__wrapper">
        <input type={showPassword ? "text" : "password"} name='password'required onChange={(e) => handleChange(e)}/>
        <label htmlFor="password">Password</label>

        {hasValue && (<button type='button' className='text-white absolute top-5 right-3 text-lg' onClick={handleShowPassword}>
          
        {showPassword ?  <LiaEyeSlashSolid /> :  <LiaEyeSolid />}
         </button>)}
      </div>

      <button type='submit' className='w-full p-2 rounded-md bg-accent text-white'  onClick={handleCheckLogin}>Sign in</button>
      <span className='block text-center my-3 text-base uppercase'> or </span>
      <button type='submit'className='w-full p-2 rounded-md bg-white/20 text-white' >Use a Sign In Code</button>
      <Link className='block text-center my-3 hover:underline'> Forgot Password</Link>

      <div className='mb-3 flex gap-2'>
        <input type="checkbox" />
        <label htmlFor="">Remember Me</label> 
        </div>
        <p className='mb-5'>New to Netflix? <Link to="#" className='font-bold'>Sign up now.</Link></p>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-600 hover:underline'>Learn more.</Link></p>

    </form>
    </div>
    </div>
   </div>
   </>
  )
}

export default Login
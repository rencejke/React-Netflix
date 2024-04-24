import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../helpers/functions-general'

const Header = ({isLogin}) => {
    return(    
    <header className='header py-5 px-2'>
    <div className='max-w-[1200px] w-full mx-auto px-4'>
      <div className='flex justify-between items-center'>
      <img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148px] h-[40px] object-cover'/>
      
      {!isLogin && (<ul className='flex items-center gap-3'>
        <li><button className='btn'>English</button></li>
        <li><Link className='btn btn-accent' to="Login">Sign Up</Link></li>
      </ul>)}
    </div>
    </div>
</header>
)

}

export default Header
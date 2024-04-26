import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer bg-black text-white  py-16'>
    <div className='max-w-[1200px] mx-auto'>


    <ul className='flex items-center gap-5 text-2xl'>
        <li><FaFacebookF /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaYoutube /></li>
    </ul>

    <div className='grid grid-cols-4'>
        
    <ul className='space-y-4 mt-4 underline'>
            <li><Link>Audio Description</Link></li>
            <li><Link>Investor Relations</Link></li>
            <li><Link>Legal Notices.</Link></li>
            <li><button className='btn'>English</button></li>
        </ul>  

        <ul className='space-y-4 mt-4 underline'>
            <li ><Link>Help Center</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Cookie Preferrences</Link></li>
        </ul>  

        <ul className='space-y-4 mt-4 underline'>
            <li ><Link>Gift Cards</Link></li>
            <li><Link>Terms of Use</Link></li>
            <li><Link>Corporate Information.</Link></li>
        </ul>  

        <ul className='space-y-4 mt-4 underline'>
            <li ><Link>Media Center</Link></li>
            <li><Link>Privacy</Link></li>
            <li><Link>Contact Us</Link></li>
        </ul>  
        </div>
        </div>     
    </div>
  )
}

export default Footer
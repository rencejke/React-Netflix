import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer bg-black text-white  py-16'>
    <div className='max-w-[1200px] mx-auto'>
    <Link className='underline'>Questions? Contact us.</Link>
    <div className='grid grid-cols-4'>
        
    <ul className='space-y-4 mt-4 underline'>
            <li><Link>FAQ</Link></li>
            <li><Link>Investor Relations</Link></li>
            <li><Link>Ways to Watch.</Link></li>
            <li><Link>Corporate Information.</Link></li>
            <li><Link>Only on Netflix.</Link></li>
            <li><button className='btn'>English</button></li>
            <li>Netflix Philippines</li>
        </ul>  

        <ul className='space-y-4 mt-4 underline'>
            <li ><Link>Help Center</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Terms of Use.</Link></li>
            <li><Link>Contact Us.</Link></li>
        </ul>  

        <ul className='space-y-4 mt-4 underline'>
            <li ><Link>Account</Link></li>
            <li><Link>Redeem Gift Cards</Link></li>
            <li><Link>Privacy.</Link></li>
            <li><Link>Speed test.</Link></li>
        </ul>  

        <ul className='space-y-4 mt-4 underline'>
            <li ><Link>Media Center</Link></li>
            <li><Link>Buy Gift Cards</Link></li>
            <li><Link>Cookie Preferences.</Link></li>
            <li><Link>legal Notices.</Link></li>
        </ul>  
        </div>
        </div>     
    </div>
  )
}

export default Footer
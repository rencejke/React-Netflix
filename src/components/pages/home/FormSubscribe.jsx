import React from 'react'
import { PiCaretRight } from 'react-icons/pi'

const FormSubscribe = () => {
  return (
    <form action="" className='flex gap-3 items-center justify-center mt-12'>
            <div className="input__wrapper m-0 w-[450px]">
            <input type="text" name='email'required />
            <label htmlFor="email">Email Address</label>
          </div>
          <button className='rounded-md bg-accent text-white text-2xl p-3 flex gap-3 items-center'>Get Started <PiCaretRight /></button>

            </form>
  )
}

export default FormSubscribe

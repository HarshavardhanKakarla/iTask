import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-indigo-900 text-white py-3 h-[80px]">
        <div className="logo">
            <span className='font-bold text-[36px] mx-8'>iTask</span>
        </div>
    <ul className="flex gap-8 mx-9 my-4">
        <li className='cursor-pointer hover:font-bold text-[24px] transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold text-[24px] transition-all'>Your Task</li>
    </ul>
    </nav>
  )
}

export default Navbar

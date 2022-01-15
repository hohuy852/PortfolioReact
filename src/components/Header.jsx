import React from 'react'

const Header = () => {
    return (
        <nav id='header' className='py-8 bg-header shadow-[#23263a] drop-shadow-sm '>
            <div className='px-12 xl:container flex items-center'>
                <div>
                    <a href="/"> <img src="https://themebing.com/html/amike/assets/images/logo.png" width={110} height={26} className="custom-logo" alt="Amike" /></a>
                </div>
                <div className='hidden xl:block ml-auto text-white'>
                    <ul className='flex gap-x-9 font-medium text-header-1'>
                        <li><a href="/" className='hover:text-red-400'>Home</a></li>
                        <li><a href="/" className='hover:text-red-400'>About</a></li>
                        <li><a href="/" className='hover:text-red-400'>Skill</a></li>
                        <li><a href="/" className='hover:text-red-400'>Portfolio</a></li>
                        <li><a href="/" className='hover:text-red-400'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faRedditAlien, faLinkedinIn, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
    return (
        <section id='banner' className=' py-32 bg-[#23263a] text-white'>
            <div className='px-4 lg:px-12 container'>
                <div className='grid lg:grid-cols-2'>
                    <div className='flex flex-col gap-y-12'>
                        <ul className='flex gap-x-4 items-center md:justify-start justify-center'>
                            <li><a href="/" className='px-4 py-3 rounded-full bg-[#191b29] items-center flex border-2 border-[#ff4a57] hover:bg-[#ff4a57] transition ease-in'><FontAwesomeIcon icon={faFacebookF} color='#fff' className='w-auto h-auto' size='lg' /></a></li>
                            <li><a href="/" className='px-3 py-3 rounded-full bg-[#191b29] items-center flex border-2 border-[#ff4a57] hover:bg-[#ff4a57] transition ease-in'><FontAwesomeIcon icon={faTwitter} color='#fff' className='w-auto h-auto' size='lg' /></a></li>
                            <li><a href="/" className='px-3 py-3 rounded-full bg-[#191b29] items-center flex border-2 border-[#ff4a57] hover:bg-[#ff4a57] transition ease-in'><FontAwesomeIcon icon={faRedditAlien} color='#fff' className='w-auto h-auto' size='lg' /></a></li>
                            <li><a href="/" className='px-3 py-3 rounded-full bg-[#191b29] items-center flex border-2 border-[#ff4a57] hover:bg-[#ff4a57] transition ease-in'><FontAwesomeIcon icon={faLinkedinIn} color='#fff' className='w-auto h-auto' size='lg' /></a></li>
                            <li><a href="/" className='px-3 py-3 rounded-full bg-[#191b29] items-center flex border-2 border-[#ff4a57] hover:bg-[#ff4a57] transition ease-in'><FontAwesomeIcon icon={faDiscord} color='#fff' className='w-auto h-auto' size='lg' /></a></li>
                        </ul>
                        <div className='typer text-center md:text-left'>
                            <h1 className='lg:text-h1 text-h1-res font-bold w-full'>I am Ho Sy Huy</h1>
                        </div>
                        <div>
                            <p className='text-banner font-light text-center md:text-left'>i,m Ho Sy Huy, professional web developer with long time experience in this field​</p>
                        </div>
                        <div className='mx-auto md:mx-0'>
                            <a href="/" className='px-10 py-3 rounded-full border-2 border-[#ff4a57] hover:bg-[#ff4a57] transition ease-in font-semibold'>My portfolio</a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="" alt="Hinh" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner

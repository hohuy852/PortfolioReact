import React, { useEffect } from 'react'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <section id='contact' className='py-32 bg-color-1' >
            <div className='xl:container px-5'>
                <div className='flex justify-center'>
                    <div className='section-title grid justify-items-center'>
                        <span className='text-red-custom uppercase text-base font-medium mb-5'>HAVE ANY QUERY?</span>
                        <h2 className='text-h2 text-white mb-6 font-bold text-center'>QUERY</h2>
                        <p className='title-desc text-white max-w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam magni, consectetur veniam exercitationem cum nostrum voluptatibus officiis, a veritatis maxime. Praesentium error iusto hic possimus inventore? Modi, vel suscipit?</p>
                    </div>
                </div>
                <div className='flex gap-y-20 flex-col pt-11'>
                    <div className='flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 text-white  gap-x-4 justify-center  ' >
                        <div className='flex py-5 gap-x-5 rounded-xl items-center px-8 bg-[#23263a] w-full'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} color='#ff4a57' size='2x' />
                            <div>
                                <span>Locate us</span>
                                <p>King Street, Melbourne Victoria</p>
                            </div>
                        </div>
                        <div className='flex py-5 gap-x-5 rounded-xl items-center px-8 bg-[#23263a]  w-full  '>
                            <FontAwesomeIcon icon={faPhoneAlt} color='#ff4a57' size='2x' />
                            <div>
                                <span>Give us a call</span>
                                <p>Office: +01-2345-6789</p>
                            </div>
                        </div>
                        <div className='flex py-5 gap-x-5 rounded-xl items-center px-8 bg-[#23263a]  w-full '>
                            <FontAwesomeIcon icon={faEnvelope} color='#ff4a57' size='2x' />
                            <div>
                                <span>Get in online</span>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                    <form action="" className='flex gap-y-7 flex-col text-white'>
                        <div className='grid md:grid-cols-2 gap-y-7 md:gap-y-0 gap-x-5'>
                            <div>
                                <input type="text" placeholder='Your Name' className='w-full px-9 bg-[#23263a] py-5 rounded-lg' />
                            </div>
                            <div>
                                <input type="text" placeholder='Your Email' className='w-full px-9 bg-[#23263a] py-5 rounded-lg' />
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder='Your Subject' className='w-full px-9 bg-[#23263a] py-5 rounded-lg' />
                        </div>
                        <div>
                            <textarea rows={5} type="text" placeholder='Your Message' className='w-full px-9 bg-[#23263a] py-5 rounded-lg' />
                        </div>
                        <input type="submit" value="Send Message" className='py-4 px-7 bg-red-custom rounded-xl w-52 cursor-pointer hover:bg' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact

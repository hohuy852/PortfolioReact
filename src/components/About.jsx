import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
const About = () => {
    useEffect(() =>{
        AOS.init()
    },[])
    return (
        <section id='about' className='py-32 bg-[#23263a]' >
            <div className='xl:container px-5'>
                <div className='flex justify-center'>
                    <div className='section-title grid justify-items-center'>
                        <span className='text-red-custom uppercase text-base font-medium mb-5'>About</span>
                        <h2 className='text-h2 text-white mb-6 font-bold text-center'>About Me</h2>
                        <p className='title-desc text-white max-w-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam magni, consectetur veniam exercitationem cum nostrum voluptatibus officiis, a veritatis maxime. Praesentium error iusto hic possimus inventore? Modi, vel suscipit?</p>
                    </div>
                </div>
            </div>
            <div className='xl:container  pt-24 '>
                <div className='grid sm:grid-cols-2 justify-items-center gap-y-10 px-6'>
                    <div className='w-80 h-96 bg-white ' data-aos="fade-right" data-aos-duration="900">
                    </div>
                    <div className='text-white  '  data-aos="fade-left">
                        <h2 className='text-h2 mb-6 font-bold'>Hi There</h2>
                        <div>
                            <p className='mb-3'>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                            <p className='mb-6'>nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-y-4'>
                            <div>
                                <strong><span className='text-red-custom  w-full'>Name:</span></strong>
                                <p>Ho Sy Huy</p>
                            </div>
                            <div>
                                <strong><span className='text-red-custom  w-full'>Email:</span></strong>
                                <p>example@domain.com</p>
                            </div>
                            <div>
                                <strong><span className='text-red-custom  w-full'>Phone:</span></strong>
                                <p>example@domain.com</p>
                            </div>
                            <div>
                                <strong><span className='text-red-custom  w-full'>LinkedIn:</span></strong>
                                <p>hosyhuy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

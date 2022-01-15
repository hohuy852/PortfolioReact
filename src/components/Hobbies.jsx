import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faDiscord, } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faHeadphones, faBook, faPlane } from '@fortawesome/free-solid-svg-icons'
const Hobbies = () => {
    const [hobbies, setHobbies] = useState([
        {
            icon: faGithub,
            title: 'Web Development',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            icon: faGamepad,
            title: 'Gaming',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            icon: faHeadphones,
            title: 'Music',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            icon: faPlane,
            title: 'Travel',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            icon: faBook,
            title: 'Book',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            icon: faGithub,
            title: 'None',
            subTitle: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },

    ])
    const [iconColor, setIconColor] = useState('#dc3545')
    function handleChangColor(e) {
        return e.target.dataset.info
    }
    return (
        <section id='hobbies' className='py-32 bg-color-1' >
            <div className='xl:container px-5'>
                <div className='flex justify-center'>
                    <div className='section-title grid justify-items-center'>
                        <span className='text-red-custom uppercase text-base font-medium mb-5'>Hobbies</span>
                        <h2 className='text-h2 text-white mb-6 font-bold text-center'>My Hobbies</h2>
                        <p className='title-desc text-white max-w-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam magni, consectetur veniam exercitationem cum nostrum voluptatibus officiis, a veritatis maxime. Praesentium error iusto hic possimus inventore? Modi, vel suscipit?</p>
                    </div>
                </div>
            </div>
            <div className='xl:container pt-24 px-8'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-y-5 gap-y-8 '>
                    {hobbies.map((hobbie, index) => (
                        <div key={index} data-info={hobbie.title} className='flex flex-col text-white px-9 py-12 bg-[#23263a] transition ease-in hover:bg-[#dc3545] rounded-lg group'>
                            <div className='hobbies-icon '>
                                <FontAwesomeIcon icon={hobbie.icon} color={iconColor} size='3x' className='group-hover:text-white group-hover:animate-bounce' />
                            </div>
                            <div className='hobbie-content'>
                                <h5 className='my-8'>{hobbie.title}</h5>
                                <p>{hobbie.subTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Hobbies

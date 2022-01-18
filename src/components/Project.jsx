import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCodeBranch, faStar, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = () => {
    const [data, setData] = useState([
        {
            name: 'Vuetify Shop',
            description: ['This is basic an E-commerce website', 'Using Vuetify as Material Design Framework', 'Using VueJS (Vuex) as front-end framework','Nodejs, MongoDB, Socket communication, etc..'],
            link: 'https://github.com/hohuy852/VuetifyShop',
            demo: '',
        },
        {
            name: 'Vuetify Shop Admin',
            description: ['This is basic an Admin website', 'Using Vuetify as Material Design Framework', 'Using VueJS (Vuex) as front-end framework','Nodejs, MongoDB, Socket communication, etc..'],
            link: 'https://github.com/hohuy852/AdminVuetifyShop',
            demo: '',
        },
        {
            name: 'Watchflix',
            description: ['This is basic an movie website', 'Using TaliwindCSS as CSS Framework', 'Using VueJS (Vuex) as front-end framework','Using AniAPI as external API'],
            link: 'https://github.com/hohuy852/AnimeMovie',
            demo: '',
        },
        {
            name: 'Weather App ',
            description: ['This is basic an weather forecast website', 'Using TaliwindCSS as CSS Framework', 'Using React (Redux) as front-end framework','Using Google News API, OpenWeatherMap API as external API'],
            link: 'https://github.com/hohuy852/WeatherReact',
            demo: '',
        },
        {
            name: 'Vue Portfolio',
            description: ['My first portfolio using Vuetify and Vue'],
            link: 'https://github.com/hohuy852/WeatherReact',
            demo: '',
        },
        {
            name: 'React Portfolio',
            description: ['My second portfolio using TailwindCSS and React'],
            link: 'https://github.com/hohuy852/WeatherReact',
            demo: '',
        },
    ])
    return (
        <section id='hobbies' className='py-32 bg-[#23263a]' >
            <div className='xl:container px-5'>
                <div className='flex justify-center'>
                    <div className='section-title grid justify-items-center'>
                        <span className='text-red-custom uppercase text-base font-medium mb-5'>Projects</span>
                        <h2 className='text-h2 text-white mb-6 font-bold text-center'>Projects Showcase</h2>
                        <p className='title-desc text-white max-w-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam magni, consectetur veniam exercitationem cum nostrum voluptatibus officiis, a veritatis maxime. Praesentium error iusto hic possimus inventore? Modi, vel suscipit?</p>
                    </div>
                </div>
            </div>
            <div className='xl:container pt-14'>
                <div className='flex flex-col w-full'>
                    <div className='flex text-red-custom gap-x-5 justify-center'>
                        <button className='px-5 py-1 border-2 rounded-3xl border-red-custom hover:bg-red-custom hover:text-white'>All Project</button>
                        <button className='px-5 py-1 bg-color-1 rounded-3xl  hover:bg-red-custom text-white'>Vue JS</button>
                        <button className='px-5 py-1 bg-color-1 rounded-3xl  hover:bg-red-custom text-white'>React JS</button>
                        <button className='px-5 py-1 bg-color-1 rounded-3xl  hover:bg-red-custom text-white'>Others</button>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 text-white mt-14 gap-x-5 gap-y-7 px-4 sm:px0'>
                    {
                        data.map((repos, index) => (<div className='bg-color-1 rounded-lg ' key={index}>
                            <div className='grid justify-items-center text-center '>
                                <span className="text-red-custom uppercase text-sm font-medium my-5">1 week ago</span>
                                <h2 className='text-2xl text-white mb-6 font-bold '>{repos.name}</h2>
                                {repos.description.map((des => ( <p className='mb-7 px-3 text-left' >{des}</p>)))}
                                {/* <div className='w-full h-16  rounded-b-lg text-white'>
                                    <div className='flex items-center h-full text-center ' >
                                        <div className='w-full flex  justify-center items-center gap-x-3'>
                                            <div>
                                                <FontAwesomeIcon icon={faEye} />
                                            </div>
                                            <span className='text-xl'>{temp.a}</span>
                                        </div>
                                        <div className='w-full flex  justify-center  items-center gap-x-3'>
                                            <div >
                                                <FontAwesomeIcon icon={faCodeBranch} />
                                            </div>
                                            <span className='text-xl'>5</span>
                                        </div>
                                        <div className='w-full flex  justify-center  items-center gap-x-3'>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <span className='text-xl'>5</span>
                                        </div>
                                    </div>
                                </div>
                                <hr /> */}
                                {/* <div className='w-5/6 grid gap-y-2 pb-8'>
                                    <div className='chart'>
                                        <div className='text-white flex flex-col gap-y-2 w-full'>
                                            <div className='skill relative ' key={index}>
                                                <p className='mb-2 text-left'>ABC</p>
                                                <div style={{ width: '78%' }} className='bg-red-custom relative h-5'>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='chart'>
                                        <div className='text-white flex flex-col gap-y-2 w-full'>
                                            <div className='skill relative ' key={index}>
                                                <p className='mb-2 text-left'>ABC</p>
                                                <div style={{ width: '78%' }} className='bg-red-custom relative h-5'>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='chart'>
                                        <div className='text-white flex flex-col gap-y-2 w-full'> 
                                            <div className='skill relative ' key={index}>
                                                <p className='mb-2 text-left'>ABC</p>
                                                <div style={{ width: '78%' }} className='bg-red-custom relative h-5'>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='grid grid-cols-2 justify-items-center pb-4'>
                                    <a href={repos.link} target="_blank" rel="noopener noreferrer" className='px-1 lg:px-4 py-2 rounded-xl hover:bg-red-custom'>
                                        <div className='flex gap-x-3 items-center'>
                                            <FontAwesomeIcon icon={faGithub} size='2x' />
                                            <span>Source Code</span>
                                        </div>
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer" className='px-8 py-2  rounded-xl hover:bg-red-custom'>
                                        <div className='flex gap-x-3 items-center'>
                                            <FontAwesomeIcon icon={faTerminal} size='2x' />
                                            <span>Demo</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project

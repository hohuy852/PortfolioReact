import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCodeBranch, faStar, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Picture1 from "../assets/Picture1.png"
const Project = () => {
    const [data, setData] = useState([
        {
            name: 'Vuetify Shop',
            description: ['This is basic an E-commerce website', 'Using Vuetify as Material Design Framework', 'Using VueJS (Vuex) as front-end framework', 'Nodejs, MongoDB, Socket communication, etc..'],
            link: 'https://github.com/hohuy852/VuetifyShop',
            demo: '',
            img:'https://d33wubrfki0l68.cloudfront.net/61b16b36c3af65000894eb15/screenshot_2021-12-09-02-36-08-0000.png'
        },
        {
            name: 'Vuetify Shop Admin',
            description: ['This is basic an Admin website', 'Using Vuetify as Material Design Framework', 'Using VueJS (Vuex) as front-end framework', 'Nodejs, MongoDB, Socket communication, etc..'],
            link: 'https://github.com/hohuy852/AdminVuetifyShop',
            demo: '',
            img:'https://d33wubrfki0l68.cloudfront.net/61b086c31ade910007c442ed/screenshot_2021-12-08-10-20-43-0000.png'
        },
        {
            name: 'Watchflix',
            description: ['This is basic an movie website', 'Using TaliwindCSS as CSS Framework', 'Using VueJS (Vuex) as front-end framework', 'Using AniAPI as external API'],
            link: 'https://github.com/hohuy852/AnimeMovie',
            demo: '',
            img: 'https://d33wubrfki0l68.cloudfront.net/61812858250b530007537987/screenshot_2021-11-02-12-01-10-0000.png'
        },
        {
            name: 'Weather App ',
            description: ['This is basic an weather forecast website', 'Using TaliwindCSS as CSS Framework', 'Using React (Redux) as front-end framework', 'Using Google News API, OpenWeatherMap API as external API'],
            link: 'https://github.com/hohuy852/WeatherReact',
            demo: '',
            img:'https://d33wubrfki0l68.cloudfront.net/61dfc78455453c00082a9967/screenshot_2022-01-13-06-33-15-0000.png'
        },
        {
            name: 'Vue Portfolio',
            description: ['My first portfolio using Vuetify and Vue'],
            link: 'https://github.com/hohuy852/WeatherReact',
            demo: '',
            img:'https://d33wubrfki0l68.cloudfront.net/6181301b961be000088649f6/screenshot_2021-11-02-12-34-32-0000.png'
        },
        {
            name: 'React Portfolio',
            description: ['My second portfolio using TailwindCSS and React'],
            link: 'https://github.com/hohuy852/WeatherReact',
            demo: '',
            img:'https://d33wubrfki0l68.cloudfront.net/61e6632aba9b220008ee9c06/screenshot_2022-01-18-06-50-53-0000.png'
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
                    <div className='flex text-red-custom gap-x-5 justify-center flex-wrap gap-y-5'>
                        <button className='px-5 py-1 border-2 rounded-3xl border-red-custom hover:bg-red-custom hover:text-white'>All Project</button>
                        <button className='px-5 py-1 bg-color-1 rounded-3xl  hover:bg-red-custom text-white'>Vue JS</button>
                        <button className='px-5 py-1 bg-color-1 rounded-3xl  hover:bg-red-custom text-white'>React JS</button>
                        <button className='px-5 py-1 bg-color-1 rounded-3xl  hover:bg-red-custom text-white'>Others</button>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 text-white mt-14 gap-x-5 gap-y-7 px-4 sm:px0'>
                    {
                        data.map((repos, index) => (<div className='bg-color-1 rounded-lg flex  flex-col gap-y-6 group' key={index}>
                    
                                <img src={repos.img} alt="" className='rounded-lg  object-contain ' />
                         
                            <h3 className='pl-1'>{repos.name}</h3>
                            <div className='pl-1'>
                                {repos.description.map((des) => (<p> {des} </p>))}
                            </div>
                            <div className='grid grid-cols-2 justify-items-center pb-4 mt-auto'>
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

                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project

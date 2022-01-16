import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'

const Project = () => {
    const [data, setData] = useState(null)
    const temp = {
        a: 1
    }
    useEffect(() => {
        async function getAPI() {
            let response = await axios.get('https://api.github.com/users/hohuy852/repos')
            setData(response.data)
            // console.log(response.data)
        }
        getAPI()
    }, [])
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
                <div className='grid grid-cols-3 text-white mt-14 gap-x-5 gap-y-7'>
                    {
                        data.map((repos, index) => (<div className='bg-color-1 rounded-lg ' key={index}>
                            <div className='grid justify-items-center text-center '>
                                <span className="text-red-custom uppercase text-sm font-medium my-5">1 week ago</span>
                                <h2 className='text-h2 text-white mb-6 font-bold '>{repos.name}</h2>
                                <p className='mb-10 px-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam magni, consectetur veniam exercitationem cum nostrum voluptatibus officiis, a veritatis maxime. Praesentium error iusto hic possimus inventore? Modi, vel suscipit?</p>
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
                                <div className='w-5/6 grid gap-y-6 pb-8'>
                                    <div className='chart'>
                                        <div className='text-white flex flex-col gap-y-8 w-full'>
                                            <div className='skill relative ' key={index}>
                                                <p className='mb-2 text-left'>ABC</p>
                                                <div style={{ width: '78%' }} className='bg-red-custom relative h-5'>
                                                    <span className='skill-percentage right-0 absolute -top-10 border-2 px-3 py-1 rounded-md text-sm'>78%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='chart'>
                                        <div className='text-white flex flex-col gap-y-8 w-full'>
                                            <div className='skill relative ' key={index}>
                                                <p className='mb-2 text-left'>ABC</p>
                                                <div style={{ width: '78%' }} className='bg-red-custom relative h-5'>
                                                    <span className='skill-percentage right-0 absolute -top-10 border-2 px-3 py-1 rounded-md text-sm'>78%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='chart'>
                                        <div className='text-white flex flex-col gap-y-8 w-full'>
                                            <div className='skill relative ' key={index}>
                                                <p className='mb-2 text-left'>ABC</p>
                                                <div style={{ width: '78%' }} className='bg-red-custom relative h-5'>
                                                    <span className='skill-percentage right-0 absolute -top-10 border-2 px-3 py-1 rounded-md text-sm'>78%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

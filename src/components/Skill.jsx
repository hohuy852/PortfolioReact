import React, { useEffect } from 'react'
const Skill = () => {
    const skills = [{
        name: 'Vue JS',
        width: '78%',
    },
    {
        name: 'React JS',
        width: '55%',
    },
    {
        name: 'TailwindCSS',
        width: '62%',
    },
    {
        name: 'HTML & CSS',
        width: '52%',
    }]

    return (
        <section className='py-32 bg-color-1'>
            <div className='xl:container'>
                <div className='grid sm:grid-cols-2 gap-y-5 justify-items-center'>
                    <div className='text-white px-5 wow animate__fadeIn' data-wow-duration="1s"  >
                        <span className='text-red-custom uppercase text-base font-medium mb-5 block'>I,M EXPERT ON</span>
                        <h2 className='text-h2 font-bold mb-6'>
                            Let,s Work Together
                        </h2>
                        <p className='mb-4 max-w-md'>Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                    </div>
                    <div className='text-white flex flex-col gap-y-8 w-5/6'>
                        {skills.map((skill, index) => (<div className='skill relative  wow animate__fadeInUp ' data-wow-duration="0.5s" data-wow-offset="10" data-wow-delay="0.2" key={index}>
                            <p className='mb-2'>{skill.name}</p>
                            <div style={{ width: skill.width }} className=' skill-bar bg-red-custom relative h-5 wow animate__fadeInLeft' data-wow-duration="0.6s" data-wow-delay="0.2">
                                <span className='skill-percentage right-0 absolute -top-10 border-2 px-3 py-1 rounded-md text-sm'>{skill.width}</span>
                            </div>
                        </div>))}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skill

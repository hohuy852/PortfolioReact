import React from 'react'

const Banner = () => {
    return (
        <section id='banner' className='pt-24'>
            <div className='px-12 container'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <ul className='flex'>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">LinkedIn</a></li>
                            <li><a href="/">Reddit</a></li>
                            <li><a href="/">Discord</a></li>
                            <li><a href="/">Github</a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner

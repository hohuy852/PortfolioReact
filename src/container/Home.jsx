import { Header, Banner, About, Project, Skill, Footer,Contact, Hobbies } from '../components'
import React from 'react'

const Home = () => {
    return (
        <div className='font-body'>
            <Header />
            <Banner/>
            <Hobbies/>
            <About/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home

import { Header, Banner, About, Project, Skill, Footer, Hobbies } from '../components'
import React from 'react'

const Home = () => {
    return (
        <div className='font-body'>
            <Header />
            <Hobbies/>
            <About/>
            <Skill/>
            <Project/>
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import StoryHome from '../components/StoryHome'
import Card from '../components/Card'
import Suggestion from '../components/Suggestion'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="flex w-full md:w-[60rem] lg:w-[60rem] mx-auto">
            <div>
                <StoryHome />
                <Card />
            </div>
            <Suggestion />
        </div>
    </div>
  )
}

export default Home
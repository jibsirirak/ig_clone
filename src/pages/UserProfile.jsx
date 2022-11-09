import React from 'react'

import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo'
import Story from '../components/Story'
import Toggle from '../components/Toggle'
import UserPosts from '../components/UserPosts'

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-[60rem] lg:w-[60rem] mx-auto">
        <UserInfo />
        <Story />
        <Toggle />
        <UserPosts />
      </div>
    </>
  )
}

export default UserProfile
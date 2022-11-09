import React from 'react'
import postImg1 from '../assets/img/1.png'
import postImg2 from '../assets/img/2.png'
import postImg3 from '../assets/img/3.png'
import postImg4 from '../assets/img/4.png'
import postImg5 from '../assets/img/5.png'
import postImg6 from '../assets/img/6.png'
import {FaClone, FaPlay} from 'react-icons/fa'

const UserPosts = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:md:grid-cols-3 gap-5'>
        <div className="posts-item">
            <img src={postImg1} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg2} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item relative">
            <FaClone className='absolute top-[15px] right-[15px] text-white text-2xl' />
            <img src={postImg3} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item relative">
            <FaPlay className='absolute top-[15px] right-[15px] text-white text-2xl' />
            <img src={postImg4} className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg5}  className="w-full" alt="user posts" />
        </div>
        <div className="posts-item">
            <img src={postImg6} className="w-full" alt="user posts" />
        </div>
    </div>
  )
}

export default UserPosts
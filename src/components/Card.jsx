import React from 'react'
import Pic from '../assets/img/2.png'
import Pic2 from '../assets/img/main.png'
import {FaEllipsisH,FaHeart,FaRegComment,FaPaperPlane,FaRegBookmark,FaRegSmile} from 'react-icons/fa'

const Card = () => {
  return (
    <div className='w-full md:w-[614px] lg:w-[614px]'>
        <div className="title flex pl-[16px] pt-[9px] pb-[9px] items-center border">
            <div className="profile-pic flex w-[42px] md:w-[42px] md:h-[42px] lg:w-[42px] lg:h-[42px] mr-[16px]  border-2 border-rose-600 rounded-full items-center justify-center ">
                <img src={Pic} className="w-full md:w-[32px] md:h-[32px] lg:w-[32px] lg:h-[32px] rounded-full" />
            </div>
            <p className='text-center font-semibold text-sm'>sirirak atchariyavej</p>
            <div className='flex w-1/4 md:w-3/5 lg:w-3/5' />
            <FaEllipsisH />
        </div>
        <img src={Pic2} className="w-full md:w-[614px] lg:w-[614px]" /> 
        <div className="detail border">
            <div className="symbol flex p-[10px]">
                <div className='flex w-2/4 md:w-1/4 lg:w-1/4 justify-evenly'>
                    <FaHeart className='text-2xl ' />
                    <FaRegComment className='text-2xl'/>
                    <FaPaperPlane className='text-2xl' />
                </div>
                <div className='flex w-3/4 md:w-3/4 lg:w-3/4 justify-end'>
                    <FaRegBookmark className='text-2xl' />
                </div>
            </div>
            <div className="describe p-[16px]">
                <p className='font-semibold text-sm'>1,999,999 likes</p>
                <p className='font-semibold text-sm'>sirirak atchariyavej <span className='font-normal'>Imperdiet sit rhoncus, eleifend tellus auque lectus poteni...</span><a href='#' className='font-normal text-zinc-400'>more</a></p>
                <p className='text-sm text-zinc-400'>View all 1000 comments</p>
                <p className='text-[10px] text-zinc-400'>1 HOURS AGO</p>
            </div>
            <div className="comment flex p-[14px] border items-center">
                <div className='flex w-3/6 md:w-1/4 lg:w-1/4 justify-evenly items-center'>
                    <FaRegSmile />
                    <p className='font-normal text-sm ml-[10px]'>Add a comment...</p>
                </div>
                <div className='flex w-4/6 md:w-3/4 lg:w-3/4 justify-end'>
                    <p className='font-semibold text-sm text-sky-200'>Post</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Card
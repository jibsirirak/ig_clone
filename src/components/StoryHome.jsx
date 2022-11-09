import React from 'react'
import Pic1 from '../assets/img/5.png'
import Pic2 from '../assets/img/2.png'
import Pic3 from '../assets/img/3.png'
import Pic4 from '../assets/img/4.png'
import Pic5 from '../assets/img/5.png'
import Pic6 from '../assets/img/6.png'

const StoryHome = () => {
  return (
    <div className='w-full md:w-[614px] lg:w-[614px] border mt-[30px]'>
        <ul className='flex flex-wrap mt-[18px] ml-[28px]'>
            <ai className='mr-[14px] mb-[9px]'>
                <div className="flex w-[66px] h-[66px]  rounded-full border-4 border-rose-600 justify-center items-center">
                    <img src={Pic2} className="w-[56px] h-[56px] rounded-full border-2 border-white" alt="story img" />
                </div>
                <p className='text-center text-[12px]'>your story</p>
            </ai>
            <ai  className='mr-[14px] mb-[9px]'>
                <div className="flex w-[66px] h-[66px] rounded-full border-4 border-rose-600 justify-center items-center">
                    <img src={Pic1} className="w-[56px] h-[56px] rounded-full border-2 border-white" alt="story img" />
                </div>
                <p className='text-center text-[12px]'>terrylucas</p>
            </ai>
            <ai  className='mr-[14px] mb-[9px]'>
                <div className="flex w-[66px] h-[66px] rounded-full border-4 border-rose-600 justify-center items-center">
                    <img src={Pic3} className="w-[56px] h-[56px] rounded-full border-2 border-white" alt="story img" />
                </div>
                <p className='text-center text-[12px]'>harrypotter</p>
            </ai>
            <ai  className='mr-[14px] mb-[9px]'>
                <div className="flex w-[66px] h-[66px] rounded-full border-4 border-rose-600 justify-center items-center">
                    <img src={Pic4} className="w-[56px] h-[56px] rounded-full border-2 border-white" alt="story img" />
                </div>
                <p className='text-center text-[12px]'>ednamanz</p>
            </ai>
            <ai  className='mr-[14px] mb-[9px]'>
                <div className="flex w-[66px] h-[66px] rounded-full border-4 border-rose-600 justify-center items-center">
                    <img src={Pic5} className="w-[56px] h-[56px] rounded-full border-2 border-white" alt="story img" />
                </div>
                <p className='text-center text-[12px]'>christina</p>
            </ai>
            <ai  className='mr-[14px] mb-[9px]'>
                <div className="flex w-[66px] h-[66px] rounded-full border-4 border-rose-600 justify-center items-center">
                    <img src={Pic6} className="w-[56px] h-[56px] rounded-full border-2 border-white" alt="story img" />
                </div>
                <p className='text-center text-[12px]'>terrylucas</p>
            </ai>
        </ul>
    </div>
  )
}

export default StoryHome
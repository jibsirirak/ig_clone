import React from 'react'
import Pic from '../assets/img/1.png'
import Pic2 from '../assets/img/2.png'
import Pic3 from '../assets/img/3.png'
import Pic4 from '../assets/img/4.png'
import Pic5 from '../assets/img/5.png'
import Pic6 from '../assets/img/6.png'

const Suggestion = () => {
    return (
        <div className='w-full mt-[30px] p-[16px]'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between'>
                <img src={Pic} className='w-[56px] h-[56px] rounded-full ' />
                <div className="name">
                    <p className='font-semibold text-sm'>shirleyromero</p>
                    <p className='text-sm text-zinc-400'>Shirley Romero</p>
                </div>
                <p className='flex justify-end md:w-2/5 lg:w-2/5 font-semibold text-sm text-sky-400'>Switch</p>
            </div>
            <div className='flex justify-between mt-[22px] mb-[22px]'>
                <p className='font-semibold text-sm text-zinc-400'>Suggestions For You</p>
                <p className='font-semibold text-sm'>See All</p>
            </div>
            <ul >
                <ai className='flex flex-col md:flex-row lg:flex-row items-center text-center md:text-start lg:text-start mb-[10px]'>
                    <img src={Pic6} className='w-[56px] h-[56px] mr-[15px] rounded-full ' />
                    <div className="name">
                        <p className='font-semibold text-[12px]'>terrylucas</p>
                        <p className='text-[12px] text-zinc-400'>Followed by terrylucas + 2 more</p>
                    </div>
                    <p className='flex justify-end md:w-2/5 lg:w-2/5  font-semibold text-sm text-sky-400'>Follow</p>
                </ai>
                <ai className='flex flex-col md:flex-row lg:flex-row items-center text-center md:text-start lg:text-start mb-[10px]'>
                    <img src={Pic2} className='w-[56px] h-[56px] mr-[15px] rounded-full ' />
                    <div className="name">
                        <p className='font-semibold text-[12px]'>lunaeiei</p>
                        <p className='text-[12px] text-zinc-400'>Followed by harrypotter + 2 more</p>
                    </div>
                    <p className='flex justify-end md:w-2/5 lg:w-2/5 font-semibold text-sm text-sky-400'>Follow</p>
                </ai>
                <ai className='flex flex-col md:flex-row lg:flex-row items-center text-center md:text-start lg:text-start mb-[10px]'>
                    <img src={Pic3} className='w-[56px] h-[56px] mr-[15px] rounded-full ' />
                    <div className="name">
                        <p className='font-semibold text-[12px]'>harrypotter</p>
                        <p className='text-[12px] text-zinc-400'>Followed by christina + 2 more</p>
                    </div>
                    <p className='flex justify-end md:w-2/5 lg:w-2/5 font-semibold text-sm text-sky-400'>Follow</p>
                </ai>
                <ai className='flex flex-col md:flex-row lg:flex-row items-center text-center md:text-start lg:text-start mb-[10px]'>
                    <img src={Pic4} className='w-[56px] h-[56px] mr-[15px] rounded-full ' />
                    <div className="name">
                        <p className='font-semibold text-sm'>ednamanz</p>
                        <p className='text-sm text-zinc-400'>Followed by lunaeiei + 2 more</p>
                    </div>
                    <p className='flex justify-end md:w-2/5 lg:w-2/5 font-semibold text-sm text-sky-400'>Follow</p>
                </ai>
                <ai className='flex flex-col md:flex-row lg:flex-row items-center text-center md:text-start lg:text-start mb-[10px]'>
                    <img src={Pic5} className='w-[56px] h-[56px] mr-[15px] rounded-full ' />
                    <div className="name">
                        <p className='font-semibold text-[12px]'>christina</p>
                        <p className='text-[12px] text-zinc-400'>Followed by adammaz + 2 more</p>
                    </div>
                    <p className='flex justify-end md:w-2/5 lg:w-2/5 font-semibold text-sm text-sky-400'>Follow</p>
                </ai>
            </ul>

            <p className='text-[11px] text-zinc-200 m-[15px]'>About Press API Jobs Privacy terms Locations Top Accounts Hashtags Langauge</p>

        </div>

    )
}

export default Suggestion
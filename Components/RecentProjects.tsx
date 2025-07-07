import { projects } from '@/data'
import { div } from 'motion/react-client'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
       <h1 className='heading text-center font-bold text-5xl'>
         A small seletion of {' '} 
        <span className='text-purple-500'>
            Recent Projects.
        </span>
       </h1>
       <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={title} href={link}>  
                        <div className='relative flex items-center justify-center overflow-hidden sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img"/>
                            </div>
                            <img src={img} alt={title} className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-4'>
                            {des}
                        </p>
                        <div className='flex items-center justify-center'>
                            <p className='flex lg:text-xl md:text-xs text-sm text-purple-500 mt-5'>
                                Check Live Site <FaLocationArrow className="ms-3 mt-1" color='#CBACF9'/>
                            </p>
                        </div>
                    </PinContainer>
                </div>
            ))}
       </div>
    </div>
  )
}

export default RecentProjects
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>


      <div className="h-screen w-full flex item-center justify-center bg-white dark:bg-black absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-89[vw] md:max-w-2xl lg: max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-gray-900 dark:text-white max-w'>
            Dynamic and Engaging Game Development with Unity and C#.
          </h2>
          <TextGenerateEffect
            words="Crafting immersive experiences with Unity and C#"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            filter={true}
            duration={0.5}
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black dark:text-white'>
            Hi, I'm Vaibahv, a video game developer based in India.
            </p>

            <a href="#about">
              <MagicButton 
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position='right'
              />
            </a>
        </div>
      </div>

    </div>

  )
}

export default Hero
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight
} from '../lib/motion';

export default function Hero() {
  const [isPillShape, setIsPillShape] = useState(true);
  const control = useAnimation();

  const handleClick = () => {
    if (isPillShape) {
      control.start({
        borderRadius: ['400px', '0px']
      });
    } else {
      control.start({
        borderRadius: ['0px', '400px']
      });
    }

    setIsPillShape(!isPillShape);
  };

  return (
    <section className='flex relative flex-col h-screen w-full  items-center pt-16 bg-[#7c9bb1]'>
      <div className='text-9xl text-center text-white uppercase leading-[118px] max-md:max-w-full max-md:text-4xl max-md:leading-10'>
        <motion.span
          initial='initial'
          animate='animate'
          variants={slideInFromLeft()}
        >
          trust the product,
        </motion.span>
        <br />
        <motion.span
          initial='initial'
          animate='animate'
          variants={slideInFromRight()}
        >
          trust the process.
        </motion.span>
      </div>
      <motion.div
        className='mt-8 text-3xl text-center text-white max-md:max-w-full'
        initial='initial'
        animate='animate'
        variants={slideInFromBottom()}
      >
        Ιnnovating on the dark side of the moon
      </motion.div>
      <motion.div
        className='flex overflow-hidden absolute z-10 flex-col justify-center items-center w-full text-8xl text-center text-white uppercase leading-[87px] max-w-[1833px] xl:min-h-[792px] max-md:px-5 max-md:mt-10 max-md:max-w-[95vw] max-md:text-4xl max-md:leading-10 -bottom-28 xl:-bottom-1/2 '
        initial={{ borderRadius: '400px' }}
        animate={control}
        transition={{ duration: 1 }}
      >
        <img
          loading='lazy'
          srcSet='/images/hero_image.png'
          className='object-cover absolute inset-0 size-full'
        />
        <div className='flex relative flex-col max-w-full w-[884px] max-md:my-10 max-md:text-4xl max-md:leading-10'>
          <motion.img
            loading='lazy'
            src='/hero_icon.svg'
            className='self-center aspect-[1.15] w-[97px] hover:cursor-pointer'
            onClick={handleClick}
          />
          <motion.div
            className='mt-7 max-md:max-w-full max-md:text-4xl max-md:leading-10 hover:cursor-pointer'
            onClick={handleClick}
          >
            WE LOVE HEALTHY
            <br />
            LIFE STYLE
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

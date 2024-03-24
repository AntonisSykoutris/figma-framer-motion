import { motion } from 'framer-motion';
import { slideInFromBottom } from '../lib/motion';

export default function About() {
  return (
    <div className='flex justify-center md:justify-end items-center h-[160vh] self-stretch px-16 md:px-0 py-20 w-full bg-[#f2d181] max-md:pl-5 max-md:max-w-full'>
      <motion.div
        className='px-px mb-5 w-full max-w-[1785px] mt-[480px] max-md:mt-10 max-md:max-w-full'
        initial='initial'
        whileInView='animate'
        variants={slideInFromBottom()}
      >
        <div className='flex gap-5 md:gap-44 max-md:flex-col max-md:gap-20'>
          <div className='flex flex-col w-[41%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full'>
              <div className='text-8xl uppercase leading-[87px] max-md:max-w-full max-md:text-4xl max-md:leading-10'>
                our
                <br />
                healthy way
              </div>
              <div className='mt-8 text-xl leading-8 text-justify max-md:max-w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tincidunt lectus ex, ut condimentum urna ultricies vel. Sed
                rhoncus metus sit amet rhoncus pretium. Suspendisse metus metus,
                tincidunt ut gravida et, tincidunt vitae leo. Sed ac ante
                blandit, fringilla tellus et, ultricies nibh. Cras posuere
                egestas ipsum, auctor aliquet lorem.
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full'>
            <img
              loading='lazy'
              srcSet='/images/yellow_image.png'
              className='grow w-full aspect-[1.67] max-md:mt-10 max-md:max-w-full'
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

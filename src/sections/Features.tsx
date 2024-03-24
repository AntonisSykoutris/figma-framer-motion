import { motion } from 'framer-motion';
import { featuresData } from '../lib/data';
import Feature from '../ui/feature';

export default function Features() {
  return (
    <section className='py-20 w-full flex justify-center bg-[#e2585b]'>
      <div className='flex flex-col w-full max-w-[1677px] max-md:max-w-full'>
        <div className='flex flex-col items-center self-center mr-6 max-w-full text-center text-white w-[735px] max-md:mr-2.5'>
          <div className='text-8xl uppercase leading-[89px] max-md:max-w-full max-md:text-4xl '>
            Laboratory
          </div>
          <div className='mt-7 text-3xl leading-8 max-md:max-w-full'>
            Donec tincidunt lectus ex, ut condimentum urna ultricies vel.
          </div>
          <div className='hover:cursor-pointer'>
            <div className='mt-6 text-xl leading-8'>Learn More...</div>
            <div className='shrink-0 h-0.5 bg-white border-2 border-white border-solid w-[125px]' />
          </div>
        </div>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0 w-full'>
          {featuresData.map((feature, index) => (
            <Feature feature={feature} key={index} className={'even:mt-24'} />
          ))}
        </div>

        <motion.div
          className='justify-center self-center px-12 py-6 mt-28 text-xl leading-8 text-justify text-white border-white border-solid border-[3px] rounded-[50px] max-md:px-5 max-md:mt-10 hover:cursor-pointer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Visit Our E-shop
        </motion.div>
      </div>
    </section>
  );
}

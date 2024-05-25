import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import orebi from '../assets/orebi.jpg'
import hekto from '../assets/hekto.jpg'
import gericht from '../assets/gericht.jpg'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

//motion 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'

export const Work = () => {
  return (
    <div>
        <Container >
           

           <motion.div
           
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.7 }}
           
           className='lg:mt-20 mt-8 lg:mb-10 mb-5'>
            <h5 className='text-[#7d7e82] lg:text-[40px] text-xl font-light lg:leading-[48px] font-Josefin text-center'>Selected <span className='text-[#E3E4E6] lg:text-[40px] text-xl font-semibold lg:leading-8 font-Josefin'>Works</span></h5>
           </motion.div>



           {/* ========================= */}
           
           <motion.div
           
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.7 }}
           
           className='lg:flex gap-x-8 mb-16 lg:mb-10'>
                <div className='max-w-[650px]'>
                <Image className='text-white lg:h-[490px] h-80 w-[594px] lg:hover:h-[1000px] hover:h-[500px] hover:w-[650px] transition-all duration-500 object-cover rounded-md mb-5' src={orebi}/>
                </div>

                <motion.div
                
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
                
                className='flex flex-col my-auto px-3 lg:px-0'>
                    <h5 className='font-Lato text-base font-semibold leading-6 tracking-[0.64px] text-[#E3E4E6] mb-5'>Ecomarce Template</h5>
                    <p className='text-[#E3E4E6] lg:w-[594px] font-Josefin lg:text-[32px] text-xl leading-8'>
                    Orebi - Minimal eCommerce Figma Template -
                    It is easy to use this design, you can adapt it for any kind of products. There are a lot of space for the information. This design is a great decision, if you want to create ecommerce market in the modern way.
                </p>
                <p className='text-lg font-light leading-7'>Website Design</p>


                <Link className='w-[200px]' to={'/ksfbarsjd'}>
                <button className='py-2 px-7 rounded-full border text-white flex items-center gap-x-1 hover:gap-x-4 hover:bg-[#C54B8C] transition-all duration-300'>View work <FaAngleRight /></button>
                </Link>
                <p className='border-b pb-10'></p>
            </motion.div>
           
           </motion.div>
           
            {/* ========================= */}


            <motion.div
           
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
          
          className='lg:flex gap-x-8 mb-16 lg:mb-10'>

               <motion.div

                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
               
               className='flex flex-col my-auto px-3 lg:px-0'>
                   <h5 className='font-Lato text-base font-semibold leading-6 tracking-[0.64px] text-[#E3E4E6] mb-5'>Ecomarce Template</h5>
                   <p className='text-[#E3E4E6] lg:w-[594px] font-Josefin lg:text-[32px] text-xl leading-8'>
                   Hekto - Functional eCommerce Figma Template -
                   It is easy to use this design, you can adapt it for any kind of products. There are a lot of space for the information. This design is a great decision, if you want to create ecommerce market in the modern way.
               </p>
               <p className='text-lg font-light leading-7'>Website Design</p>


               <Link className='w-[200px]' to={'/ksfbarsjd'}>
               <button className='py-2 px-7 rounded-full border text-white flex items-center gap-x-1 hover:gap-x-4 hover:bg-[#C54B8C] transition-all duration-300 mb-5'>View work <FaAngleRight /></button>
               </Link>

               <p className='border-b pb-10 text-white'></p>

           </motion.div>

           
           <div className='max-w-[650px]'>
               <Image className='text-white lg:h-[490px] h-80 w-[594px] lg:hover:h-[1000px] hover:h-[500px] hover:w-[650px] transition-all duration-500 object-cover rounded-md mb-5' src={hekto}/>
               </div>

               <p className='border-b pb-10 text-white'></p>
          </motion.div>      
          
           {/* ========================= */}
                       
           <motion.div
           
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
           
           className='lg:flex gap-x-8 mb-16 lg:mb-10'>
                <div className='max-w-[650px]'>
                <Image className='text-white lg:h-[490px] h-80 w-[594px] lg:hover:h-[1000px] hover:h-[500px] hover:w-[650px] transition-all duration-500 object-cover rounded-md mb-5' src={gericht}/>
                </div>

                <motion.div
                
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
                
                className='flex flex-col my-auto px-3 lg:px-0'>
                    <h5 className='font-Lato text-base font-semibold leading-6 tracking-[0.64px] text-[#E3E4E6] mb-5'>Ecomarce Template</h5>
                    <p className='text-[#E3E4E6] lg:w-[594px] font-Josefin lg:text-[32px] text-xl leading-8'>
                    Gericht - Minimal Restaurants Figma Template -
                    It is easy to use this design, you can adapt it for any kind of products. There are a lot of space for the information. This design is a great decision, if you want to create ecommerce market in the modern way.
                </p>
                <p className='text-lg font-light leading-7'>Website Design</p>


                <Link className='w-[200px]' to={'/ksfbarsjd'}>
                <button className='py-2 px-7 rounded-full border text-white flex items-center gap-x-1 hover:gap-x-4 hover:bg-[#C54B8C] transition-all duration-300'>View work <FaAngleRight /></button>
                </Link>
                <p className='border-b pb-10'></p>
            </motion.div>
           
           </motion.div>   

           {/* ========================= */}
          
        </Container>
    </div>
  )
}

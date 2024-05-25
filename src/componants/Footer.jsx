import React from 'react'
import Container from './layer/Container'
import { FaFacebookF, FaGithubSquare, FaInstagramSquare, FaLinkedinIn, FaPhoneSquareAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'

//motion 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'

const Footer = () => {
  return (
    <div>
        <Container>
            <motion.div
            
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7 }}
            
            className='mt-10 '>
                <h2 className='text-[#767676] font-Josefin lg:text-[56px] text-2xl font-light lg:leading-[84px] leading-8 tracking-[-1.12px] text-center'>Get <span className='text-[#E3E4E6] font-Josefin lg:text-[56px] text-3xl font-semibold lg:leading-[84px] tracking-[-1.12px]'>in Touch.</span></h2>
                <p className='text-[#E3E4E6] lg:text-lg text-sm font-light lg:leading-7 text-center font-Lato'>So that we can talk more about...</p>
            </motion.div>


            <motion.div
            
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7 }}
            
            className='text-white flex justify-center l/g:gap-x-14 gap-x-5 items-center lg:my-10 my-5'>
                <Link to={`https://www.facebook.com/bijoy1x`}>
                    <FaFacebookF className='lg:w-10 w-5 lg:h-8 h-4'/>
                </Link>

                <Link to={`https://www.linkedin.com/in/shakhawat-bijoy/`}>
                    <FaLinkedinIn className='lg:w-10 w-5 lg:h-10 h-5'/>
                </Link>                
                
                <Link to={`https://www.instagram.com/bijoy_shakhawat/`}>
                    <FaInstagramSquare className='lg:w-10 w-5 lg:h-10 h-5'/>
                </Link>                
                
                <Link to={`https://github.com/shakhawat-bijoy`}>
                    <FaGithubSquare className='lg:w-10 w-5 lg:h-10 h-5'/>
                </Link>                
                


            
            
            
            </motion.div>

            <motion.div
            
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7 }}
            
            className='text-white flex justify-center lg:gap-x-10 gap-x-5 lg:mb-20 mb-8'>
                <Link to='tel:+8801704446708'>
                    <FaPhoneSquareAlt className='lg:w-10 w-5 lg:h-10 h-5'/>
                </Link>

                <Link to='mailto:shakhawatbijoy1@gmail.com'>
                    <IoMail className='lg:w-10 w-6 lg:h-10 h-6'/>
                </Link>
            </motion.div>

            <motion.p
            
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7 }}
            
            className='text-center text-[#767676] font-Josefin font-light lg:text-lg text-base lg:leading-7 lg:pb-10 pb-2'>Made with ❣️ by     
            <Link to={`https://sites.google.com/view/bijoy72`}>
            <span className='text-[#E3E4E6] font-Josefin font-extrabold lg:text-lg text-base leading-7'>     Shakhawat Bijoy</span>
            </Link>
            </motion.p>
        </Container>
    </div>
  )
}

export default Footer
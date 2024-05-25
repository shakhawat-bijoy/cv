import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.jpg'


//motion 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'

const About = () => {
  return (
    <div>
        <Container className='lg:flex justify-between px-3 lg:px-0'>
            <motion.div
            
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7 }}

            className='my-auto '>
                <h5 className='font-Josefin text-2xl font-semibold tracking-[1.44px] leading-9  my-auto text-[#E3E4E6]' >A bit about me</h5>
                <p className='lg:text-[32px] text-base lg:leading-[48px] text-[#E3E4E6] lg:w-[596px]'>
                    <span className='lg:text-[32px] text-base lg:leading-[48px] text-[#767676]'>I am a Web designer who is passionate about creating </span>
                    beautiful and joyful digital experiences. Besides design, I love music, games and travelling. 
                </p>
            </motion.div>
            <motion.div
            
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7 }}

            className='flex items-center justify-center lg:gap-x-8 gap-x-4 my-auto'>
                <Image className="h-[150px] lg:h-[350px] object-cover hover:h-[250px] lg:hover:h-[550px] transition-all duration-300" src={a1}/>
                    
                <div className='lg:gap-y-8 gap-y-4 flex flex-col'>
                <Image className="h-[150px] lg:h-[350px] object-cover hover:h-[250px] lg:hover:h-[550px] transition-all duration-300"  src={a2}/>
                <Image className="h-[150px] lg:h-[350px] object-cover hover:h-[250px] lg:hover:h-[550px] transition-all duration-300" src={a3}/>
                </div>
            </motion.div>
        </Container>
    </div>
  )
}

export default About
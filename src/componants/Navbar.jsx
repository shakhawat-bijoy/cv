import React from 'react'
import Container from './layer/Container'
import Listitem from './layer/Listitem'
import { Link } from 'react-router-dom'

//motion 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'

const Navbar = () => {
  return (
    <div>
      <Container className="px-3 lg:px-0">
        <motion.div
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7 }}
        
        className='flex justify-between items-center '>
        <Link>
          <h2 className='lg:py-5 py-2 lg:text-lg text-xs font-Josefin leading-7 font-bold text-[#f2eeee] '>
            {`<Shakhawat Bijoy/>`}
          </h2>
          </Link>

          <ul className='flex items-center lg:gap-x-8 gap-x-4 text-white'>
            <Listitem href="/" text="Home"/>
            <Listitem href="/sdfs" text="Work"/>
            <Listitem href="/fsdsd" text="About"/>
          </ul>
        </motion.div>
      </Container>
    </div>
  )
}

export default Navbar
import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import orebi from '../assets/orebi.png'
import hekto from '../assets/hekto.png'


const Clients = () => {
  return (
    <div>
        <Container className="lg:mt-20 mt-8 lg:mb-24">
            <div className='mb-10 text-center'>
                <h2 className='text-[#7d7e82] lg:text-[40px] text-xl font-light lg:leading-[48px] font-Josefin'>Some of 
                    <span className='text-[#E3E4E6] lg:text-[40px] text-xl font-light lg:leading-[48px] font-Josefin'> the clients I have <br />
                    designed for</span>
                </h2>
            </div>
            <div className='flex lg:gap-x-10 gap-x-5 items-center justify-center'>

                <Image  href={'https://orebi-one.vercel.app/' } target="_blank" className="lg:h-8 h-6 hover:h-8 lg:hover:h-12 transition-all duration-300" src={orebi}/>
                <Image href={'https://hekto-blue.vercel.app/' } target="_blank" className="lg:h-10 h-6 hover:h-8 lg:hover:h-14 transition-all duration-300 " src={hekto}/>
            </div>
        </Container>
    </div>
  )
}

export default Clients
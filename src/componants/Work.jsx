import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import orebi from '../assets/orebi.jpg'
import hekto from '../assets/hekto.jpg'
import gericht from '../assets/gericht.jpg'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Work = () => {
  return (
    <div>
        <Container >
           

           <div className='lg:mt-20 mt-8 lg:mb-10 mb-5'>
            <h5 className='text-[#7d7e82] lg:text-[40px] text-xl font-light lg:leading-[48px] font-Josefin text-center'>Selected <span className='text-[#E3E4E6] lg:text-[40px] text-xl font-semibold lg:leading-8 font-Josefin'>Works</span></h5>
           </div>
           
            <div className='lg:flex gap-x-8 mb-10 lg:mb-10'>
                <div className='max-w-[650px]'>
                <Image className='text-white lg:h-[490px] h-80 w-[594px] lg:hover:h-full hover:h-[500px] hover:w-[650px] transition-all duration-500 object-cover rounded-md mb-5' src={orebi}/>
                </div>

                <div className='flex flex-col my-auto px-3 lg:px-0'>
                    <h5 className='font-Lato text-base font-semibold leading-6 tracking-[0.64px] text-[#E3E4E6] mb-5'>Ecomarce Template</h5>
                    <p className='text-[#E3E4E6] lg:w-[594px] font-Josefin lg:text-[32px] text-xl '>
                    Orebi - Minimal eCommerce Figma Template -
                    It is easy to use this design, you can adapt it for any kind of products. There are a lot of space for the information. This design is a great decision, if you want to create ecommerce market in the modern way.
                </p>
                <p className='text-lg font-light leading-7'>Website Design</p>


                <Link to={'https://orebi-one.vercel.app/'}>
                <button className='py-2 px-7 rounded-full border text-white flex items-center gap-x-1 hover:gap-x-4 hover:bg-[#C54B8C] transition-all duration-300'>View work <FaAngleRight /></button>
                </Link>
                <p className='border-b pb-10'></p>
            </div>
           
           </div>   


           <div className='lg:flex gap-x-8 mb-16 lg:mb-10'>
            

            <div className='flex flex-col my-auto px-3 lg:px-0'>
                    <h5 className='font-Lato text-base font-semibold leading-6 tracking-[0.64px] text-[#E3E4E6] mb-5'>Ecomarce Template</h5>
                    <p className='text-[#E3E4E6] lg:w-[594px] font-Josefin lg:text-[32px] text-xl '>
                    Hekto - Minimal eCommerce Figma Template -
                    It is easy to use this design, you can adapt it for any kind of products. There are a lot of space for the information. This design is a great decision, if you want to create ecommerce market in the modern way.
                </p>
                <p className='text-lg font-light leading-7'>Website Design</p>

                <Link to={'https://hekto-blue.vercel.app/'}>
                <button className='py-2 px-7 rounded-full border text-white flex items-center gap-x-1 hover:gap-x-4 hover:bg-[#C54B8C] transition-all duration-300 mb-5 lg:mb-0'>View work <FaAngleRight /></button>
                </Link>
                <p className='border-b pb-10'></p>
            </div>

            <div>
                <Image className='text-white lg:h-[490px] h-80 w-[594px] lg:hover:h-full hover:h-[500px] hover:w-[650px] transition-all duration-500 object-cover rounded-md mb-5' src={hekto}/>
                </div>
                <div className='px-3 lg:px-0'> 
                <p className='border-b pb-10'></p>
                </div>
           </div>          
          
                       
           <div className='lg:flex gap-x-8 mb-16 lg:mb-10'>
                <div className='max-w-[650px]'>
                <Image className='text-white lg:h-[490px] h-80 w-[594px] lg:hover:h-[1000px] hover:h-[500px] hover:w-[650px] transition-all duration-500 object-cover rounded-md mb-5' src={gericht}/>
                </div>

                <div className='flex flex-col my-auto px-3 lg:px-0'>
                    <h5 className='font-Lato text-base font-semibold leading-6 tracking-[0.64px] text-[#E3E4E6] mb-5'>Ecomarce Template</h5>
                    <p className='text-[#E3E4E6] lg:w-[594px] font-Josefin lg:text-[32px] text-xl '>
                    Orebi - Minimal eCommerce Figma Template -
                    It is easy to use this design, you can adapt it for any kind of products. There are a lot of space for the information. This design is a great decision, if you want to create ecommerce market in the modern way.
                </p>
                <p className='text-lg font-light leading-7'>Website Design</p>


                <Link to={'https://orebi-one.vercel.app/'}>
                <button className='py-2 px-7 rounded-full border text-white flex items-center gap-x-1 hover:gap-x-4 hover:bg-[#C54B8C] transition-all duration-300'>View work <FaAngleRight /></button>
                </Link>
                <p className='border-b pb-10'></p>
            </div>
           
           </div>   


          
        </Container>
    </div>
  )
}

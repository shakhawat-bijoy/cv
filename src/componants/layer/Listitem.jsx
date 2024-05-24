import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({href, text, className}) => {
  return (
    <li className='group'>
        <Link className={` font-Lato lg:text-base text-xs lg:font-[700] text-[#efe9e9] hover:text-[#e93197] transition-all duration-300  ${className}`} to={href}>
          {text}
        </Link>
    </li>
  )
}

export default Listitem
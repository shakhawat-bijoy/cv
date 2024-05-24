import React from 'react'
import Container from '../layer/Container'
import error from '../../assets/error.png'

const Error = () => {
  return (
    <div>
         
        <Container>
            <Image className="mx-auto" src={error}/>
            
        </Container>
    </div>
  )
}

export default Error
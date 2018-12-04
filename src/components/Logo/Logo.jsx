import React from 'react'
import { Logo } from './styles'

export default () => {
  return (
    <Logo>
      <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <g fill='currentColor' fillRule='evenodd'>
          <path d='M50,0 L50,20 C33.4314575,20 20,33.4314575 20,50 C20,66.5685425 33.4314575,80 50,80 C66.5685425,80 80,66.5685425 80,50 L100,50 C100,77.6142375 77.6142375,100 50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 Z'
          />
          <path d='M50,10 L90,10 L90,50 L70,50 L70,30 L50,30 L50,10 Z' />
        </g>
      </svg>
    </Logo>
  )
}

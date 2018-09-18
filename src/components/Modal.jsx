import React, { Component } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
  background: rgba(0,0,0, .6);

  opacity: 0;
  visibility: hidden;

  transition: .2s;
  overflow-y: auto;

  ${props => props.show && `
    opacity: 1;
    visibility: visible;
  `}
`

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0;
  transition: .5s;

  ${props => props.width && `
    @media screen and (min-width: 768px) {
      width: ${props.width};
    }
  `}

  ${props => props.position === 'left' && props.show === false && `
    @media screen and (min-width: 768px) {
      left: -10rem;
    }
  `}

  ${props => props.position === 'right' && props.show === false && `
    @media screen and (min-width: 768px) {
      right: -10rem;
    }
  `}

  ${props => props.position === 'left' && props.show === true && `
    left: 0;
    opacity: 1;
  `}

  ${props => props.position === 'right' && props.show === true && `
    right: 0;
    opacity: 1;
  `}
`

Modal.Inner = styled.div`
  padding: 3rem;
  background: #fff;
  min-height: 100%;

  @media screen and (min-width: 768px) {
    padding: 6rem;
  }
`

Modal.Close = styled.div`
  position: absolute;
  top: 2rem;
  transition: .2s;
  cursor: pointer;
  z-index: 7;

  &:hover {
    opacity: .8;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
  }
  
  ${props => props.position === 'left' && `
    right: 2rem;
  `}

  ${props => props.position === 'right' && `
    left: 2rem;
  `}

  svg {
    fill: #000;

    @media screen and (min-width: 768px) {
      fill: #fff;
    }
  }
`

export default class extends Component {
  handleClose = () => {
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
  }

  render () {
    const { show, width, position, children } = this.props

    return (
      <Overlay show={show}>
        <Modal.Close
          onClick={this.handleClose}
          position={position || 'left'}
        >
          <svg width='24px' height='24px' viewBox='0 0 24 24'>
            <g fillRule='evenodd'>
              <polygon points='24 2.08666667 21.9133333 0 12 9.91333333 2.08666667 0 0 2.08666667 9.91333333 12 0 21.9133333 2.08666667 24 12 14.0866667 21.9133333 24 24 21.9133333 14.0866667 12' />
            </g>
          </svg>
        </Modal.Close>
        <Modal
          show={show}
          position={position || 'left'}
          width={width || '50rem'}
        >
          <Modal.Inner>{ children }</Modal.Inner>
        </Modal>
      </Overlay>
    )
  }
}

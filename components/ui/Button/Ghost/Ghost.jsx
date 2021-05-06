import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Ghost.module.scss'

const Ghost = ({ children, size, disabled, color }) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.button_small]: true,
        [styles.button_medium]: size === 'medium',
        [styles.button_large]: size === 'large',
        [styles.button_white]: color === 'white',
        [styles.button_black]: color === 'black',
        [styles.button_disabled]: disabled,
      })}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  )
}

Ghost.defaultProps = {
  size: 'large',
  disabled: false,
  color: 'white',
}

Ghost.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'black']),
}

export default Ghost

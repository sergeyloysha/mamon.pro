import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Primary.module.scss'

const Primary = ({ children, size, color, disabled }) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.button_small]: size === 'small',
        [styles.button_medium]: size === 'medium',
        [styles.button_large]: size === 'large',

        [styles.button_purple]: color === 'purple',
        [styles.button_black]: color === 'black',

        [styles.button_disabled]: disabled,
      })}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  )
}

Primary.defaultProps = {
  size: 'large',
  color: 'black',
  disabled: false,
}

Primary.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['purple', 'black']),
  disabled: PropTypes.bool,
}

export default Primary

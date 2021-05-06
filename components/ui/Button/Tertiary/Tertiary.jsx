import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Tertiary.module.scss'
import { ArrowCircle } from '@components/icons'

const Tertiary = ({ children, size, disabled }) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.button_small]: true,
        [styles.button_medium]: size === 'medium',
        [styles.button_large]: size === 'large',
        [styles.button_disabled]: disabled,
      })}
      disabled={disabled}
    >
      <ArrowCircle />
      <span>{children}</span>
    </button>
  )
}

Tertiary.defaultProps = {
  size: 'large',
  disabled: false,
}

Tertiary.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
  disabled: PropTypes.bool,
}

export default Tertiary

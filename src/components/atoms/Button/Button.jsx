import React from 'react'
import PropTypes from 'prop-types'

// Utils & misc
import cn from '../../../utils/cn'

// Style
import style from './Button.module.css'

const Button = ({ label, color, onClick, isDisabled }) => {
  return (
    <button className={cn([style.btn, isDisabled ? style.bidule : null])} >Mon bouton</button>
  )
}

Button.propTypes = {

}

export default Button


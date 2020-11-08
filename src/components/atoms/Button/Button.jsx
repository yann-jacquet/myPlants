/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

// Utils & misc
import cn from '../../../utils/cn';
import { ReactComponent as Loader } from '../../../assets/loader/oval.svg';

// Style
import style from './Button.module.css';

const Button = ({
  label, color, size, onClick, isDisabled, isLoading, children, type, className,
}) => (
  <button
    type={type}
    className={cn([className, style.btn, style[size], style[color], isDisabled && style.disabled])}
    onClick={onClick}
  >
    {isLoading ? <Loader className={cn([style.loader])} /> : null}
    {label || children}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'error', 'transparent']).isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  children: null,
  type: 'button',
  size: 'big',
  className: '',
};

export default Button;

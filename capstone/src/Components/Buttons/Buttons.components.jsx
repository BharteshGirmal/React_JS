import React from 'react'
import './Buttons.styles.scss';

const Button_classes={
      google:'google-sign-in',
      inverted:'inverted',
} 
export default function Button({children, buttontype, ...otherprops}) {
  return (
    <button className={`button-container ${Button_classes[buttontype]}`} {...otherprops}>{children}</button>
  )
}

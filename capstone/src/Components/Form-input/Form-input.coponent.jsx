import React from 'react'
import './Form-input.styles.scss';
export default function FormInput({label, ...otherprops}) {
  return (
    <div className='group'>
    <input className='form-input' {...otherprops} />
    {label &&<label className={`${otherprops.value.length ?'shrink':''} form-input-label`}>{label}</label>}
    </div>

  )
}

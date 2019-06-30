import React, { useState } from 'react'

const Input = props => {

  const [inputError, handleError] = useState(false);

  const trigger = (e) => {
    const value = e.target.value
    const name = e.target.name

    if (value.match(props.regex) != null || value === "") {
      props.onChange(name, value)
      handleError(false)
    } else {
      handleError(true)
    }
  }

  return (
    <div className="field">
      <input className={`input ${ inputError && 'is-danger' }`} name={props.name} type={props.type} placeholder={props.placeholder} onChange={e => trigger(e)} />
      {
        inputError && <p className="help is-danger">{props.messageError}</p>
      }
    </div>
  )
}

export default Input
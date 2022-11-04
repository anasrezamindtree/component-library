import React from "react"
import { PASSWORD } from "../../constants/label.constants"
import * as styles from "./input-tw"
import PropTypes from "prop-types"

function Input(props) {
  const {
    type,
    label,
    id,
    name,
    placeholder,
    isRequired,
    variant,
    errorMessage,
    onChange,
    button,
    onBlur,
  } = props
  const style = styles[variant] || styles.defaultStyle

  return (
    <div class={style.inputContainer}>
      <label htmlFor={name} class={style.labelStyle}>
        {label}
        {`${isRequired ? "*" : ""}`}
      </label>

      <div className={style.inputWrpr}>
        <input
          type={type}
          class={`${style.text} ${errorMessage ? style.error : ""}`}
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={event => onChange(event, id)}
          onBlur={event => onBlur(event, id)}
        />
      </div>
      {name === PASSWORD && (
        <button
          id={button.id}
          name={button.name}
          className=""
          onClick={event => onChange(event, button.id)}
        >
          +
        </button>
      )}
      <div>{errorMessage}</div>
    </div>
  )
}

Input.prototype = {
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  button: PropTypes.object,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  isRequired: PropTypes.bool,
}

export default Input

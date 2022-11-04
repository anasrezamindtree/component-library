import React from 'react'
import * as styles from './input-tw'
import PropTypes from "prop-types"

function CheckBox(props) {
    const {name,id,value,label, variant, onChange, isValid, isRequired}=props;
    const style = styles[variant] || styles.defaultStyle

  return (
    <div>
     <div class={style.chkWrpr}>
      <input class= {`${style.checkBox} ${!isValid ? style.error : ""}`}  type="checkbox" value={value} id={id} name={name} onChange={e => onChange(e, id)}/>
      <label class={style.checkBoxText} for={id}>
        {label}{`${isRequired ? "*" : ''}`}
      </label>
    </div>
    </div>
  )
}

  CheckBox.prototype = {
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    isValid: PropTypes.bool,
    isRequired: PropTypes.bool
  }

  export default CheckBox
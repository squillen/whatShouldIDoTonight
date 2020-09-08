import React from "react"
import styles from './button.module.css';

export default function Button({label = '', onClick = () => {}, styleName}) {
  return (
    <div className={styleName || styles.button} onClick={onClick}>
      {label}
    </div>
  )
}

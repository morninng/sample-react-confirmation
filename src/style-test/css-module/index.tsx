import React from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'


export const CssModuleButton: React.FC = () => {
  return (
    <button
      type="button"
      className={clsx(styles.button)}
    >
      <span className={styles.iconWrapper}>
        button
      </span>
    </button>
  )
}
CssModuleButton.displayName = 'CssModuleButton'

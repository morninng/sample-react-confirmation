

// https://qiita.com/buncho_nk/items/f5b2b49952779b2257f6
// 非推奨だが置いとく。
import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  button: {
    width: '40px',
    height: '24px',
    padding: 0,
    border: '1px solid red',
    borderRadius: '5px',
    background: 'yellow',
    cursor: 'pointer',
    outline: 'none',
    },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    color: 'blue',
  }
})

export const MakeStyleButton: React.FC = () => {
  const classes = useStyles()

  return (
    <button
      type="button"
      className={clsx(classes.button)}
    >
      <span className={classes.iconWrapper}>
        button
      </span>
    </button>
  )
}
MakeStyleButton.displayName = 'CssModuleButton'

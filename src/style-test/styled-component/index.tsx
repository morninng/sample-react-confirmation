

// https://qiita.com/buncho_nk/items/f5b2b49952779b2257f6
// 非推奨だが置いとく。
import React from 'react'
import clsx from 'clsx'
import { styled } from '@mui/styles';

const MyButton = styled('button')(()=>
{
return {
  width: '40px',
  height: '24px',
  padding: 0,
  border: '1px solid red',
  borderRadius: '5px',
  background: 'yellow',
  cursor: 'pointer',
  outline: 'none',
}
})

const MySpan = styled('span')(()=>
{
return {
  display: 'flex',
  justifyContent: 'center',
  color: 'blue',
}
})

export const StyledComponentButton: React.FC = () => {

  return (
    <MyButton>
      <MySpan>
        button
      </MySpan>
    </MyButton>
  )
}
StyledComponentButton.displayName = 'StyledComponentButton'

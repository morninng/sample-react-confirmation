import React from 'react'
import { memo } from 'react'

interface ChildProps {
  aaa?: string
  obj?: {aaa?: string}
}


export const ParamComponent2 =  memo<ChildProps>((props: ChildProps) => {


    return <div>{props?.obj?.aaa ?? 'default'}</div>

  })
  ParamComponent2.displayName = 'ParamComponent2'

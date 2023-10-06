import React from 'react'
import { ParamComponent2 } from './param-component2'

import { memo } from 'react'

interface ChildProps {
  aaa: string
}

export const ParamComponent = memo<ChildProps>((props) => {

    return <ParamComponent2 obj={{aaa: props.aaa}} />

  })
  ParamComponent.displayName = 'ParamComponent'

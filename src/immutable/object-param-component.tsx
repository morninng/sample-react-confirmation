import React from 'react'

interface ChildProps {
  aaa?: string
  obj?: {aaa: string}
}

export const ObjectParamComponent: React.FC<ChildProps> = (props) => {


    return (
    <div>
      <div>{props.aaa}</div>

      <div>{props?.obj?.aaa ?? 'default'}</div>

    </div>)

  }

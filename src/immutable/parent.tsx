import React from 'react'
import { ObjectParamComponent } from './object-param-component'
import { ParamComponent } from './param-component'

export const ParentAAAAA: React.FC = () => {
    const [aaa, setAaa] = React.useState({aaa: "aaa", bbb : "bbb"})

    const [ccc, setCcc] = React.useState('ccc')

  const ddd = () => {
    setCcc("ccc2")
  }

  return (
    <div>
      <ObjectParamComponent aaa={ccc} obj={{aaa: ccc}} />
      <ObjectParamComponent  obj={{aaa: ccc}} />
      <ObjectParamComponent  obj={aaa} />
      --
      <ParamComponent aaa={ccc} />
      <button onClick={()=>{ddd()}}>ddd button</button>
    </div>
  )
}

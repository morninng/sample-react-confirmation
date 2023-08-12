import React from 'react'
import { useForm } from 'react-hook-form'


// https://stackoverflow.com/questions/57750777/generics-error-with-forwardref-property-ref-does-not-exist-on-type-intrinsic

interface ChillProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur:  (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string
  ref: React.Ref<HTMLInputElement>;
}

export const ChillThree: React.FC<ChillProps> = React.forwardRef<HTMLInputElement, ChillProps >
(
  ({onChange, name, onBlur}, ref: React.Ref<HTMLInputElement>) => {

    const onChangeX = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("onChangeX")
      onChange(e)
    }

    return (
      <div>
        <input
          ref={ref}
          name={name}
          onBlur={onBlur} 
          onChange={onChangeX}
        />
      </div>
    )
  }
)

// https://qiita.com/ryosuketter/items/1ebf2d68ba3317db53a9
// https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom

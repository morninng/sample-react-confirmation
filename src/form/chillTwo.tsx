import React from 'react'
import { useForm } from 'react-hook-form'

// https://stackoverflow.com/questions/57750777/generics-error-with-forwardref-property-ref-does-not-exist-on-type-intrinsic

interface ChillProps {
  register: ReturnType<typeof useForm>['register']
  formRegistrationName: string
  maxLength: number
}

export const ChillTwo: React.FC<ChillProps> = ({register, formRegistrationName, maxLength}) => {

    return (
        <div>
          <input
            {...register(formRegistrationName, {required: true, maxLength: maxLength}) }
            onBlur={() => console.log("onBlur")}
          />
        </div>
      )
  }

// https://qiita.com/ryosuketter/items/1ebf2d68ba3317db53a9
// https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
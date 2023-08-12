import React from 'react'
import { useFormContext } from "react-hook-form"

// https://stackoverflow.com/questions/57750777/generics-error-with-forwardref-property-ref-does-not-exist-on-type-intrinsic

interface ChittProps {
  formRegistrationName: string
  maxLength?: number
  isRequired?: boolean
}

export const Chitt: React.FC<ChittProps> = ({ formRegistrationName, isRequired = true, maxLength = undefined}) => {

    const { register } = useFormContext() 

    console.log(maxLength);
    console.log("formRegistrationName", formRegistrationName)

    return (
        <div>
          <input
            {...register(formRegistrationName, {required: isRequired, maxLength: maxLength}) }
          />
        </div>
      )
  }


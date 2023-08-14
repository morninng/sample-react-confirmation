import React from 'react'
import { useFormContext, Controller } from "react-hook-form"
import { Select as MaterialSelect,  } from '@mui/material'


interface ChittProps {
  formRegistrationName: string
  maxLength?: number
  isRequired?: boolean
  children: React.ReactNode
}

export const MuiSelect: React.FC<ChittProps> = ({ formRegistrationName, children}) => {

    const { control } = useFormContext() 

    return (
        <div> 
            <div> MuiSelect</ div>
            <Controller
                control={control}
                name={formRegistrationName}
                defaultValue="" 
                render={({ field}) => (<MaterialSelect {...field} value={field.value || ''} >{children}</MaterialSelect>) }
            />
        </div>
      )
  }

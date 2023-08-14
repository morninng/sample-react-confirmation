import React from 'react'
import { MuiSelect } from './mui-select'
import { MenuItem } from '@mui/material'


export const ChittSelectOption: React.FC<{}> = () => {

    return (
        <div>
            <MuiSelect formRegistrationName="sss">
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
            </MuiSelect>

        </div>
      )
  }


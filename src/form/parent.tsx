import React, {useRef} from 'react'
import { useForm } from 'react-hook-form'
import { Chill } from './chill'

export const Parent: React.FC = () => {
    const { register } = useForm()
    const reference = useRef<HTMLInputElement>(null);
  
    return (<form>
      <Chill ref={reference} register={register} formRegistrationName="sss"  />
      </form>
    )
  }
import React, {useEffect} from 'react'
import { useFormContext, useWatch } from "react-hook-form"

// https://stackoverflow.com/questions/57750777/generics-error-with-forwardref-property-ref-does-not-exist-on-type-intrinsic

interface ChittProps {
  formRegistrationName: string
  maxLength?: number
  isRequired?: boolean
}

export const Chitt: React.FC<ChittProps> = ({ formRegistrationName, isRequired = true, maxLength = undefined}) => {

    const { register, watch, setValue } = useFormContext() 
      const existFormContent = useWatch({ name: formRegistrationName })
    // const existFormContent = watch(formRegistrationName)

// https://scrapbox.io/mrsekut-p/getValues%E3%81%A8watch%E3%81%A8useWatach%E3%81%AE%E4%BD%BF%E3%81%84%E5%88%86%E3%81%91

    // useEffect(() => {
    //   const subscription = watch((value, { name, type }) => {
        // console.log("value", value)
        // console.log("name", name)
        // console.log("type",type)
      // });

      // existFormContent.subscribe((data: any)=>{
      //   console.log("data", data)
      // })

    //   return () => subscription.unsubscribe();

    // }, [watch]);

    const sss = () => {
      setValue(formRegistrationName, "sss")
    }

    return (
        <div>
          <button onClick={()=>{sss()}}>button</button>
          <input
            {...register(formRegistrationName, {required: isRequired, maxLength: maxLength}) }
          />
          {existFormContent && (<span> existFormContentを用いて、値があることを確認{existFormContent}</span>)}
        </div>
      )
  }


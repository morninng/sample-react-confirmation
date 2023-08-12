import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Chitt } from './chitt'

export const Parent2: React.FC = () => {
  const methods = useForm()


  React.useEffect(() => {
    const subscription = methods.watch((value, { name, type }) =>
      console.log("ss", value, name, type)
    )
    return () => subscription.unsubscribe()
  }, [methods.watch])



  const onSubmit = (data: any) => console.log("submit", data)





  return (
    <FormProvider {...methods}>
      <div>parent2</div>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <Chitt  formRegistrationName="hoge" maxLength={2} />
        <Chitt  formRegistrationName="fuga"  />

        <button type="submit">submit</button>
      </form>
    </FormProvider>
  )
}

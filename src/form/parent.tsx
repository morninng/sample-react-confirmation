import React, {useRef} from 'react'
import { useForm } from 'react-hook-form'
import { Chill } from './chill'
import { ChillTwo } from './chillTwo'
import { ChillThree } from './chillThree'

export const Parent: React.FC = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const reference = useRef<HTMLInputElement>(null);
  const thirdChillOne = register('thirdChillOne', {
    required: true,
    maxLength: 2
  }); 

  const thirdChillsTwo = register('thirdChillsTwo', {
    required: true,
    maxLength: 5
  }); 

  const onSubmit = (data: any) => console.log(data)
  const aaa = "sss";
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>これは関係ない。ただのテスト</div> 
      <Chill ref={reference} hoge="hoge" />

      <div>registerを渡して、ChillTwoでregisterを使う</div> 
      <ChillTwo register={register} formRegistrationName="secondChill" maxLength={2}  />
      <div>{errors && errors.secondChill && <span>{"error " + String(errors.secondChill.type)}</span>}</div>
      <span> 二つおなじものを名前変えただけ</span>
      <ChillTwo register={register} formRegistrationName="secondChillSecond"  maxLength={2}  />



      <div>referenceを渡すほうほう。</div> 
      <ChillThree ref={thirdChillOne.ref}  name={thirdChillOne.name} onBlur={thirdChillOne.onBlur} onChange={thirdChillOne.onChange}  />
      <ChillThree ref={thirdChillsTwo.ref}  name={thirdChillsTwo.name} onBlur={thirdChillsTwo.onBlur} onChange={thirdChillsTwo.onChange}  />
      <div>{errors && errors.thirdChillOne && <span>{"error " + String(errors.thirdChillOne.type)}</span>}</div>

      <button type="submit">submit</button>
    </form>
  )
}
import React from 'react'
import { useForm } from 'react-hook-form'

// interface SimpleProps<T extends string>
//   extends React.HTMLProps<HTMLButtonElement> {
//   random: T;
// }

// interface Props {
//   ref?: React.RefObject<HTMLInputElement>;
//   children: React.ReactNode;
// }
// https://stackoverflow.com/questions/57750777/generics-error-with-forwardref-property-ref-does-not-exist-on-type-intrinsic

interface ChillProps {
  register: ReturnType<typeof useForm>['register']
  formRegistrationName: string
  ref: React.Ref<HTMLInputElement>;
}

export const Chill: React.FC<ChillProps> = React.forwardRef<HTMLInputElement, ChillProps >
(
    ({register, formRegistrationName}, _ref: React.Ref<HTMLInputElement>) => {

    return (
        <div>
          <input
            // ref={ref}
            {...register(formRegistrationName)}
          />
        </div>
      )
  }
)
// https://qiita.com/ryosuketter/items/1ebf2d68ba3317db53a9
// https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
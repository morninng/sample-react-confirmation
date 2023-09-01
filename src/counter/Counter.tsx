import React, { useState, useEffect } from 'react'
// import axios from "axios";
import { useAppSelector, useAppDispatch } from '../hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   axios.get('https://recording.mixidea.org/').then((response) => {
  //     console.log(response)
  //   });
  // }, []);

  // omit rendering logic
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

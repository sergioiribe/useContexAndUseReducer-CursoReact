import { useReducer } from "react";

import React from 'react'

export const Counter = () => {

    const initialState = { count: 0}

    const [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action){
        switch(action.type){
            case "increment":
                return { count: state.count + 1}
            case "decrement":
                return { count: state.count - 1}
            case "reset":
                return initialState
            default:
                return initialState
        }
    }

  return (
    <div className="flex justify-center items-center flex-col w-[100%] h-[100vh]">
        <div className="mb-28">
        <h1 className="text-[70px]">Count: {state.count}</h1>
        <div className="flex justify-center gap-5 mt-5">
            <button className="py-2 px-5 bg-blue-500 text-white rounded text-lg" onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button className="py-2 px-5 bg-blue-500 text-white rounded text-lg" onClick={() => dispatch({type: "decrement"})} >Decrement</button>
            <button className="py-2 px-5 bg-blue-500 text-white rounded text-lg" onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
        </div>
    </div>
  )
}

import React from 'react'

const Button = ({h,w,data}) => {
   
  return (
    <button className={`text-center border p-2 rounded-lg w-${w} h-${h} bg-red-500 font-bold mt-8 mb-4 ml-4`}>{data}</button>
  )
}

export default Button
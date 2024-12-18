import React from 'react'
import ProgressBar from './ProgressBar'
import ClaimForm from './ClaimForm'

const FormSection = () => {
  return (
    <div className=" w-full xl:h-[calc(100vh-105px)] h-auto bg-background p-5 rounded-3xl flex flex-col justify-between">
        <ProgressBar/>
        <ClaimForm/>
    </div>
  )
}

export default FormSection
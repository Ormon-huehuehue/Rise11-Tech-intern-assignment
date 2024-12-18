import React from 'react'
import ProgressBar from './ProgressBar'
import ClaimForm from './ClaimForm'

const FormSection = () => {
  return (
    <div className=" w-full h-auto bg-background p-5 rounded-3xl flex flex-col justify-between mb-3 mx-4">
        <ProgressBar/>
        <ClaimForm/>
    </div>
  )
}

export default FormSection
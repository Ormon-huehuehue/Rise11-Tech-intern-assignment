import React from 'react'
import ProgressBar from './ProgressBar'

const FormSection = () => {
  return (
    <div className=" w-full h-[calc(100vh-105px)] bg-background p-5 rounded-2xl flex flex-col">
        <ProgressBar/>
    </div>
  )
}

export default FormSection
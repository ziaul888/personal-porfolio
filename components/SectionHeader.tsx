import React from 'react'
type headingProps={
    children:React.ReactNode
}

const SectionHeader = ({children}:headingProps) => {
  return (
    <h2 className='font-5xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}

export default SectionHeader
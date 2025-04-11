import React from 'react'

interface IProps {
    children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({children}) => {
  return (
    <>
    {children}
    </>
  )
}

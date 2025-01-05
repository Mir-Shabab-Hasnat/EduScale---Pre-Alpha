import React, { ReactNode } from 'react'

const SiteLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default SiteLayout
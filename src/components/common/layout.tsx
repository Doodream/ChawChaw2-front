import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <main className="flex h-screen w-screen justify-center bg-primary-light">
      <div className="h-screen w-screen max-w-[576px] bg-white">{children}</div>
    </main>
  )
}

export default Layout

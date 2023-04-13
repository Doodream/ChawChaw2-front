import React, { createContext, PropsWithChildren, useState } from 'react'

type RouteContextType = {
  isPush: boolean
  setIsPush: (value: boolean) => void
}

export const RouteContext = createContext<RouteContextType>({
  isPush: false,
  setIsPush: () => console.log()
})

export const RouteProvider = ({ children }: PropsWithChildren) => {
  const [isPush, setIsPush] = useState(false)

  const value = {
    isPush,
    setIsPush
  }

  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
}

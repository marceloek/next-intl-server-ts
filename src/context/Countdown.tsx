'use client'

import { createContext, useContext } from 'react'

const CountdownContext = createContext({ timer: -1 })
CountdownContext.displayName = 'Countdown'

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  return (
    <CountdownContext.Provider value={{ timer: 300 }}>
      {children}
    </CountdownContext.Provider>
  )
}

export const useCountdownContext = () => {
  return useContext(CountdownContext)
}

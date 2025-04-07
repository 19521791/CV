/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const AnimationContext = createContext()

export const AnimationProvider = ({ children }) => {
  const [isEverythingReady, setIsEverythingReady] = useState(false)

  return (
    <AnimationContext.Provider value={{ isEverythingReady, setIsEverythingReady }}>
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => useContext(AnimationContext)
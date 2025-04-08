/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

export const AnimationContext = createContext()

export const AnimationProvider = ({ children }) => {
  const [isEverythingReady, setIsEverythingReady] = useState(false)
  const [isPreloadDone, setIsPreloadDone] = useState(false)
  const [isNavigateAnim, setIsNavigateAnim] = useState(false)


  return (
    <AnimationContext.Provider
      value={{
        isEverythingReady,
        setIsEverythingReady,
        isPreloadDone,
        setIsPreloadDone,
        isNavigateAnim,
        setIsNavigateAnim
      }}>
      {children}
    </AnimationContext.Provider>
  )
}

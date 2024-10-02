'use client'

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

export type OS = 'Windows' | 'macOS' | 'Linux'

export interface OSContextProps {
  currentOS: OS
  setCurrentOS: (os: OS) => void
}

// this function detects the operating system of the user and returns the name that will be used to sort the instructions
function detectOS() {
  const userAgent = window.navigator.userAgent
  if (userAgent.includes('Mac')) {
    return 'macOS'
  } else if (userAgent.includes('Win')) {
    return 'Windows'
  }

  return 'Linux'
}

export const OSContext = createContext<OSContextProps>({
  currentOS: 'macOS', // Default value
  setCurrentOS: () => {}, // Default value
})

export const OSProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentOS, setCurrentOS] = useState<OS>('macOS') // Set the initial OS here

  useEffect(() => {
    // this will only run on the client side
    setCurrentOS(detectOS())
  }, [])

  return (
    <OSContext.Provider value={{ currentOS, setCurrentOS }}>
      {children}
    </OSContext.Provider>
  )
}

export const useOS = (): OSContextProps => {
  return useContext(OSContext)
}

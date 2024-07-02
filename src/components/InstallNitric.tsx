import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CodeGroup } from './Code'

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

export const InstallNitric: React.FC<PropsWithChildren> = ({ children }) => {
  const [defaultIndex, setDefaultIndex] = useState(0)

  useEffect(() => {
    // this will only run on the client side
    const OS = detectOS()

    React.Children.toArray(children).forEach(
      (child: React.ReactElement, index) => {
        // check based on the title prop of the children with the detected OS
        if (child.props.title === OS) {
          setDefaultIndex(index)
        }
      }
    )
  }, [])

  return (
    <CodeGroup title="" compare={false} defaultIndex={defaultIndex}>
      {children}
    </CodeGroup>
  )
}

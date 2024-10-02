import React from 'react'

const CodeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full max-w-full">
      <div
        tabIndex={0}
        className={
          'not-prose group relative mb-6 w-full max-w-full overflow-hidden rounded-md border border-white/5 bg-code shadow-[inset_0px_0px_33px_-10px_#00000008,0px_0px_38px_-2px_#00000030]'
        }
      >
        {children}
      </div>
    </div>
  )
}

export default CodeContainer

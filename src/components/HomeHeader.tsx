import React from 'react'
import NitricWhiteLogo from './NitricWhiteLogo'
import NitricLogo from './NitricLogo'

export const HomeHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-center">
      <div>
        <NitricWhiteLogo className="hidden w-16 dark:block md:w-28" />
        <NitricLogo className="w-16 dark:hidden md:w-28" />
      </div>
      <div>
        <h1 className="mb-3 text-2xl sm:text-3xl">{title}</h1>
        <p className="max-w-[600px]">{description}</p>
      </div>
    </div>
  )
}

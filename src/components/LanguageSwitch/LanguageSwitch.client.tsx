'use client'

import useLang, { LanguageId } from '@/hooks/useLang'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

export const LanguageSwitchClient = ({
  languages,
}: {
  languages: { name: string; icon: React.ReactNode }[]
}) => {
  const { currentLanguage, setCurrentLanguage } = useLang()

  return (
    <ul className="flex gap-x-4">
      {languages.map(({ name, icon }) => (
        <li
          key={name}
          className={cn(
            'cursor-pointer transition-all',
            currentLanguage !== name ? 'grayscale hover:grayscale-0' : '',
          )}
        >
          <Button
            variant="unstyled"
            onClick={() => setCurrentLanguage(name as LanguageId)}
          >
            {icon}
            <span className="sr-only">set language to {name}</span>
          </Button>
        </li>
      ))}
    </ul>
  )
}

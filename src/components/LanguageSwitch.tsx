'use client'

import useLang, { LanguageId } from '@/hooks/useLang'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'
import JavaScriptLogoColour from '@/components/icons/JavaScriptLogoColour'
import TypeScriptLogoColour from '@/components/icons/TypeScriptLogoColour'
import PythonColorLogo from '@/components/icons/PythonLogoColour'
import GoColorLogo from '@/components/icons/GoLogoColour'
import DartLogoNoTextColour from '@/components/icons/DartLogoNoTextColour'

const languages = [
  {
    name: 'javascript',
    icon: <JavaScriptLogoColour className={'size-8'} />,
  },
  {
    name: 'typescript',
    icon: <TypeScriptLogoColour className={'size-8'} />,
  },
  {
    name: 'python',
    icon: <PythonColorLogo className={'size-8'} />,
  },
  {
    name: 'go',
    icon: <GoColorLogo className={'size-8'} />,
  },
  {
    name: 'dart',
    icon: <DartLogoNoTextColour className={'size-8'} />,
  },
]

export const LanguageSwitch = () => {
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

import React, { Suspense } from 'react'
import JavaScriptLogoColour from '@/components/icons/JavaScriptLogoColour'
import TypeScriptLogoColour from '@/components/icons/TypeScriptLogoColour'
import PythonColorLogo from '@/components/icons/PythonLogoColour'
import GoColorLogo from '@/components/icons/GoLogoColour'
import DartLogoNoTextColour from '@/components/icons/DartLogoNoTextColour'
import { LanguageSwitchClient } from './LanguageSwitch.client'
import { Button } from '../ui/button'

const languages: { name: string; icon: React.ReactNode }[] = [
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
  return (
    <Suspense
      fallback={
        <ul className="flex gap-x-4">
          {languages.map(({ name, icon }) => (
            <li
              key={name}
              className={
                'cursor-pointer grayscale transition-all hover:grayscale-0'
              }
            >
              <Button variant="unstyled">
                {icon}
                <span className="sr-only">set language to {name}</span>
              </Button>
            </li>
          ))}
        </ul>
      }
    >
      <LanguageSwitchClient languages={languages} />
    </Suspense>
  )
}

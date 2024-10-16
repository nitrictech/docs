import React from 'react'
import JavaScriptLogoColour from './JavaScriptLogoColour'
import TypeScriptLogoColour from './TypeScriptLogoColour'
import PythonColorLogo from './PythonLogoColour'
import GoColorLogo from './GoLogoColour'
import DartLogoNoTextColour from './DartLogoNoTextColour'
import { cn } from '@/lib/utils'

interface LanguageIconProps {
  name: string
  className?: string
}

const icons: Record<string, React.FC<{ className: string }>> = {
  javascript: JavaScriptLogoColour,
  typescript: TypeScriptLogoColour,
  python: PythonColorLogo,
  go: GoColorLogo,
  dart: DartLogoNoTextColour,
}

export const LanguageIcon: React.FC<LanguageIconProps> = ({
  name,
  className,
}) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    return <span>Unknown language</span>
  }

  return <IconComponent className={cn(`size-8`, className)} />
}

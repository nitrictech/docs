import Image from 'next/image'

import { Heading } from '@/components/Heading'
import logoAws from '@/images/logos/aws.svg'
import logoAwsLight from '@/images/logos/aws-dark-text.svg'
import logoAzure from '@/images/logos/azure.svg'
import logoGCP from '@/images/logos/gcp.svg'
import Link from 'next/link'
import {
  ArrowRightIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { CloudIcon } from '@heroicons/react/24/outline'

const providers = [
  {
    href: '/reference/providers',
    name: 'Overview',
    description: 'Learn about our Nitric providers',
    icon: CloudIcon,
  },
  {
    href: '/reference/providers/custom/building-custom-provider',
    name: 'Build',
    description: 'Building a custom provider',
    icon: WrenchScrewdriverIcon,
  },
  {
    href: '/reference/providers/custom/extend-standard-provider',
    name: 'Extend',
    description: 'Extending a standard provider',
    icon: Cog8ToothIcon,
  },
  {
    href: '/reference/providers/aws',
    name: 'AWS',
    description: 'View full reference for AWS',
    logo: logoAws,
    style: 'hidden dark:flex',
  },
  {
    href: '/reference/providers/aws',
    name: 'AWS',
    description: 'View full reference for AWS',
    logo: logoAwsLight,
    style: 'flex dark:hidden',
  },
  {
    href: '/reference/providers/gcp',
    name: 'Google Cloud',
    description: 'View full reference for GCP',
    logo: logoGCP,
  },
  {
    href: '/reference/providers/azure',
    name: 'Azure',
    description: 'View full reference for Azure',
    logo: logoAzure,
  },
]

export function Providers() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="providers">
        Providers
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {providers.map((provider) => (
          <Link
            href={provider.href}
            key={provider.name}
            className={`group relative flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 ${provider.style}`}
          >
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
            {provider.icon ? (
              <provider.icon className="h-10 w-10" />
            ) : (
              <Image
                src={provider.logo}
                alt={provider.name + ' Logo'}
                className={`h-10 w-10`}
                unoptimized
              />
            )}
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {provider.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {provider.description}
              </p>
            </div>
            <ArrowRightIcon className="h-5 w-5 -translate-x-1 transition-transform group-hover:translate-x-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}

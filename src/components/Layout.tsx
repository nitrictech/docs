import Link from 'next/link'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'
import { Note } from './mdx'
import { useVersions } from '@/lib/hooks/use-versions'

const experimentalRuntimes = ['go', 'csharp', 'jvm', 'python']

export function Layout({ children, sections = [], disableEditGithub = false }) {
  const {
    isNotLatest,
    currentVersion,
    currentSdk,
    currentSdkLabel,
    latestLink,
  } = useVersions()

  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
            <div className="mt-2 hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-6" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">
              {isNotLatest &&
                latestLink &&
                (!experimentalRuntimes.includes(currentSdk) ? (
                  <Note>
                    Note: You are viewing documentation for version{' '}
                    {currentVersion} of {currentSdkLabel}.{' '}
                    <Link href={latestLink}>View the latest version</Link>.
                  </Note>
                ) : (
                  <Note>
                    {currentSdkLabel} is in development for v1. Interested in
                    contributing or chatting with us?
                    <Link className="ml-1" href="https://nitric.io/chat">
                      Get in touch!
                    </Link>
                  </Note>
                ))}

              {children}
            </Prose>
          </main>
          <Footer disableEditGithub={disableEditGithub} />
        </div>
      </div>
    </SectionProvider>
  )
}

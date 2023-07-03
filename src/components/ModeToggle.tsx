import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-gray-800/5 dark:hover:bg-white/5"
      aria-label="Toggle dark mode"
      onClick={toggleMode}
    >
      <SunIcon className="h-5 w-5 stroke-zinc-900 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 stroke-gray dark:block" />
    </button>
  )
}

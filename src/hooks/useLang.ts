import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import useParams from './useParams'
import { set } from 'node_modules/cypress/types/lodash'

export type LanguageId =
  | 'javascript'
  | 'typescript'
  | 'dart'
  | 'python'
  | 'ruby'
  | 'java'
  | 'csharp'
  | 'go'
  | 'php'
  | 'rust'
  | 'swift'
  | 'kotlin'
  | 'scala'
  | 'r'
  | 'perl'
  | 'haskell'
  | 'lua'
  | 'shell'
  | 'sql'
  | 'plaintext'

const languages = ['javascript', 'python', 'go', 'typescript', 'dart']

const LOCAL_STORAGE_KEY = 'nitric.docs.selected.language'

const useLang = () => {
  const { searchParams, setParams } = useParams()

  const queryParamLang = searchParams.get('lang') as LanguageId

  const currentLanguage = languages.includes(queryParamLang)
    ? queryParamLang
    : languages[0]

  const setLanguage = useCallback(
    (id: LanguageId) => {
      // Apparently this nonsense is necessary to update the URL.
      //  See: https://github.com/vercel/next.js/discussions/47583
      const currentParams = new URLSearchParams(
        Array.from(searchParams.entries()),
      )

      if (!id) {
        setParams('lang', null)
      } else {
        setParams('lang', id)

        // set language in local storage
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, id)
        } catch (e) {
          // ignore
        }
      }
    },
    [searchParams],
  )

  useEffect(() => {
    // add data current lang to body to style based on language, used in hide/show blocks
    document.body.dataset.currentLang = currentLanguage

    // set query params from local storage if no query params are present
    if (!queryParamLang) {
      const localLang = localStorage.getItem(LOCAL_STORAGE_KEY) as LanguageId
      if (
        localLang &&
        languages.includes(localLang) &&
        localLang !== currentLanguage
      ) {
        setLanguage(localLang)
      }
    }
  }, [currentLanguage])

  return {
    languages,
    currentLanguage,
    setCurrentLanguage: setLanguage,
  }
}

export default useLang

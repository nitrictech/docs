import { Version } from '@/nav.config'
import { useRouter } from 'next/router'

const versionRegex = /\/reference\/[^\/]+\/v\d+/

const SDK_LABEL_MAP = {
  go: 'Go',
  jvm: 'JVM',
  nodejs: 'Node.js',
  python: 'Python',
  csharp: 'C# .NET',
  dart: 'Dart',
}

export const useVersions = (versions?: Version[]) => {
  const router = useRouter()

  const latestVersion = versions ? [...versions].sort().pop() : ''

  const isReferenceDocs = router.pathname.startsWith('/reference/')
  const match = router.pathname.match(versionRegex)
  const isNotLatest = isReferenceDocs && !!match
  const currentVersion =
    !isNotLatest && versions?.length
      ? latestVersion
      : match
      ? match[0].split('/').pop()
      : undefined
  const currentSdk = router.pathname.split('/reference/')[1]?.split('/')[0]

  const latestLink = `/reference/${currentSdk}`

  return {
    isReferenceDocs,
    currentVersion,
    latestVersion,
    currentSdk,
    currentSdkLabel: SDK_LABEL_MAP[currentSdk],
    isNotLatest,
    latestLink,
  }
}

interface Language {
  label: string
  value: string
  icon: string
}

export const LANGUAGES: Language[] = [
  {
    label: 'Node.js',
    value: 'node',
    icon: '/img/node-logo.svg',
  },
  { label: 'Python', value: 'python', icon: '/img/python-logo.svg' },
  { label: 'Java', value: 'java', icon: '/img/java-logo.svg' },
  { label: 'Go', value: 'go', icon: '/img/go-logo.svg' },
]

export const isMobile =
  typeof navigator !== 'undefined' &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )

export const discordChatUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://nitric.io/chat'
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/chat`
      : `http://localhost:3000/chat`

export const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://nitric.io'
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'}`

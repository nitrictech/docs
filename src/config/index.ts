import { CommandLineIcon, HomeIcon } from '@heroicons/react/24/outline'
import { FaNodeJs, FaPython, FaJava, FaAws, FaGithub } from 'react-icons/fa'
import { SiDart, SiGo } from 'react-icons/si'
import { NavEntry } from './types'
import { NodeReference } from './reference/node'
import { PyReference } from './reference/python'
import { DartReference } from './reference/dart'
import { GoReference } from './reference/go'

export const navigation: NavEntry[] = [
  {
    title: 'Introduction',
    href: '/',
  },
  {
    title: 'Concepts',
    items: [
      {
        title: 'Infrastructure from Code',
        href: '/infrastructure-from-code',
      },
      {
        title: 'Project',
        href: '/project',
      },
      {
        title: 'Service',
        href: '/service',
      },
      {
        title: 'Resource',
        href: '/resource',
      },
      {
        title: 'Provider',
        href: '/provider',
      },
      {
        title: 'Stack',
        href: '/stack',
      },
    ],
  },
  {
    title: 'Basics',
    items: [
      {
        title: 'Installation',
        href: '/getting-started/installation',
      },
      {
        title: 'Configuration',
        href: '/getting-started/configuration',
      },
      {
        title: 'Project Structure',
        href: '/getting-started/project-structure',
      },
      {
        title: 'Local Development',
        href: '/getting-started/local-development',
      },
      {
        title: 'Security',
        href: '/getting-started/security',
      },
      {
        title: 'Deployment',
        href: '/getting-started/deploying',
      },
    ],
  },
  {
    title: 'Get Started',
    items: [
      {
        title: 'Node.js',
        icon: FaNodeJs,
        items: [
          {
            title: 'API',
            href: '/getting-started/node/quick-start',
          },
          {
            title: 'Todo App',
            href: '/getting-started/node/to-do',
          },
        ],
      },
      {
        title: 'Python',
        icon: FaPython,
        items: [
          {
            title: 'API',
            href: '/getting-started/python/quick-start',
          },
          {
            title: 'Todo App',
            href: '/getting-started/python/to-do',
          },
        ],
      },
      {
        title: 'Go',
        icon: SiGo,
        items: [
          {
            title: 'API',
            href: '/getting-started/go/quick-start',
          },
          {
            title: 'Todo App',
            href: '/getting-started/go/to-do',
          },
        ],
      },
      {
        title: 'Dart',
        icon: SiDart,
        items: [
          {
            title: 'API',
            href: '/getting-started/dart/quick-start',
          },
          {
            title: 'Todo App',
            href: '/getting-started/dart/to-do',
          },
        ],
      },
    ],
  },
  {
    title: 'Deployment',
    items: [
      {
        title: 'Intro',
        href: '/getting-started/quick-start',
      },
      {
        title: 'AWS',
        href: '/getting-started/quick-start',
      },
      {
        title: 'GCP',
        href: '/getting-started/quick-start',
      },
      {
        title: 'Azure',
        href: '/getting-started/quick-start',
      },
      {
        title: 'Custom',
        href: '/getting-started/quick-start',
      },
      {
        title: 'CD/CD',
        href: '/getting-started/quick-start',
      },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        title: 'Node.js',
        href: '/getting-started/quick-start',
      },
      {
        title: 'Python',
        href: '/getting-started/quick-start',
      },
      {
        title: 'Go',
        href: '/getting-started/quick-start',
      },
      {
        title: 'Dart',
        href: '/getting-started/quick-start',
      },
    ],
  },
  {
    title: 'Extension',
    items: [
      {
        title: 'Overview',
        href: '/extension/overview',
      },
      {
        title: 'Provider Extension',
        href: '/extension/provider-extension',
      },
      {
        title: 'Custom Providers',
        href: '/extension/custom-providers',
      },
      {
        title: 'Custom Containers',
        href: '/extension/custom-containers',
      },
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        title: 'CLI',
        icon: CommandLineIcon,
        items: [
          {
            title: 'Overview',
            href: '/reference/cli',
          },
          {
            title: 'Installation',
            href: '/reference/cli/installation',
          },
          {
            title: 'Local Development',
            href: '/reference/cli/local-development',
          },
          {
            title: 'Stacks',
            href: '/reference/cli/stacks',
          },
        ],
      },
      NodeReference,
      PyReference,
      GoReference,
      DartReference,
      {
        title: 'Env Vars',
        href: '/reference/env-vars',
      },
      {
        title: 'Examples',
        href: '/reference/examples',
      },
      {
        title: 'Preview Features',
        href: '/reference/preview-features',
      },
    ],
  },
  {
    title: 'FAQ',
    items: [
      {
        title: 'How is nitric different from Pulumi?',
        href: '/faq/nitric-vs-pulumi',
      },
      {
        title: 'How is nitric different from Terraform?',
        href: '/faq/nitric-vs-terraform',
      },
      {
        title: 'Comparisons with other tools/frameworks',
        href: '/faq/comparisons',
      },
      {
        title: 'How to migrate between clouds',
        href: '/faq/migrate-between-clouds',
      },
      {
        title: 'Ask a question',
        href: '/faq/ask-a-question',
      },
    ],
  },
]

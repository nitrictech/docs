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
    title: 'Guides',
    href: '/guides',
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
        href: '/concepts/project',
      },
      {
        title: 'Service',
        href: '/concepts/service',
      },
      {
        title: 'Resource',
        href: '/concepts/resource',
      },
      {
        title: 'Provider',
        href: '/concepts/provider',
      },
      {
        title: 'Stack',
        href: '/concepts/stack',
      },
    ],
  },
  {
    title: 'Basics',
    items: [
      {
        title: 'Installation',
        href: '/basics/installation',
      },
      {
        title: 'Configuration',
        href: '/basics/configuration',
      },
      {
        title: 'Project Structure',
        href: '/basics/project-structure',
      },
      {
        title: 'Local Development',
        href: '/basics/local-development',
      },
      {
        title: 'Security',
        href: '/basics/security',
      },
      {
        title: 'Deployment',
        href: '/basics/deploying',
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
            href: '/basics/node/quick-start',
          },
          {
            title: 'Todo App',
            href: '/basics/node/to-do',
          },
        ],
      },
      {
        title: 'Python',
        icon: FaPython,
        items: [
          {
            title: 'API',
            href: '/basics/python/quick-start',
          },
          {
            title: 'Todo App',
            href: '/basics/python/to-do',
          },
        ],
      },
      {
        title: 'Go',
        icon: SiGo,
        items: [
          {
            title: 'API',
            href: '/basics/go/quick-start',
          },
          {
            title: 'Todo App',
            href: '/basics/go/to-do',
          },
        ],
      },
      {
        title: 'Dart',
        icon: SiDart,
        items: [
          {
            title: 'API',
            href: '/basics/dart/quick-start',
          },
          {
            title: 'Todo App',
            href: '/basics/dart/to-do',
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
        href: '/basics/quick-start',
      },
      {
        title: 'AWS',
        href: '/basics/quick-start',
      },
      {
        title: 'GCP',
        href: '/basics/quick-start',
      },
      {
        title: 'Azure',
        href: '/basics/quick-start',
      },
      {
        title: 'Custom',
        href: '/basics/quick-start',
      },
      {
        title: 'CD/CD',
        href: '/basics/quick-start',
      },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        title: 'Node.js',
        href: '/basics/quick-start',
      },
      {
        title: 'Python',
        href: '/basics/quick-start',
      },
      {
        title: 'Go',
        href: '/basics/quick-start',
      },
      {
        title: 'Dart',
        href: '/basics/quick-start',
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

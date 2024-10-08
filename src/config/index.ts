import { CommandLineIcon, HomeIcon } from '@heroicons/react/24/outline'
import {
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub,
  FaCode,
  FaToggleOn,
  FaInternetExplorer,
  FaBrain,
  FaDatabase,
  FaBullhorn,
  FaFileArchive,
  FaClock,
  FaComments,
  FaLock,
  FaArchive,
  FaGlobe,
} from 'react-icons/fa'
import { SiDart, SiGo, SiPulumi, SiTerraform } from 'react-icons/si'
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
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        href: '/basics/installation',
      },
      {
        title: 'Basics',
        items: [
          {
            title: 'Project Structure',
            href: '/basics/project-structure',
          },
          {
            title: 'Project Config',
            href: '/basics/configuration',
          },
          {
            title: 'Local Development',
            href: '/basics/local-development',
          },
          {
            title: 'Deployment',
            href: '/basics/deployment',
          },
        ],
      },
      {
        title: 'Nitric Concepts',
        items: [
          {
            title: 'Why Nitric',
            href: '/concepts/why-nitric',
          },
          {
            title: 'Infrastructure from Code',
            href: '/concepts/infrastructure-from-code',
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
            title: 'Security',
            href: '/concepts/security',
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
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'APIs',
        icon: FaGlobe,
        href: '/apis',
      },
      {
        title: 'Batch (AI/ML/HPC)',
        icon: FaBrain,
        href: '/batch',
      },
      {
        title: 'Schedules',
        icon: FaClock,
        href: '/schedules',
      },
      {
        title: 'Websockets',
        icon: FaComments,
        href: '/websockets',
      },
      {
        title: 'Storage',
        icon: FaArchive,
        href: '/storage',
      },
      {
        title: 'SQL Databases',
        icon: FaDatabase,
        href: '/sql',
      },
      {
        title: 'Async Messaging',
        icon: FaBullhorn,
        href: '/messaging',
      },
      {
        title: 'Secrets',
        icon: FaLock,
        href: '/secrets',
      },
    ],
  },
  {
    title: 'Providers',
    items: [
      {
        title: 'Pulumi',
        icon: SiPulumi,
        items: [
          {
            title: 'AWS',
            icon: FaAws,
            href: '/providers/pulumi/aws',
          },
          {
            title: 'Google Cloud',
            icon: FaAws,
            href: '/providers/pulumi/gcp',
          },
          {
            title: 'Azure',
            icon: FaAws,
            href: '/providers/pulumi/azure',
          },
        ],
      },
      {
        title: 'Terraform',
        icon: SiTerraform,
        items: [
          {
            title: 'AWS',
            icon: FaAws,
            href: '/providers/terraform/aws',
          },
          {
            title: 'Google Cloud',
            icon: FaAws,
            href: '/providers/terraform/gcp',
          },
        ],
      },
      {
        title: 'Custom',
        icon: FaCode,
        items: [
          {
            title: 'Overview',
            href: '/providers/custom',
          },
          {
            title: 'Provider Extension',
            href: '/providers/custom/extend',
          },
          {
            title: 'Custom Providers',
            href: '/providers/custom/create',
          },
        ],
      },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        title: 'Overview',
        href: '/reference/languages',
      },
      NodeReference,
      PyReference,
      GoReference,
      DartReference,
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        title: 'CLI',
        icon: CommandLineIcon,
        href: '/reference/cli',
      },
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
        icon: FaToggleOn,
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

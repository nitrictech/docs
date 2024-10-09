import {
  CommandLineIcon,
  ArchiveBoxIcon,
  CircleStackIcon,
  ClockIcon,
  CpuChipIcon,
  CursorArrowRippleIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  LockClosedIcon,
  CodeBracketIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import {
  SiGooglecloud,
  SiMicrosoftazure,
  SiPulumi,
  SiTerraform,
} from 'react-icons/si'
import { NavEntry } from './types'
import { NodeReference } from './reference/node'
import { PyReference } from './reference/python'
import { DartReference } from './reference/dart'
import { GoReference } from './reference/go'
import { FaAws } from 'react-icons/fa'

export const navigation: NavEntry[] = [
  {
    title: 'Introduction',
    href: '/',
  },
  {
    title: 'Get Started',
    items: [
      {
        title: 'Installation',
        href: '/get-started/installation',
      },
      {
        title: 'Quick Start',
        href: '/get-started/quickstart',
      },
      {
        title: 'Guides',
        href: '/guides',
      },
      {
        title: 'Foundations',
        items: [
          {
            title: 'Why Nitric',
            href: '/get-started/foundations/why-nitric',
          },
          {
            title: 'Projects',
            items: [
              {
                title: 'Overview',
                href: '/get-started/foundations/projects',
              },
              {
                title: 'Configuration',
                href: '/get-started/foundations/projects/configuration',
              },
            ],
          },
          {
            title: 'Infrastructure',
            items: [
              {
                title: 'Overview',
                href: '/get-started/foundations/infrastructure',
              },
              {
                title: 'Services',
                href: '/get-started/foundations/infrastructure/services',
              },
              {
                title: 'Resources',
                href: '/get-started/foundations/infrastructure/resources',
              },
              {
                title: 'Security',
                href: '/get-started/foundations/infrastructure/security',
              },
            ],
          },
          {
            title: 'Local Development',
            href: '/get-started/foundations/projects/local-development',
          },
          {
            title: 'Deployment',
            items: [
              {
                title: 'Overview',
                href: '/get-started/foundations/deployment',
              },
              {
                title: 'Providers',
                href: '/get-started/foundations/providers',
              },
              {
                title: 'Stacks',
                href: '/get-started/foundations/stacks',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Build',
    items: [
      {
        title: 'APIs',
        icon: GlobeAltIcon,
        href: '/apis',
      },
      {
        title: 'Batch (AI/ML/HPC)',
        icon: CpuChipIcon,
        href: '/batch',
      },
      {
        title: 'Schedules',
        icon: ClockIcon,
        href: '/schedules',
      },
      {
        title: 'Websockets',
        icon: CursorArrowRippleIcon,
        href: '/websockets',
      },
      {
        title: 'Storage',
        icon: ArchiveBoxIcon,
        href: '/storage',
      },
      {
        title: 'SQL Databases',
        icon: CircleStackIcon,
        href: '/sql',
      },
      {
        title: 'Async Messaging',
        icon: MegaphoneIcon,
        href: '/messaging',
      },
      {
        title: 'Secrets',
        icon: LockClosedIcon,
        href: '/secrets',
      },
    ],
  },
  {
    title: 'Deploy',
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
            icon: SiGooglecloud,
            href: '/providers/pulumi/gcp',
          },
          {
            title: 'Azure',
            icon: SiMicrosoftazure,
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
            icon: SiGooglecloud,
            href: '/providers/terraform/gcp',
          },
        ],
      },
      {
        title: 'Custom',
        icon: CodeBracketIcon,
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
        title: 'Project Config (nitric.yaml)',
        href: '/reference/project/configuration',
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
        icon: BeakerIcon,
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

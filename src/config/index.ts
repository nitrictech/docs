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
  DocumentDuplicateIcon,
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
import { FaAws, FaSitemap } from 'react-icons/fa'

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
                breadcrumbRoot: true,
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
                breadcrumbRoot: true,
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
            href: '/get-started/foundations/deployment',
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
        icon: DocumentDuplicateIcon,
        href: '/storage',
      },
      {
        title: 'Key/Value Stores',
        icon: ArchiveBoxIcon,
        href: '/keyvalue',
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
        title: 'Overview',
        href: '/providers',
      },
      {
        title: 'Pulumi',
        icon: SiPulumi,
        items: [
          {
            title: 'Overview',
            href: '/providers/pulumi',
            breadcrumbRoot: true,
          },
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
            title: 'Overview',
            href: '/providers/terraform',
            breadcrumbRoot: true,
          },
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
        title: 'Service Mappings',
        icon: FaSitemap,
        items: [
          {
            title: 'AWS',
            items: [
              {
                title: 'APIs',
                href: '/providers/mappings/aws/apis',
              },
              {
                title: 'Batch',
                href: '/providers/mappings/aws/batch',
              },
              {
                title: 'Schedules',
                href: '/providers/mappings/aws/schedules',
              },
              {
                title: 'Websockets',
                href: '/providers/mappings/aws/websockets',
              },
              {
                title: 'Storage',
                href: '/providers/mappings/aws/storage',
              },
              {
                title: 'Key/Value Stores',
                href: '/providers/mappings/aws/keyvalue',
              },
              {
                title: 'SQL Databases',
                href: '/providers/mappings/aws/sql',
              },
              {
                title: 'Topics',
                href: '/providers/mappings/aws/topics',
              },
              {
                title: 'Queues',
                href: '/providers/mappings/aws/queues',
              },
              {
                title: 'Secrets',
                href: '/providers/mappings/aws/secrets',
              },
            ],
          },
          {
            title: 'Azure',
            items: [
              {
                title: 'APIs',
                href: '/providers/mappings/azure/apis',
              },
              {
                title: 'Schedules',
                href: '/providers/mappings/azure/schedules',
              },
              {
                title: 'Storage',
                href: '/providers/mappings/azure/storage',
              },
              {
                title: 'Key/Value Stores',
                href: '/providers/mappings/azure/keyvalue',
              },
              {
                title: 'SQL Databases',
                href: '/providers/mappings/azure/sql',
              },
              {
                title: 'Topics',
                href: '/providers/mappings/azure/topics',
              },
              {
                title: 'Queues',
                href: '/providers/mappings/azure/queues',
              },
              {
                title: 'Secrets',
                href: '/providers/mappings/azure/secrets',
              },
            ],
          },
          {
            title: 'Google Cloud',
            items: [
              {
                title: 'APIs',
                href: '/providers/mappings/gcp/apis',
              },
              {
                title: 'Batch',
                href: '/providers/mappings/gcp/batch',
              },
              {
                title: 'Schedules',
                href: '/providers/mappings/gcp/schedules',
              },
              {
                title: 'Storage',
                href: '/providers/mappings/gcp/storage',
              },
              {
                title: 'Key/Value Stores',
                href: '/providers/mappings/gcp/keyvalue',
              },
              {
                title: 'SQL Databases',
                href: '/providers/mappings/gcp/sql',
              },
              {
                title: 'Topics',
                href: '/providers/mappings/gcp/topics',
              },
              {
                title: 'Queues',
                href: '/providers/mappings/gcp/queues',
              },
              {
                title: 'Secrets',
                href: '/providers/mappings/gcp/secrets',
              },
            ],
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
            breadcrumbRoot: true,
          },
          {
            title: 'Provider Extension',
            href: '/providers/custom/extend',
          },
          {
            title: 'Custom Providers',
            href: '/providers/custom/create',
          },
          {
            title: 'Install with Docker',
            href: '/providers/custom/docker',
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
        title: 'Preview Features',
        icon: BeakerIcon,
        href: '/reference/preview-features',
      },
      {
        title: 'Other Config',
        items: [
          {
            title: 'Env Vars',
            href: '/reference/env',
          },
          {
            title: 'Custom Service Containers',
            href: '/reference/custom-containers',
          },
        ],
      },
    ],
  },
  {
    title: 'Misc',
    items: [
      {
        title: 'Examples',
        href: 'https://github.com/nitrictech/examples',
      },
      {
        title: 'FAQ',
        href: '/misc/faq',
      },
      {
        title: 'Contributions',
        href: '/misc/contributions',
      },
      {
        title: 'Support',
        href: '/misc/support',
      },
    ],
  },
]

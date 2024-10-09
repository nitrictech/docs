import {
  ArchiveBoxIcon,
  CircleStackIcon,
  ClockIcon,
  CloudIcon,
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
  HomeIcon,
  LockClosedIcon,
  MegaphoneIcon,
  ServerIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  Square3Stack3DIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  LifebuoyIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon,
  CubeIcon,
  Cog6ToothIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'
import { FaNodeJs, FaPython, FaJava, FaAws, FaGithub } from 'react-icons/fa'
import {
  SiCsharp,
  SiPulumi,
  SiDart,
  SiGooglecloud,
  SiMicrosoftazure,
  SiTerraform,
} from 'react-icons/si'
import { BiLogoGoLang } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { RefreshCcwIcon, ToggleLeftIcon } from 'lucide-react'

export const topLevelNavigation = [
  { text: 'Nitric.io', href: 'https://nitric.io' },
]

export type Version = 'v0' | 'v1'

export interface DocNavGroup {
  title?: string
  showDividerAbove?: boolean
  disableAutoPrefix?: boolean
  links: {
    title: string
    href: string
    badge?: string
    icon?: any
    versions?: Version[]
  }[]
}

interface FullNav {
  [startsWithPath: string]: DocNavGroup[]
}

const buildingBlockLinks = [
  {
    title: 'APIs',
    href: '/apis',
    icon: GlobeAltIcon,
  },
  {
    title: 'HTTP',
    href: '/http',
    icon: ServerIcon,
  },
  {
    title: 'AI & Batch',
    href: '/batch',
    icon: CpuChipIcon,
  },
  {
    title: 'Key Value Stores',
    href: '/keyvalue',
    icon: ArchiveBoxIcon,
  },
  {
    title: 'SQL Databases',
    href: '/sql',
    icon: CircleStackIcon,
  },
  {
    title: 'Schedules',
    href: '/schedules',
    icon: ClockIcon,
  },
  {
    title: 'Storage',
    href: '/storage',
    icon: CircleStackIcon,
  },
  {
    title: 'Messages',
    href: '/messaging',
    icon: MegaphoneIcon,
  },
  {
    title: 'Secrets',
    href: '/secrets',
    icon: LockClosedIcon,
  },
  {
    title: 'Websockets',
    href: '/websockets',
    icon: ChatBubbleLeftRightIcon,
  },
]

/**
 * RULES:
 * 1. put older version of reference docs higher in the array.
 */

const fullNav: FullNav = {
  docs: [
    {
      links: [
        {
          title: 'Home',
          href: '/',
          icon: HomeIcon,
        },
        {
          title: 'Concepts',
          href: '/concepts/introduction',
          icon: Square3Stack3DIcon,
        },
        {
          title: 'Get Started',
          href: '/getting-started/quickstart',
          icon: RocketLaunchIcon,
        },
        {
          title: 'Guides',
          href: '/guides',
          icon: BookOpenIcon,
        },
      ],
    },
    {
      title: 'Using Nitric',
      links: [
        {
          title: 'Nitric CLI',
          href: '/reference/cli',
          icon: CommandLineIcon,
        },
      ],
    },
    {
      showDividerAbove: true,
      links: buildingBlockLinks,
    },
    {
      showDividerAbove: true,
      links: [
        {
          title: 'Custom Container Builds',
          href: '/reference/custom-containers',
          icon: CubeIcon,
        },
        {
          title: 'Environment Variables',
          href: '/reference/env',
          icon: Cog6ToothIcon,
        },
        {
          title: 'Preview Features',
          href: '/reference/preview-features',
          icon: ToggleLeftIcon,
        },
      ],
    },
    {
      title: 'Library Reference',
      links: [
        {
          title: 'Node.js',
          href: '/reference/nodejs',
          icon: FaNodeJs,
          versions: ['v1', 'v0'],
        },
        {
          title: 'Python',
          href: '/reference/python',
          icon: FaPython,
          versions: ['v1', 'v0'],
        },
        {
          title: 'Go',
          href: '/reference/go',
          badge: 'Experimental 🧪',
          icon: BiLogoGoLang,
          versions: ['v1', 'v0'],
        },
        {
          title: 'Dart',
          badge: 'Experimental 🧪',
          href: '/reference/dart',
          icon: SiDart,
        },
        {
          title: 'C# .NET',
          badge: 'Coming soon 🚀',
          href: '/reference/csharp/v0',
          icon: SiCsharp,
        },
        {
          title: 'JVM',
          badge: 'Coming soon 🚀',
          href: '/reference/jvm/v0',
          icon: FaJava,
        },
      ],
    },
    {
      title: 'Cloud Providers',
      links: [
        {
          title: 'Overview',
          href: '/reference/providers',
          icon: CloudIcon,
        },
        {
          title: 'AWS',
          href: '/reference/providers/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/gcp',
          icon: SiGooglecloud,
        },
        {
          title: 'Azure',
          href: '/reference/providers/azure',
          icon: SiMicrosoftazure,
        },
        {
          title: 'Custom Providers',
          href: '/reference/providers/custom/building-custom-provider',
          icon: WrenchScrewdriverIcon,
        },
      ],
    },
    {
      title: 'Integrations',
      links: [
        {
          title: 'Pulumi',
          href: '/reference/providers/pulumi',
          icon: SiPulumi,
        },
        {
          title: 'Terraform',
          href: '/reference/providers/terraform',
          icon: SiTerraform,
        },
      ],
    },
    {
      title: 'Additional Resources',
      links: [
        {
          title: 'FAQs',
          href: '/faq',
          icon: QuestionMarkCircleIcon,
        },
        {
          title: 'Support',
          href: '/support',
          icon: LifebuoyIcon,
        },
        {
          title: 'Contributions',
          href: '/contributions',
          icon: CloudArrowUpIcon,
        },
        {
          title: 'Upgrade from v0',
          href: '/support/upgrade',
          icon: RefreshCcwIcon,
        },
      ],
    },
  ],
  concepts: [
    {
      links: [
        {
          title: 'What is Nitric?',
          href: '/concepts/introduction',
        },
        {
          title: 'Infrastructure from Code (IfC)',
          href: '/concepts/infrastructure-from-code',
        },
        {
          title: 'How Nitric works',
          href: '/concepts/how-nitric-works',
        },
        {
          title: 'What You Can Build with Nitric',
          href: '/concepts/build-with-nitric',
        },
        {
          title: 'How Devs Use Nitric',
          href: '/concepts/how-devs-use-nitric',
        },
        {
          title: 'How Ops Use Nitric',
          href: '/concepts/how-ops-use-nitric',
        },
        {
          title: 'Extensibility',
          href: '/concepts/extensibility',
        },
        {
          title: 'IAM and Access Control',
          href: '/concepts/access-control',
        },
        {
          title: 'Languages',
          href: '/concepts/language-support',
        },
        {
          title: 'CI/CD Pipeline',
          href: '/concepts/cicd',
        },
        {
          title: 'Project Structure',
          href: '/concepts/project-structure',
        },
      ],
    },
    {
      title: 'Comparisons',
      links: [
        {
          title: 'Overview',
          href: '/concepts/comparison',
        },
        {
          title: 'AWS CDK',
          href: '/concepts/comparison/aws-cdk',
        },
        {
          title: 'AWS SAM',
          href: '/concepts/comparison/aws-sam',
        },
        {
          title: 'GCP Deployment Manager',
          href: '/concepts/comparison/gcp-deployment-manager',
        },
        {
          title: 'Azure Resource Manager',
          href: '/concepts/comparison/bicep',
        },
        {
          title: 'Pulumi',
          href: '/concepts/comparison/pulumi',
        },
        {
          title: 'Terraform',
          href: '/concepts/comparison/terraform',
        },
        {
          title: 'SST',
          href: '/concepts/comparison/sst',
        },
        {
          title: 'Encore',
          href: '/concepts/comparison/encore',
        },
        {
          title: 'Wing',
          href: '/concepts/comparison/winglang',
        },
        {
          title: 'Ampt',
          href: '/concepts/comparison/ampt',
        },
      ],
    },
    {
      title: 'Next steps',
      links: [
        {
          title: 'Get started with Nitric',
          href: '/getting-started/quickstart',
        },
      ],
    },
  ],
  ['getting-started']: [
    {
      links: [
        {
          title: 'Installation',
          href: '/getting-started/installation',
        },
        {
          title: 'Quickstart',
          href: '/getting-started/quickstart',
        },
        {
          title: 'Local Dashboard',
          href: '/getting-started/local-dashboard',
        },
        {
          title: 'Resource Best Practices',
          href: '/getting-started/resources-overview',
        },
        {
          title: 'Deployment',
          href: '/getting-started/deployment',
        },
      ],
    },
    {
      title: 'Next Steps',
      links: [
        {
          title: 'Check out our Guides',
          href: '/guides',
        },
      ],
    },
  ],
  ['guides/nodejs']: [
    {
      links: [
        {
          title: 'Debugging',
          href: '/guides/nodejs/debugging',
        },
        {
          title: 'Testing',
          href: '/guides/nodejs/testing',
        },
        {
          title: 'REST API',
          href: '/guides/nodejs/serverless-rest-api-example',
        },
        {
          title: 'GraphQL',
          href: '/guides/nodejs/graphql',
        },
        {
          title: 'Express.js',
          href: '/guides/nodejs/expressjs',
        },
        {
          title: 'Fastify',
          href: '/guides/nodejs/fastify',
        },
        {
          title: 'Nest.js',
          href: '/guides/nodejs/nestjs',
        },
        {
          title: 'Next.js',
          href: '/guides/nodejs/api-with-nextjs',
        },
        {
          title: 'Stripe',
          href: '/guides/nodejs/stripe',
        },
        {
          title: 'Twilio',
          href: '/guides/nodejs/twilio',
        },

        {
          title: 'Uptime Monitor',
          href: '/guides/nodejs/uptime',
        },
        {
          title: 'Websockets',
          href: '/guides/nodejs/websockets',
        },
      ],
    },
    {
      title: 'Auth',
      links: [
        {
          title: 'Secure API with Auth0',
          href: '/guides/nodejs/secure-api-auth0',
        },
        {
          title: 'Secure APIs with AWS Cognito',
          href: '/guides/nodejs/amazon-cognito',
        },
      ],
    },
    {
      title: 'Databases',
      links: [
        {
          title: 'Nitric SQL with Drizzle',
          href: '/guides/nodejs/nitric-and-drizzle',
        },
        {
          title: 'Nitric SQL with Prisma',
          href: '/guides/nodejs/nitric-and-prisma',
        },
        {
          title: 'Using an external Database',
          href: '/guides/nodejs/byo-database',
        },
        {
          title: 'Supabase',
          href: '/guides/nodejs/nitric-and-supabase',
        },
        {
          title: 'PlanetScale and Prisma',
          href: '/guides/nodejs/serverless-api-with-planetscale-and-prisma',
        },
      ],
    },
  ],
  ['guides/python']: [
    {
      links: [
        {
          title: 'REST API',
          href: '/guides/python/serverless-rest-api-example',
        },
        {
          title: 'GraphQL',
          href: '/guides/python/graphql',
        },
        {
          title: 'Visualising Data',
          href: '/guides/python/create-histogram',
        },
        {
          title: 'Predictive Text API using Tensorflow',
          href: '/guides/python/text-prediction',
        },
        {
          title: 'Scheduled reports with Google Sheets and Google Drive',
          href: '/guides/python/scheduled-report',
        },
      ],
    },
  ],
  ['guides/dart']: [
    {
      links: [
        {
          title: 'REST API',
          href: '/guides/dart/serverless-rest-api-example',
        },
        {
          title: 'Flutter Web',
          href: '/guides/dart/flutter',
        },
      ],
    },
  ],
  ['guides/jvm']: [
    {
      links: [
        {
          title: 'REST API',
          href: '/guides/jvm/serverless-rest-api-example',
        },
      ],
    },
  ],
  ['guides/go']: [
    {
      links: [
        {
          title: 'REST API',
          href: '/guides/go/serverless-rest-api-example',
        },
      ],
    },
  ],
  ['guides/terraform']: [
    {
      links: [
        {
          title: 'AWS S3 Server-side Encryption',
          href: '/guides/terraform/s3-encryption',
        },
        {
          title: 'AWS S3 Replication',
          href: '/guides/terraform/s3-replicate',
        },
        {
          title: 'AWS API Gateway Throttle',
          href: '/guides/terraform/api-gateway-throttle',
        },
      ],
    },
  ],
  ['guides/deploying']: [
    {
      links: [
        {
          title: 'Using GitHub Actions',
          href: '/guides/deploying/github-actions',
        },
        {
          title: 'Using GitLab CI',
          href: '/guides/deploying/gitlab-ci',
        },
        {
          title: 'Using Azure Pipelines',
          href: '/guides/deploying/azure-pipelines',
        },
        {
          title: 'Using Google Cloud Build',
          href: '/guides/deploying/google-cloud-build',
        },
      ],
    },
  ],
  guides: [
    {
      links: [
        {
          title: 'Node.js Guides',
          href: '/guides/nodejs',
          icon: FaNodeJs,
        },
        {
          title: 'Python Guides',
          href: '/guides/python',
          icon: FaPython,
        },
        {
          title: 'Dart Guides',
          href: '/guides/dart',
          icon: SiDart,
        },
        // {
        //   title: 'C# .NET Guides',
        //   href: '/guides/csharp',
        //   icon: SiCsharp,
        // },
        {
          title: 'Go Guides',
          href: '/guides/go',
          icon: BiLogoGoLang,
        },
        {
          title: 'JVM Guides',
          href: '/guides/jvm',
          icon: FaJava,
        },
        {
          title: 'CI/CD Guides',
          href: '/guides/deploying',
          icon: BoltIcon,
        },
        {
          title: 'Terraform Guides',
          href: '/guides/terraform',
          icon: SiTerraform,
        },
        {
          title: 'Examples',
          href: '/guides/examples',
          icon: FaGithub,
        },
      ],
    },
  ],
  apis: [
    {
      links: [
        {
          title: 'Overview',
          href: '/apis',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/apis'),
    },
  ],
  http: [
    {
      links: [
        {
          title: 'Overview',
          href: '/http',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/http'),
    },
  ],
  batch: [
    {
      links: [
        {
          title: 'Overview',
          href: '/batch',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/batch'),
    },
  ],
  keyvalue: [
    {
      links: [
        {
          title: 'Overview',
          href: '/keyvalue',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/keyvalue'),
    },
  ],
  schedules: [
    {
      links: [
        {
          title: 'Overview',
          href: '/schedules',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/schedules'),
    },
  ],
  storage: [
    {
      links: [
        {
          title: 'Overview',
          href: '/storage',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/storage'),
    },
  ],
  sql: [
    {
      links: [
        {
          title: 'Overview',
          href: '/sql',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/sql'),
    },
  ],
  messaging: [
    {
      links: [
        {
          title: 'Overview',
          href: '/messaging',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/messaging'),
    },
  ],
  secrets: [
    {
      links: [
        {
          title: 'Overview',
          href: '/secrets',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/secrets'),
    },
  ],
  websockets: [
    {
      links: [
        {
          title: 'Overview',
          href: '/websockets',
        },
      ],
    },
    {
      title: 'More Building Blocks',
      links: buildingBlockLinks.filter((link) => link.href !== '/websockets'),
    },
  ],
  support: [
    {
      links: [
        {
          title: 'Support',
          href: '/support',
        },
        {
          title: 'Upgrade from v0',
          href: '/support/upgrade',
        },
      ],
    },
  ],
  ['reference/preview-features']: [
    {
      links: [
        {
          title: 'Overview',
          href: '/reference/preview-features',
        },
      ],
    },
    {
      title: 'Current Preview Features',
      links: [
        {
          title: 'Docker Providers',
          href: '/reference/providers/install/docker',
        },
        {
          title: 'SQL Databases',
          href: '/sql',
        },
      ],
    },
  ],
  ['reference/nodejs/v0']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/nodejs/v0',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/nodejs/v0/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/nodejs/v0/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/nodejs/v0/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/nodejs/v0/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/nodejs/v0/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/nodejs/v0/api/api-patch',
        },
        {
          title: 'api.route()',
          href: '/reference/nodejs/v0/api/api-route',
        },
        {
          title: 'api.route.all()',
          href: '/reference/nodejs/v0/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/nodejs/v0/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/nodejs/v0/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/nodejs/v0/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/nodejs/v0/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/nodejs/v0/api/api-route-patch',
        },
      ],
    },
    {
      title: 'HTTP',
      links: [
        {
          title: 'http()',
          href: '/reference/nodejs/v0/http/http',
        },
      ],
    },
    {
      title: 'Collections',
      links: [
        {
          title: 'collection()',
          href: '/reference/nodejs/v0/collection/collection',
        },
        {
          title: 'collection.collection()',
          href: '/reference/nodejs/v0/collection/collection-collection',
        },
        {
          title: 'collection.query()',
          href: '/reference/nodejs/v0/collection/collection-query',
        },
        {
          title: 'collection.query.where()',
          href: '/reference/nodejs/v0/collection/collection-query-where',
        },
        {
          title: 'collection.query.limit()',
          href: '/reference/nodejs/v0/collection/collection-query-limit',
        },
        {
          title: 'collection.query.pagingFrom()',
          href: '/reference/nodejs/v0/collection/collection-query-pagingfrom',
        },
        {
          title: 'collection.query.fetch()',
          href: '/reference/nodejs/v0/collection/collection-query-fetch',
        },
        {
          title: 'collection.query.stream()',
          href: '/reference/nodejs/v0/collection/collection-query-stream',
        },
        {
          title: 'collection.doc()',
          href: '/reference/nodejs/v0/collection/collection-doc',
        },
        {
          title: 'collection.doc.get()',
          href: '/reference/nodejs/v0/collection/collection-doc-get',
        },
        {
          title: 'collection.doc.set()',
          href: '/reference/nodejs/v0/collection/collection-doc-set',
        },
        {
          title: 'collection.doc.delete()',
          href: '/reference/nodejs/v0/collection/collection-doc-delete',
        },
        {
          title: 'collection.doc.collection()',
          href: '/reference/nodejs/v0/collection/collection-doc-collection',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/nodejs/v0/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/nodejs/v0/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/nodejs/v0/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/nodejs/v0/queues/queue',
        },
        {
          title: 'queue.send()',
          href: '/reference/nodejs/v0/queues/queue-send',
        },
        {
          title: 'queue.receive()',
          href: '/reference/nodejs/v0/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/nodejs/v0/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/nodejs/v0/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/nodejs/v0/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/nodejs/v0/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/nodejs/v0/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/nodejs/v0/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/nodejs/v0/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/nodejs/v0/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/nodejs/v0/storage/bucket-files',
        },
        {
          title: 'file.exists()',
          href: '/reference/nodejs/v0/storage/bucket-file-exists',
        },
        {
          title: 'file.read()',
          href: '/reference/nodejs/v0/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/nodejs/v0/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/nodejs/v0/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/nodejs/v0/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/nodejs/v0/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/nodejs/v0/schedule/schedule',
        },
        {
          title: 'schedule.every()',
          href: '/reference/nodejs/v0/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/nodejs/v0/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/nodejs/v0/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/nodejs/v0/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/nodejs/v0/websocket/websocket-send',
        },
        {
          title: 'websocket.close()',
          href: '/reference/nodejs/v0/websocket/websocket-close',
        },
      ],
    },
  ],
  ['reference/nodejs']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/nodejs',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/nodejs/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/nodejs/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/nodejs/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/nodejs/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/nodejs/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/nodejs/api/api-patch',
        },
        {
          title: 'api.route()',
          href: '/reference/nodejs/api/api-route',
        },
        {
          title: 'api.route.all()',
          href: '/reference/nodejs/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/nodejs/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/nodejs/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/nodejs/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/nodejs/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/nodejs/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Batch Jobs',
      links: [
        {
          title: 'job()',
          href: '/reference/nodejs/batch/job',
        },
        {
          title: 'job.handler()',
          href: '/reference/nodejs/batch/job-handler',
        },
        {
          title: 'job.send()',
          href: '/reference/nodejs/batch/job-submit',
        },
      ],
    },
    {
      title: 'HTTP',
      links: [
        {
          title: 'http()',
          href: '/reference/nodejs/http/http',
        },
      ],
    },
    {
      title: 'Key Value Stores',
      links: [
        {
          title: 'kv()',
          href: '/reference/nodejs/keyvalue/keyvalue',
        },
        {
          title: 'kv.get()',
          href: '/reference/nodejs/keyvalue/keyvalue-get',
        },
        {
          title: 'kv.set()',
          href: '/reference/nodejs/keyvalue/keyvalue-set',
        },
        {
          title: 'kv.delete()',
          href: '/reference/nodejs/keyvalue/keyvalue-delete',
        },
        {
          title: 'kv.keys()',
          href: '/reference/nodejs/keyvalue/keyvalue-keys',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/nodejs/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/nodejs/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/nodejs/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/nodejs/queues/queue',
        },
        {
          title: 'queue.enqueue()',
          href: '/reference/nodejs/queues/queue-enqueue',
        },
        {
          title: 'queue.dequeue()',
          href: '/reference/nodejs/queues/queue-dequeue',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/nodejs/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/nodejs/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/nodejs/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/nodejs/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/nodejs/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/nodejs/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/nodejs/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/nodejs/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/nodejs/storage/bucket-files',
        },
        {
          title: 'file.exists()',
          href: '/reference/nodejs/storage/bucket-file-exists',
        },
        {
          title: 'file.read()',
          href: '/reference/nodejs/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/nodejs/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/nodejs/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/nodejs/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/nodejs/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'SQL',
      links: [
        {
          title: 'sql()',
          href: '/reference/nodejs/sql/sql',
        },
        {
          title: 'sql.connectionString()',
          href: '/reference/nodejs/sql/sql-connection-string',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/nodejs/schedule/schedule',
        },
        {
          title: 'schedule.every()',
          href: '/reference/nodejs/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/nodejs/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/nodejs/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/nodejs/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/nodejs/websocket/websocket-send',
        },
        {
          title: 'websocket.close()',
          href: '/reference/nodejs/websocket/websocket-close',
        },
      ],
    },
  ],
  ['reference/python/v0']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/python/v0',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/python/v0/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/python/v0/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/python/v0/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/python/v0/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/python/v0/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/python/v0/api/api-patch',
        },
        {
          title: 'api.methods()',
          href: '/reference/python/v0/api/api-methods',
        },
        {
          title: 'api.all()',
          href: '/reference/python/v0/api/api-all',
        },
      ],
    },
    {
      title: 'Collections',
      links: [
        {
          title: 'collection()',
          href: '/reference/python/v0/collection/collection',
        },
        {
          title: 'collection.collection()',
          href: '/reference/python/v0/collection/collection-collection',
        },
        {
          title: 'collection.query()',
          href: '/reference/python/v0/collection/collection-query',
        },
        {
          title: 'collection.query.where()',
          href: '/reference/python/v0/collection/collection-query-where',
        },
        {
          title: 'collection.query.limit()',
          href: '/reference/python/v0/collection/collection-query-limit',
        },
        {
          title: 'collection.query.pagingFrom()',
          href: '/reference/python/v0/collection/collection-query-pagingfrom',
        },
        {
          title: 'collection.query.fetch()',
          href: '/reference/python/v0/collection/collection-query-fetch',
        },
        {
          title: 'collection.query.stream()',
          href: '/reference/python/v0/collection/collection-query-stream',
        },
        {
          title: 'collection.doc()',
          href: '/reference/python/v0/collection/collection-doc',
        },
        {
          title: 'collection.doc.get()',
          href: '/reference/python/v0/collection/collection-doc-get',
        },
        {
          title: 'collection.doc.set()',
          href: '/reference/python/v0/collection/collection-doc-set',
        },
        {
          title: 'collection.doc.delete()',
          href: '/reference/python/v0/collection/collection-doc-delete',
        },
        {
          title: 'collection.doc.collection()',
          href: '/reference/python/v0/collection/collection-doc-collection',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/python/v0/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/python/v0/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/python/v0/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/python/v0/queues/queue',
        },
        {
          title: 'queue.send()',
          href: '/reference/python/v0/queues/queue-send',
        },
        {
          title: 'queue.receive()',
          href: '/reference/python/v0/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/python/v0/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/python/v0/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/python/v0/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/python/v0/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/python/v0/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/python/v0/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/python/v0/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/python/v0/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/python/v0/storage/bucket-files',
        },
        {
          title: 'file.read()',
          href: '/reference/python/v0/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/python/v0/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/python/v0/storage/bucket-file-delete',
        },
        {
          title: 'file.download_url()',
          href: '/reference/python/v0/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.upload_url()',
          href: '/reference/python/v0/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/python/v0/schedules/schedule',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/python/v0/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/python/v0/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/python/v0/websocket/websocket-send',
        },
      ],
    },
  ],
  ['reference/python']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/python',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/python/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/python/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/python/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/python/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/python/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/python/api/api-patch',
        },
        {
          title: 'api.methods()',
          href: '/reference/python/api/api-methods',
        },
        {
          title: 'api.all()',
          href: '/reference/python/api/api-all',
        },
      ],
    },
    {
      title: 'Batch Jobs',
      links: [
        {
          title: 'job()',
          href: '/reference/python/batch/job',
        },
        {
          title: 'job.handler()',
          href: '/reference/python/batch/job-handler',
        },
        {
          title: 'job.send()',
          href: '/reference/python/batch/job-submit',
        },
      ],
    },
    {
      title: 'Key Value Stores',
      links: [
        {
          title: 'kv()',
          href: '/reference/python/keyvalue/keyvalue',
        },
        {
          title: 'kv.get()',
          href: '/reference/python/keyvalue/keyvalue-get',
        },
        {
          title: 'kv.set()',
          href: '/reference/python/keyvalue/keyvalue-set',
        },
        {
          title: 'kv.delete()',
          href: '/reference/python/keyvalue/keyvalue-delete',
        },
        {
          title: 'kv.keys()',
          href: '/reference/python/keyvalue/keyvalue-keys',
        },
      ],
    },
    {
      title: 'Sql',
      links: [
        {
          title: 'sql()',
          href: '/reference/python/sql/sql',
        },
        {
          title: 'sql.connection_string()',
          href: '/reference/python/sql/sql-connection-string',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/python/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/python/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/python/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/python/queues/queue',
        },
        {
          title: 'queue.enqueue()',
          href: '/reference/python/queues/queue-enqueue',
        },
        {
          title: 'queue.dequeue()',
          href: '/reference/python/queues/queue-dequeue',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/python/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/python/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/python/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/python/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/python/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/python/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/python/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/python/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/python/storage/bucket-files',
        },
        {
          title: 'file.read()',
          href: '/reference/python/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/python/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/python/storage/bucket-file-delete',
        },
        {
          title: 'file.download_url()',
          href: '/reference/python/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.upload_url()',
          href: '/reference/python/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/python/schedules/schedule',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/python/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/python/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/python/websocket/websocket-send',
        },
      ],
    },
  ],
  ['reference/dart']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/dart',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/dart/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/dart/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/dart/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/dart/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/dart/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/dart/api/api-patch',
        },
        {
          title: 'api.route()',
          href: '/reference/dart/api/api-route',
        },
        {
          title: 'api.route.all()',
          href: '/reference/dart/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/dart/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/dart/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/dart/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/dart/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/dart/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Batch Jobs',
      links: [
        {
          title: 'job()',
          href: '/reference/dart/batch/job',
        },
        {
          title: 'job.handler()',
          href: '/reference/dart/batch/job-handler',
        },
        {
          title: 'job.send()',
          href: '/reference/dart/batch/job-submit',
        },
      ],
    },
    {
      title: 'Key Value Stores',
      links: [
        {
          title: 'kv()',
          href: '/reference/dart/keyvalue/keyvalue',
        },
        {
          title: 'kv.get()',
          href: '/reference/dart/keyvalue/keyvalue-get',
        },
        {
          title: 'kv.set()',
          href: '/reference/dart/keyvalue/keyvalue-set',
        },
        {
          title: 'kv.delete()',
          href: '/reference/dart/keyvalue/keyvalue-delete',
        },
        {
          title: 'kv.keys()',
          href: '/reference/dart/keyvalue/keyvalue-keys',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/dart/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/dart/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/dart/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/dart/queues/queue',
        },
        {
          title: 'queue.enqueue()',
          href: '/reference/dart/queues/queue-enqueue',
        },
        {
          title: 'queue.dequeue()',
          href: '/reference/dart/queues/queue-dequeue',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/dart/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/dart/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/dart/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/dart/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/dart/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/dart/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/dart/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/dart/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/dart/storage/bucket-files',
        },
        {
          title: 'file.exists()',
          href: '/reference/dart/storage/bucket-file-exists',
        },
        {
          title: 'file.read()',
          href: '/reference/dart/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/dart/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/dart/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/dart/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/dart/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'SQL',
      links: [
        {
          title: 'sql()',
          href: '/reference/dart/sql/sql',
        },
        {
          title: 'sql.connectionString()',
          href: '/reference/dart/sql/sql-connection-string',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/dart/schedule/schedule',
        },
        {
          title: 'schedule.every()',
          href: '/reference/dart/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/dart/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/dart/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/dart/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/dart/websocket/websocket-send',
        },
        {
          title: 'websocket.close()',
          href: '/reference/dart/websocket/websocket-close',
        },
      ],
    },
  ],
  ['reference/csharp']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/csharp/v0',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/csharp/v0/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/csharp/v0/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/csharp/v0/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/csharp/v0/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/csharp/v0/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/csharp/v0/api/api-patch',
        },
        {
          title: 'api.route()',
          href: '/reference/csharp/v0/api/api-route',
        },
        {
          title: 'api.route.all()',
          href: '/reference/csharp/v0/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/csharp/v0/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/csharp/v0/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/csharp/v0/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/csharp/v0/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/csharp/v0/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/csharp/v0/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/csharp/v0/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/csharp/v0/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/csharp/v0/queues/queue',
        },
        {
          title: 'queue.send()',
          href: '/reference/csharp/v0/queues/queue-send',
        },
        {
          title: 'queue.receive()',
          href: '/reference/csharp/v0/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/csharp/v0/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/csharp/v0/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/csharp/v0/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/csharp/v0/storage/bucket-files',
        },
        {
          title: 'file.read()',
          href: '/reference/csharp/v0/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/csharp/v0/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/csharp/v0/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/csharp/v0/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/csharp/v0/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/csharp/v0/schedule/schedule',
        },
        {
          title: 'schedule.every()',
          href: '/reference/csharp/v0/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/csharp/v0/schedule/schedule-cron',
        },
      ],
    },
  ],
  ['reference/go/v0']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/go/v0',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          title: 'NewApi()',
          href: '/reference/go/v0/api/api',
        },
        {
          title: 'NewCollection()',
          href: '/reference/go/v0/collection/collection',
        },
        {
          title: 'NewQueue()',
          href: '/reference/go/v0/queues/queue',
        },
        {
          title: 'NewSecret()',
          href: '/reference/go/v0/secrets/secret',
        },
        {
          title: 'NewBucket()',
          href: '/reference/go/v0/storage/bucket',
        },
        {
          title: 'NewTopic()',
          href: '/reference/go/v0/topic/topic',
        },
        {
          title: 'NewSchedule()',
          href: '/reference/go/v0/schedule/schedule',
        },
        {
          title: 'NewWebsocket()',
          href: '/reference/go/v0/websocket/websocket',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'Api.Get()',
          href: '/reference/go/v0/api/api-get',
        },
        {
          title: 'Api.Post()',
          href: '/reference/go/v0/api/api-post',
        },
        {
          title: 'Api.Put()',
          href: '/reference/go/v0/api/api-put',
        },
        {
          title: 'Api.Delete()',
          href: '/reference/go/v0/api/api-delete',
        },
        {
          title: 'Api.Patch()',
          href: '/reference/go/v0/api/api-patch',
        },
        {
          title: 'Api.NewRoute()',
          href: '/reference/go/v0/api/api-route',
        },
        {
          title: 'Api.Route.All()',
          href: '/reference/go/v0/api/api-route-all',
        },
        {
          title: 'Api.Route.Get()',
          href: '/reference/go/v0/api/api-route-get',
        },
        {
          title: 'Api.Route.Post()',
          href: '/reference/go/v0/api/api-route-post',
        },
        {
          title: 'Api.Route.Put()',
          href: '/reference/go/v0/api/api-route-put',
        },
        {
          title: 'Api.Route.Delete()',
          href: '/reference/go/v0/api/api-route-delete',
        },
        {
          title: 'Api.Route.Patch()',
          href: '/reference/go/v0/api/api-route-patch',
        },
        {
          title: 'Api.Details()',
          href: '/reference/go/v0/api/api-details',
        },
      ],
    },
    {
      title: 'Collections',
      links: [
        {
          title: 'Collection.Collection()',
          href: '/reference/go/v0/collection/collection-collection',
        },
        {
          title: 'Collection.Query()',
          href: '/reference/go/v0/collection/collection-query',
        },
        {
          title: 'Collection.Query.Where()',
          href: '/reference/go/v0/collection/collection-query-where',
        },
        {
          title: 'Collection.Query.Limit()',
          href: '/reference/go/v0/collection/collection-query-limit',
        },
        {
          title: 'Collection.Query.FromPagingToken()',
          href: '/reference/go/v0/collection/collection-query-pagingfrom',
        },
        {
          title: 'Collection.Query.Fetch()',
          href: '/reference/go/v0/collection/collection-query-fetch',
        },
        {
          title: 'Collection.Query.Stream()',
          href: '/reference/go/v0/collection/collection-query-stream',
        },
        {
          title: 'Collection.Doc()',
          href: '/reference/go/v0/collection/collection-doc',
        },
        {
          title: 'Collection.Doc.Get()',
          href: '/reference/go/v0/collection/collection-doc-get',
        },
        {
          title: 'Collection.Doc.Set()',
          href: '/reference/go/v0/collection/collection-doc-set',
        },
        {
          title: 'Collection.Doc.Delete()',
          href: '/reference/go/v0/collection/collection-doc-delete',
        },
        {
          title: 'Collection.Doc.Collection()',
          href: '/reference/go/v0/collection/collection-doc-collection',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'Topic.Publish()',
          href: '/reference/go/v0/topic/topic-publish',
        },
        {
          title: 'Topic.Subscribe()',
          href: '/reference/go/v0/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'Queue.Send()',
          href: '/reference/go/v0/queues/queue-send',
        },
        {
          title: 'Queue.Receive()',
          href: '/reference/go/v0/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'Secret.Put()',
          href: '/reference/go/v0/secrets/secret-put',
        },
        {
          title: 'Secret.Version()',
          href: '/reference/go/v0/secrets/secret-version',
        },
        {
          title: 'Secret.Latest()',
          href: '/reference/go/v0/secrets/secret-latest',
        },
        {
          title: 'Secret.Version.Access()',
          href: '/reference/go/v0/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'Bucket.On()',
          href: '/reference/go/v0/storage/bucket-on',
        },
        {
          title: 'Bucket.File()',
          href: '/reference/go/v0/storage/bucket-file',
        },
        {
          title: 'Bucket.Files()',
          href: '/reference/go/v0/storage/bucket-files',
        },
        {
          title: 'File.Read()',
          href: '/reference/go/v0/storage/bucket-file-read',
        },
        {
          title: 'File.Write()',
          href: '/reference/go/v0/storage/bucket-file-write',
        },
        {
          title: 'File.Delete()',
          href: '/reference/go/v0/storage/bucket-file-delete',
        },
        {
          title: 'File.DownloadUrl()',
          href: '/reference/go/v0/storage/bucket-file-downloadurl',
        },
        {
          title: 'File.UploadUrl()',
          href: '/reference/go/v0/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'Schedule.Every()',
          href: '/reference/go/v0/schedule/schedule-every',
        },
        {
          title: 'Schedule.Cron()',
          href: '/reference/go/v0/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'Websocket.On()',
          href: '/reference/go/v0/websocket/websocket-on',
        },
        {
          title: 'Websocket.Send()',
          href: '/reference/go/v0/websocket/websocket-send',
        },
        {
          title: 'Websocket.Close()',
          href: '/reference/go/v0/websocket/websocket-close',
        },
        {
          title: 'Websocket.Details()',
          href: '/reference/go/v0/websocket/websocket-details',
        },
      ],
    },
  ],
  ['reference/go']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/go',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          title: 'NewApi()',
          href: '/reference/go/api/api',
        },
        {
          title: 'NewJob()',
          href: '/reference/go/batch/job',
        },
        {
          title: 'NewKv()',
          href: '/reference/go/keyvalue/keyvalue',
        },
        {
          title: 'NewQueue()',
          href: '/reference/go/queues/queue',
        },
        {
          title: 'NewSecret()',
          href: '/reference/go/secrets/secret',
        },
        {
          title: 'NewBucket()',
          href: '/reference/go/storage/bucket',
        },
        {
          title: 'NewTopic()',
          href: '/reference/go/topic/topic',
        },
        {
          title: 'NewSchedule()',
          href: '/reference/go/schedule/schedule',
        },
        {
          title: 'NewWebsocket()',
          href: '/reference/go/websocket/websocket',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'Api.Get()',
          href: '/reference/go/api/api-get',
        },
        {
          title: 'Api.Post()',
          href: '/reference/go/api/api-post',
        },
        {
          title: 'Api.Put()',
          href: '/reference/go/api/api-put',
        },
        {
          title: 'Api.Delete()',
          href: '/reference/go/api/api-delete',
        },
        {
          title: 'Api.Patch()',
          href: '/reference/go/api/api-patch',
        },
        {
          title: 'Api.NewRoute()',
          href: '/reference/go/api/api-route',
        },
        {
          title: 'Api.Route.All()',
          href: '/reference/go/api/api-route-all',
        },
        {
          title: 'Api.Route.Get()',
          href: '/reference/go/api/api-route-get',
        },
        {
          title: 'Api.Route.Post()',
          href: '/reference/go/api/api-route-post',
        },
        {
          title: 'Api.Route.Put()',
          href: '/reference/go/api/api-route-put',
        },
        {
          title: 'Api.Route.Delete()',
          href: '/reference/go/api/api-route-delete',
        },
        {
          title: 'Api.Route.Patch()',
          href: '/reference/go/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Batch Jobs',
      links: [
        {
          title: 'Job.Handler()',
          href: '/reference/go/batch/job-handler',
        },
        {
          title: 'Job.Send()',
          href: '/reference/go/batch/job-submit',
        },
      ],
    },
    {
      title: 'Key Value Stores',
      links: [
        {
          title: 'Kv.Get()',
          href: '/reference/go/keyvalue/keyvalue-get',
        },
        {
          title: 'Kv.Set()',
          href: '/reference/go/keyvalue/keyvalue-set',
        },
        {
          title: 'Kv.Delete()',
          href: '/reference/go/keyvalue/keyvalue-delete',
        },
        {
          title: 'Kv.Keys()',
          href: '/reference/go/keyvalue/keyvalue-keys',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'Topic.Publish()',
          href: '/reference/go/topic/topic-publish',
        },
        {
          title: 'Topic.Subscribe()',
          href: '/reference/go/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'Queue.Enqueue()',
          href: '/reference/go/queues/queue-enqueue',
        },
        {
          title: 'Queue.Dequeue()',
          href: '/reference/go/queues/queue-dequeue',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'Secret.Put()',
          href: '/reference/go/secrets/secret-put',
        },
        {
          title: 'Secret.AccessVersion()',
          href: '/reference/go/secrets/secret-access-version',
        },
        {
          title: 'Secret.Access()',
          href: '/reference/go/secrets/secret-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'Bucket.On()',
          href: '/reference/go/storage/bucket-on',
        },
        {
          title: 'Bucket.ListFiles()',
          href: '/reference/go/storage/bucket-listfiles',
        },
        {
          title: 'Bucket.Read()',
          href: '/reference/go/storage/bucket-read',
        },
        {
          title: 'Bucket.Write()',
          href: '/reference/go/storage/bucket-write',
        },
        {
          title: 'Bucket.Delete()',
          href: '/reference/go/storage/bucket-delete',
        },
        {
          title: 'Bucket.DownloadUrl()',
          href: '/reference/go/storage/bucket-downloadurl',
        },
        {
          title: 'Bucket.UploadUrl()',
          href: '/reference/go/storage/bucket-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'Schedule.Every()',
          href: '/reference/go/schedule/schedule-every',
        },
        {
          title: 'Schedule.Cron()',
          href: '/reference/go/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'Websocket.On()',
          href: '/reference/go/websocket/websocket-on',
        },
        {
          title: 'Websocket.Send()',
          href: '/reference/go/websocket/websocket-send',
        },
        {
          title: 'Websocket.Close()',
          href: '/reference/go/websocket/websocket-close',
        },
      ],
    },
  ],
  ['reference/jvm']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/jvm/v0',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/jvm/v0/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/jvm/v0/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/jvm/v0/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/jvm/v0/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/jvm/v0/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/jvm/v0/api/api-patch',
        },
        {
          title: 'api.route()',
          href: '/reference/jvm/v0/api/api-route',
        },
        {
          title: 'api.route.all()',
          href: '/reference/jvm/v0/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/jvm/v0/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/jvm/v0/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/jvm/v0/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/jvm/v0/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/jvm/v0/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Collections',
      links: [
        {
          title: 'collection()',
          href: '/reference/jvm/v0/collection/collection',
        },
        {
          title: 'collection.collection()',
          href: '/reference/jvm/v0/collection/collection-collection',
        },
        {
          title: 'collection.query()',
          href: '/reference/jvm/v0/collection/collection-query',
        },
        {
          title: 'collection.query.where()',
          href: '/reference/jvm/v0/collection/collection-query-where',
        },
        {
          title: 'collection.query.limit()',
          href: '/reference/jvm/v0/collection/collection-query-limit',
        },
        {
          title: 'collection.query.pagingFrom()',
          href: '/reference/jvm/v0/collection/collection-query-pagingfrom',
        },
        {
          title: 'collection.query.fetch()',
          href: '/reference/jvm/v0/collection/collection-query-fetch',
        },
        {
          title: 'collection.query.stream()',
          href: '/reference/jvm/v0/collection/collection-query-stream',
        },
        {
          title: 'collection.doc()',
          href: '/reference/jvm/v0/collection/collection-doc',
        },
        {
          title: 'collection.doc.get()',
          href: '/reference/jvm/v0/collection/collection-doc-get',
        },
        {
          title: 'collection.doc.set()',
          href: '/reference/jvm/v0/collection/collection-doc-set',
        },
        {
          title: 'collection.doc.delete()',
          href: '/reference/jvm/v0/collection/collection-doc-delete',
        },
        {
          title: 'collection.doc.collection()',
          href: '/reference/jvm/v0/collection/collection-doc-collection',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/jvm/v0/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/jvm/v0/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/jvm/v0/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/jvm/v0/queues/queue',
        },
        {
          title: 'queue.send()',
          href: '/reference/jvm/v0/queues/queue-send',
        },
        {
          title: 'queue.receive()',
          href: '/reference/jvm/v0/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/jvm/v0/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/jvm/v0/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/jvm/v0/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/jvm/v0/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/jvm/v0/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/jvm/v0/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/jvm/v0/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/jvm/v0/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/jvm/v0/storage/bucket-files',
        },
        {
          title: 'file.read()',
          href: '/reference/jvm/v0/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/jvm/v0/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/jvm/v0/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/jvm/v0/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/jvm/v0/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/jvm/v0/schedule/schedule',
        },
        {
          title: 'schedule.every()',
          href: '/reference/jvm/v0/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/jvm/v0/schedule/schedule-cron',
        },
      ],
    },
  ],
  ['reference/cli']: [
    {
      title: 'Nitric CLI',
      links: [
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
  ],
  ['reference/providers/aws']: [
    {
      links: [
        {
          title: 'AWS Provider Overview',
          href: '/reference/providers/aws',
        },
        {
          title: 'Configuration',
          href: '/reference/providers/aws/configuration',
        },
        {
          title: 'APIs',
          href: '/reference/providers/aws/apis',
        },
        {
          title: 'Key Value Store',
          href: '/reference/providers/aws/keyvalue',
        },
        {
          title: 'Queues',
          href: '/reference/providers/aws/queues',
        },
        {
          title: 'Schedules',
          href: '/reference/providers/aws/schedules',
        },
        {
          title: 'Secrets',
          href: '/reference/providers/aws/secrets',
        },
        {
          title: 'Storage',
          href: '/reference/providers/aws/storage',
        },
        {
          title: 'Topics',
          href: '/reference/providers/aws/topics',
        },
        {
          title: 'Import Existing Resources',
          href: '/reference/providers/aws/imports',
        },
      ],
    },
    {
      title: 'More Standard Providers',
      links: [
        {
          title: 'GCP',
          href: '/reference/providers/gcp',
          icon: SiGooglecloud,
        },
        {
          title: 'Azure',
          href: '/reference/providers/azure',
          icon: SiMicrosoftazure,
        },
      ],
    },
    {
      title: 'Terraform Providers',
      links: [
        {
          title: 'Overview',
          href: '/reference/providers/terraform',
          icon: SiTerraform,
        },
        {
          title: 'AWS',
          href: '/reference/providers/terraform/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/terraform/gcp',
          icon: SiGooglecloud,
        },
      ],
    },
    {
      title: 'Custom Providers',
      links: [
        {
          title: 'Building a Custom Provider',
          href: '/reference/providers/custom/building-custom-provider',
        },
        {
          title: 'Extending a Base Provider',
          href: '/reference/providers/custom/extend-standard-provider',
        },
        {
          title: 'Docker Providers',
          href: '/reference/providers/install/docker',
        },
      ],
    },
  ],
  ['reference/providers/gcp']: [
    {
      links: [
        {
          title: 'GCP Provider Overview',
          href: '/reference/providers/gcp',
        },
        {
          title: 'Configuration',
          href: '/reference/providers/gcp/configuration',
        },
        {
          title: 'APIs',
          href: '/reference/providers/gcp/apis',
        },
        {
          title: 'Key Value Stores',
          href: '/reference/providers/gcp/keyvalue',
        },
        {
          title: 'Queues',
          href: '/reference/providers/gcp/queues',
        },
        {
          title: 'Schedules',
          href: '/reference/providers/gcp/schedules',
        },
        {
          title: 'Secrets',
          href: '/reference/providers/gcp/secrets',
        },
        {
          title: 'Storage',
          href: '/reference/providers/gcp/storage',
        },
        {
          title: 'Topics',
          href: '/reference/providers/gcp/topics',
        },
      ],
    },
    {
      title: 'More Standard Providers',
      links: [
        {
          title: 'AWS',
          href: '/reference/providers/aws',
          icon: FaAws,
        },
        {
          title: 'Azure',
          href: '/reference/providers/azure',
          icon: SiMicrosoftazure,
        },
      ],
    },
    {
      title: 'Terraform Providers',
      links: [
        {
          title: 'Overview',
          href: '/reference/providers/terraform',
          icon: SiTerraform,
        },
        {
          title: 'AWS',
          href: '/reference/providers/terraform/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/terraform/gcp',
          icon: SiGooglecloud,
        },
      ],
    },
    {
      title: 'Custom Providers',
      links: [
        {
          title: 'Building a Custom Provider',
          href: '/reference/providers/custom/building-custom-provider',
        },
        {
          title: 'Extending a Base Provider',
          href: '/reference/providers/custom/extend-standard-provider',
        },
        {
          title: 'Docker Providers',
          href: '/reference/providers/install/docker',
        },
      ],
    },
  ],
  ['reference/providers/azure']: [
    {
      links: [
        {
          title: 'Azure Provider Overview',
          href: '/reference/providers/azure',
        },
        {
          title: 'Configuration',
          href: '/reference/providers/azure/configuration',
        },
        {
          title: 'APIs',
          href: '/reference/providers/azure/apis',
        },
        {
          title: 'Key Value Stores',
          href: '/reference/providers/azure/keyvalue',
        },
        {
          title: 'Queues',
          href: '/reference/providers/azure/queues',
        },
        {
          title: 'Schedules',
          href: '/reference/providers/azure/schedules',
        },
        {
          title: 'Secrets',
          href: '/reference/providers/azure/secrets',
        },
        {
          title: 'Storage',
          href: '/reference/providers/azure/storage',
        },
        {
          title: 'Topics',
          href: '/reference/providers/azure/topics',
        },
      ],
    },
    {
      title: 'More Standard Providers',
      links: [
        {
          title: 'AWS',
          href: '/reference/providers/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/gcp',
          icon: SiGooglecloud,
        },
      ],
    },
    {
      title: 'Terraform Providers',
      links: [
        {
          title: 'Overview',
          href: '/reference/providers/terraform',
          icon: SiTerraform,
        },
        {
          title: 'AWS',
          href: '/reference/providers/terraform/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/terraform/gcp',
          icon: SiGooglecloud,
        },
      ],
    },
    {
      title: 'Custom Providers',
      links: [
        {
          title: 'Building a Custom Provider',
          href: '/reference/providers/custom/building-custom-provider',
        },
        {
          title: 'Extending a Base Provider',
          href: '/reference/providers/custom/extend-standard-provider',
        },
        {
          title: 'Docker Providers',
          href: '/reference/providers/install/docker',
        },
      ],
    },
  ],
  ['reference/providers']: [
    {
      title: 'Standard Providers (Pulumi)',
      links: [
        {
          title: 'Overview',
          href: '/reference/providers/pulumi',
          icon: SiPulumi,
        },
        {
          title: 'AWS',
          href: '/reference/providers/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/gcp',
          icon: SiGooglecloud,
        },
        {
          title: 'Azure',
          href: '/reference/providers/azure',
          icon: SiMicrosoftazure,
        },
        {
          title: 'Custom',
          href: '/reference/providers/pulumi/custom',
          icon: WrenchScrewdriverIcon,
        },
      ],
    },
    {
      title: 'Terraform Providers',
      links: [
        {
          title: 'Overview',
          href: '/reference/providers/terraform',
          icon: SiTerraform,
        },
        {
          title: 'AWS',
          href: '/reference/providers/terraform/aws',
          icon: FaAws,
        },
        {
          title: 'GCP',
          href: '/reference/providers/terraform/gcp',
          icon: SiGooglecloud,
        },
      ],
    },
    {
      title: 'Custom Providers',
      links: [
        {
          title: 'Building a Custom Provider',
          href: '/reference/providers/custom/building-custom-provider',
        },
        {
          title: 'Extending a Base Provider',
          href: '/reference/providers/custom/extend-standard-provider',
        },
        {
          title: 'Docker Providers',
          href: '/reference/providers/install/docker',
        },
      ],
    },
  ],
  ['reference/pulumi']: [
    {
      links: [
        {
          title: 'Overview',
          href: '/reference/providers/pulumi',
        },
        {
          title: 'Using Pulumi Cloud as a Backend',
          href: '/reference/pulumi/pulumi-cloud',
        },
        {
          title: 'Building Nitric providers using Pulumi',
          href: '/reference/pulumi/custom-providers',
        },
      ],
    },
  ],
}

const SHOW_HOME_NAV_PAGES = [
  '/',
  '/support',
  '/support/upgrade',
  '/contributions',
  '/faq',
  '/reference/env',
  '/reference/custom-containers',
]

export const useCurrentNav = () => {
  const router = useRouter()

  // put any paths that should show the main docs menu
  const displayDocsMenu = SHOW_HOME_NAV_PAGES.includes(router.pathname)

  const mainNav = fullNav['docs']

  if (displayDocsMenu) {
    return {
      navigation: mainNav,
      displayDocsMenu,
    }
  }

  const current = Object.keys(fullNav).find((navKey) =>
    router.pathname.startsWith(`/${navKey}`)
  )

  const navigation = current && fullNav[current] ? fullNav[current] : mainNav

  const cleanedCurrent = `/${current}`.replace(/\/[v]\d+$/, '')

  // find main menu item
  const parent = mainNav
    .flatMap((group) => group.links)
    .find((link) =>
      // clean out any trailing versions /v0 etc
      link.href.startsWith(cleanedCurrent)
    )

  let secondLevelParent: DocNavGroup['links'][0] | undefined

  // check if there is a 2nd level nav parent
  if (!parent) {
    const nav = fullNav[cleanedCurrent.split('/')[1]]

    if (nav) {
      for (const group of nav) {
        secondLevelParent = group.links.find(
          (link) => link.href === cleanedCurrent
        )

        if (secondLevelParent) {
          break
        }
      }
    }
  }

  return {
    navigation,
    isHome: displayDocsMenu,
    parent,
    secondLevelParent,
    pathname: router.pathname,
  }
}

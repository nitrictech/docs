import {
  ArchiveBoxIcon,
  CircleStackIcon,
  ClockIcon,
  CloudIcon,
  CommandLineIcon,
  FolderIcon,
  GlobeAltIcon,
  HomeIcon,
  LockClosedIcon,
  MegaphoneIcon,
  PlayIcon,
  ServerIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiPulumi } from 'react-icons/si'
import { useRouter } from 'next/router'

export const topLevelNavigation = [
  { text: 'Nitric.io', href: 'https://nitric.io' },
]

export interface DocNavGroup {
  title?: string
  showDividerAbove?: boolean
  disableAutoPrefix?: boolean
  links: { title: string; href: string; icon?: any }[]
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
    title: 'Key Value Stores',
    href: '/keyvalue',
    icon: ArchiveBoxIcon,
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
          title: 'Getting Started',
          href: '/guides/getting-started',
          icon: PlayIcon,
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
          title: 'Assets',
          href: '/assets',
          icon: FolderIcon,
        },
        {
          title: 'FAQ',
          href: '/faq',
          icon: QuestionMarkCircleIcon,
        },
      ],
    },
    {
      title: 'Library Reference',
      links: [
        {
          title: 'Node.js',
          href: '/reference/nodejs/v1',
          icon: FaNodeJs,
        },
        {
          title: 'Python',
          href: '/reference/python/v1',
          icon: FaPython,
        },
      ],
    },
    {
      title: 'Tools Reference',
      links: [
        {
          title: 'Nitric CLI',
          href: '/reference/cli',
          icon: CommandLineIcon,
        },
        {
          title: 'Cloud Providers',
          href: '/reference/providers',
          icon: CloudIcon,
        },
        {
          title: 'Pulumi',
          href: '/reference/pulumi',
          icon: SiPulumi,
        },
      ],
    },
  ],
  ['guides/getting-started']: [
    {
      links: [
        {
          title: 'Quickstart',
          href: '/guides/getting-started/quickstart',
        },
        {
          title: 'Concepts',
          href: '/guides/getting-started/concepts',
        },
        {
          title: 'Languages',
          href: '/guides/getting-started/language-support',
        },
        {
          title: 'Installation',
          href: '/guides/getting-started/installation',
        },
        {
          title: 'Local Dashboard',
          href: '/guides/getting-started/local-dashboard',
        },
        {
          title: 'Deployment',
          href: '/guides/getting-started/deployment',
        },
        {
          title: 'Using GitHub Actions',
          href: '/guides/getting-started/github-actions',
        },
        {
          title: 'Using GitLab CI',
          href: '/guides/getting-started/gitlab-ci',
        },
        {
          title: 'Using Azure Pipelines',
          href: '/guides/getting-started/azure-pipelines',
        },
        {
          title: 'Using Google Cloud Build',
          href: '/guides/getting-started/google-cloud-build',
        },
      ],
    },
    {
      title: 'Node.js Guides',
      links: [
        {
          title: 'Debugging',
          href: '/guides/getting-started/nodejs/debugging',
        },
        {
          title: 'Testing',
          href: '/guides/getting-started/nodejs/testing',
        },
        {
          title: 'REST API',
          href: '/guides/getting-started/nodejs/serverless-rest-api-example',
        },
        {
          title: 'GraphQL',
          href: '/guides/getting-started/nodejs/graphql',
        },
        {
          title: 'Express.js',
          href: '/guides/getting-started/nodejs/expressjs',
        },
        {
          title: 'Fastify',
          href: '/guides/getting-started/nodejs/fastify',
        },
        {
          title: 'Nest.js',
          href: '/guides/getting-started/nodejs/nestjs',
        },
        {
          title: 'Next.js',
          href: '/guides/getting-started/nodejs/api-with-nextjs',
        },
        {
          title: 'Supabase',
          href: '/guides/getting-started/nodejs/nitric-and-supabase',
        },
        {
          title: 'PlanetScale and Prisma',
          href: '/guides/getting-started/nodejs/serverless-api-with-planetscale-and-prisma',
        },
        {
          title: 'Stripe',
          href: '/guides/getting-started/nodejs/stripe',
        },
        {
          title: 'Twilio',
          href: '/guides/getting-started/nodejs/twilio',
        },
        {
          title: 'Secure API with Auth0',
          href: '/guides/getting-started/nodejs/secure-api-auth0',
        },
        {
          title: 'Secure APIs with AWS Cognito',
          href: '/guides/getting-started/nodejs/amazon-cognito',
        },
        {
          title: 'Using a Database',
          href: '/guides/getting-started/nodejs/byo-database',
        },
        {
          title: 'Websockets',
          href: '/guides/getting-started/nodejs/websockets',
        },
      ],
    },
    {
      title: 'Python Guides',
      links: [
        {
          title: 'REST API',
          href: '/guides/getting-started/python/serverless-rest-api-example',
        },
        {
          title: 'GraphQL',
          href: '/guides/getting-started/python/graphql',
        },
        {
          title: 'Visualising Data',
          href: '/guides/getting-started/python/create-histogram',
        },
        {
          title: 'Predictive Text API using Tensorflow',
          href: '/guides/getting-started/python/text-prediction',
        },
      ],
    },
    {
      title: 'Go Guides',
      links: [
        {
          title: 'REST API',
          href: '/guides/getting-started/go/serverless-rest-api-example',
        },
      ],
    },
    {
      title: 'JVM Guides',
      links: [
        {
          title: 'REST API',
          href: '/guides/getting-started/jvm/serverless-rest-api-example',
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
  assets: [
    {
      links: [
        {
          title: 'Examples',
          href: '/assets/examples',
        },
        {
          title: 'Custom Container Builds',
          href: '/assets/custom-containers',
        },
        {
          title: 'Environment Variables',
          href: '/assets/env',
        },
        {
          title: 'Resource Best Practices',
          href: '/assets/resources-overview',
        },
        {
          title: 'IAM and Access Control',
          href: '/assets/access-control',
        },
        {
          title: 'Flexibility with the Nitric Framework',
          href: '/assets/eject',
        },
      ],
    },
  ],
  faq: [
    {
      links: [
        {
          title: 'Common Questions',
          href: '/faq/common-questions',
        },
      ],
    },
    {
      title: 'Differences From Other Solutions',
      links: [
        {
          title: 'AWS CDK',
          href: '/faq/comparison/aws-cdk',
        },
        {
          title: 'AWS SAM',
          href: '/faq/comparison/aws-sam',
        },
        {
          title: 'GCP Deployment Manager',
          href: '/faq/comparison/gcp-deployment-manager',
        },
        {
          title: 'Azure Resource Manager',
          href: '/faq/comparison/bicep',
        },
        {
          title: 'Pulumi',
          href: '/faq/comparison/pulumi',
        },
        {
          title: 'Terraform',
          href: '/faq/comparison/terraform',
        },
        {
          title: 'SST',
          href: '/faq/comparison/sst',
        },
        {
          title: 'Encore',
          href: '/faq/comparison/encore',
        },
        {
          title: 'Wing',
          href: '/faq/comparison/winglang',
        },
        {
          title: 'Ampt',
          href: '/faq/comparison/ampt',
        },
      ],
    },
  ],
  ['reference/nodejs']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/nodejs/v1',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/nodejs/v1/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/nodejs/v1/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/nodejs/v1/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/nodejs/v1/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/nodejs/v1/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/nodejs/v1/api/api-patch',
        },
        {
          title: 'api.route()',
          href: '/reference/nodejs/v1/api/api-route',
        },
        {
          title: 'api.route.all()',
          href: '/reference/nodejs/v1/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/nodejs/v1/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/nodejs/v1/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/nodejs/v1/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/nodejs/v1/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/nodejs/v1/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Key Value Stores',
      links: [
        {
          title: 'kv()',
          href: '/reference/nodejs/v1/keyvalue/keyvalue',
        },
        {
          title: 'kv.get()',
          href: '/reference/nodejs/v1/keyvalue/keyvalue-get',
        },
        {
          title: 'kv.set()',
          href: '/reference/nodejs/v1/keyvalue/keyvalue-set',
        },
        {
          title: 'kv.delete()',
          href: '/reference/nodejs/v1/keyvalue/keyvalue-delete',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/nodejs/v1/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/nodejs/v1/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/nodejs/v1/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/nodejs/v1/queues/queue',
        },
        {
          title: 'queue.send()',
          href: '/reference/nodejs/v1/queues/queue-send',
        },
        {
          title: 'queue.receive()',
          href: '/reference/nodejs/v1/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/nodejs/v1/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/nodejs/v1/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/nodejs/v1/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/nodejs/v1/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/nodejs/v1/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/nodejs/v1/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/nodejs/v1/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/nodejs/v1/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/nodejs/v1/storage/bucket-files',
        },
        {
          title: 'file.exists()',
          href: '/reference/nodejs/v1/storage/bucket-file-exists',
        },
        {
          title: 'file.read()',
          href: '/reference/nodejs/v1/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/nodejs/v1/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/nodejs/v1/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/nodejs/v1/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/nodejs/v1/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/nodejs/v1/schedule/schedule',
        },
        {
          title: 'schedule.every()',
          href: '/reference/nodejs/v1/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/nodejs/v1/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/nodejs/v1/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/nodejs/v1/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/nodejs/v1/websocket/websocket-send',
        },
        {
          title: 'websocket.close()',
          href: '/reference/nodejs/v1/websocket/websocket-close',
        },
      ],
    },
  ],
  ['reference/python']: [
    {
      links: [
        {
          title: 'Getting Started',
          href: '/reference/python/v1',
        },
      ],
    },
    {
      title: 'APIs',
      links: [
        {
          title: 'api()',
          href: '/reference/python/v1/api/api',
        },
        {
          title: 'api.get()',
          href: '/reference/python/v1/api/api-get',
        },
        {
          title: 'api.post()',
          href: '/reference/python/v1/api/api-post',
        },
        {
          title: 'api.put()',
          href: '/reference/python/v1/api/api-put',
        },
        {
          title: 'api.delete()',
          href: '/reference/python/v1/api/api-delete',
        },
        {
          title: 'api.patch()',
          href: '/reference/python/v1/api/api-patch',
        },
        {
          title: 'api.methods()',
          href: '/reference/python/v1/api/api-methods',
        },
        {
          title: 'api.all()',
          href: '/reference/python/v1/api/api-all',
        },
      ],
    },
    {
      title: 'Key Value Stores',
      links: [
        {
          title: 'kv()',
          href: '/reference/python/v1/keyvalue/keyvalue',
        },
        {
          title: 'kv.get()',
          href: '/reference/python/v1/keyvalue/keyvalue-get',
        },
        {
          title: 'kv.set()',
          href: '/reference/python/v1/keyvalue/keyvalue-set',
        },
        {
          title: 'kv.delete()',
          href: '/reference/python/v1/keyvalue/keyvalue-delete',
        },
      ],
    },
    {
      title: 'Topics',
      links: [
        {
          title: 'topic()',
          href: '/reference/python/v1/topic/topic',
        },
        {
          title: 'topic.publish()',
          href: '/reference/python/v1/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/python/v1/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      links: [
        {
          title: 'queue()',
          href: '/reference/python/v1/queues/queue',
        },
        {
          title: 'queue.send()',
          href: '/reference/python/v1/queues/queue-send',
        },
        {
          title: 'queue.receive()',
          href: '/reference/python/v1/queues/queue-receive',
        },
      ],
    },
    {
      title: 'Secrets',
      links: [
        {
          title: 'secret()',
          href: '/reference/python/v1/secrets/secret',
        },
        {
          title: 'secret.put()',
          href: '/reference/python/v1/secrets/secret-put',
        },
        {
          title: 'secret.version()',
          href: '/reference/python/v1/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/python/v1/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/python/v1/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      links: [
        {
          title: 'bucket()',
          href: '/reference/python/v1/storage/bucket',
        },
        {
          title: 'bucket.on()',
          href: '/reference/python/v1/storage/bucket-on',
        },
        {
          title: 'bucket.file()',
          href: '/reference/python/v1/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/python/v1/storage/bucket-files',
        },
        {
          title: 'file.read()',
          href: '/reference/python/v1/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/python/v1/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/python/v1/storage/bucket-file-delete',
        },
        {
          title: 'file.download_url()',
          href: '/reference/python/v1/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.upload_url()',
          href: '/reference/python/v1/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'Schedules',
      links: [
        {
          title: 'schedule()',
          href: '/reference/python/v1/schedules/schedule',
        },
      ],
    },
    {
      title: 'Websockets',
      links: [
        {
          title: 'websocket()',
          href: '/reference/python/v1/websocket/websocket',
        },
        {
          title: 'websocket.on()',
          href: '/reference/python/v1/websocket/websocket-on',
        },
        {
          title: 'websocket.send()',
          href: '/reference/python/v1/websocket/websocket-send',
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
          title: 'Stacks',
          href: '/reference/cli/stacks',
        },
      ],
    },
  ],
  ['reference/providers']: [
    {
      links: [
        {
          title: 'Overview',
          href: '/reference/providers',
        },
      ],
    },
    {
      title: 'AWS',
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
      ],
    },
    {
      title: 'Azure',
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
      title: 'Google Cloud',
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
      title: 'Custom Provider',
      links: [
        {
          title: 'Building a Custom Provider',
          href: '/reference/providers/custom/building-custom-provider',
        },
      ],
    },
  ],
  ['reference/pulumi']: [
    {
      links: [
        {
          title: 'Overview',
          href: '/reference/pulumi',
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

export const useCurrentNav = () => {
  const router = useRouter()

  // put any paths that should show the main docs menu
  const displayDocsMenu = ['/', '/support', '/contributions'].includes(
    router.pathname
  )

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

  // find main menu item
  const parent = mainNav
    .flatMap((group) => group.links)
    .find((link) => link.href.startsWith(`/${current}`))

  return {
    navigation: current && fullNav[current] ? fullNav[current] : mainNav,
    isHome: displayDocsMenu,
    parent,
    pathname: router.pathname,
  }
}

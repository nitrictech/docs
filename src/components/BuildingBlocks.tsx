import { Heading } from '@/components/Heading'
import {
  ArchiveBoxIcon,
  CircleStackIcon,
  ClockIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline'
import { BoxGrid } from './BoxGrid'

const buildingBlocks = [
  {
    href: '/apis',
    name: 'APIs',
    description:
      'Create powerful APIs with easy to setup routes, middleware and security.',
    icon: GlobeAltIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/collections',
    name: 'Collections',
    description:
      'A built-in No-SQL store to quickly store and retrieve unstructured data.',
    icon: ArchiveBoxIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/schedules',
    name: 'Schedules',
    description:
      'Schedule actions easily using either simple rate expressions or cron.',
    icon: ClockIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/storage',
    name: 'Storage',
    description: 'Store and retrieve BLOB data effortlessly.',
    icon: CircleStackIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/messaging',
    name: 'Messages',
    description:
      'Use Topics and Queues to create event-driven distributed applications',
    icon: MegaphoneIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/secrets',
    name: 'Secrets',
    description: 'Securely store and retrieve secrets.',
    icon: LockClosedIcon,
    pattern: {
      y: 22,
      squares: [[1, 3]],
    },
  },
]

export function BuildingBlocks() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="building-blocks">
        Building Blocks
      </Heading>
      <BoxGrid boxes={buildingBlocks} />
    </div>
  )
}

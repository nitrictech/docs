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
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
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
      'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
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
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
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
    description:
      'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
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
      'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
    icon: MegaphoneIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/secrets',
    name: 'Secrets',
    description:
      'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
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

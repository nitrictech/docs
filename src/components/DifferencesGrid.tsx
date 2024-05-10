import { BoxGrid } from './BoxGrid'
import { Heading } from './Heading'

const assets = [
  {
    href: '/concepts/comparison/aws-cdk',
    name: 'AWS CDK',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/aws-sam',
    name: 'AWS SAM',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/gcp-deployment-manager',
    name: 'Google Cloud Deployment Manager',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/bicep',
    name: 'Azure Resource Manager',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/pulumi',
    name: 'Pulumi',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/terraform',
    name: 'Terraform',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/sst',
    name: 'SST',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/encore',
    name: 'Encore',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/winglang',
    name: 'Wing',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison/ampt',
    name: 'Ampt',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
]

export function DifferencesGrid() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="differences">
        Differences From Other Solutions
      </Heading>
      <BoxGrid boxes={assets} />
    </div>
  )
}

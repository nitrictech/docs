import { BoxGrid } from './BoxGrid'
import { Heading } from './Heading'

const assets = [
  {
    href: '/faq/comparison/aws-cdk',
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
    href: '/faq/comparison/aws-sam',
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
    href: '/faq/comparison/gcp-deployment-manager',
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
    href: '/faq/comparison/bicep',
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
    href: '/faq/comparison/terraform',
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
    href: '/faq/comparison/sst',
    name: 'SST',
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

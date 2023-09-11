import { BoxGrid } from './BoxGrid'
import { Heading } from './Heading'

const assets = [
  {
    href: '/faq/common-questions#do-i-need-to-deploy-to-a-cloud-to-test-my-applications',
    name: 'Do I need to deploy to a cloud to test my applications?',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/faq/common-questions#what-programming-languages-does-nitric-support',
    name: 'What programming languages does nitric support?',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/faq/common-questions#what-about-data-portability',
    name: 'What about data portability?',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/faq/common-questions#how-do-i-use-a-cloud-api-service-that-you-dont-support',
    name: `How do I use a Cloud/API/Service that you don't support?`,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/faq/common-questions#how-do-i-view-my-deployments-on-the-pulumi-dashboard',
    name: 'How do I view my deployments on the Pulumi dashboard?',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
]

export function FAQGrid() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="common-questions">
        Common Questions
      </Heading>
      <BoxGrid boxes={assets} />
    </div>
  )
}

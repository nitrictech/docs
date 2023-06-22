import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export interface FeedbackRequestBody {
  url: string
  answer: string
  ua: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { url, answer, ua } = req.body as FeedbackRequestBody

    // disable on non prod
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
      res.status(403).json({
        success: false,
        error: 'API not available on non production env',
      })
      return
    }

    // validate answer
    if (!['yes', 'no'].includes(answer)) {
      res.status(422).json({ success: false, error: 'Invalid answer' })
      return
    }

    try {
      await prisma.feedback.create({
        data: {
          url,
          answer,
          label: 'is docs page helpful',
          ua,
        },
      })

      res.status(200).json({ success: true })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ success: false, error: 'Failed to store feedback' })
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }
}

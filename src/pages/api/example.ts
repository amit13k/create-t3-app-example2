import type {NextApiRequest, NextApiResponse} from 'next'
import {someValue} from '../../lib/someModule'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({someValue})
}
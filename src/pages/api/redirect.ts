import { NextApiRequest, NextApiResponse } from 'next'

import Airtable from 'airtable'

const AIRTABLE_KEY = process.env.AIRTABLE_KEY as string
const AIRTABLE_BASE = process.env.AIRTABLE_BASE as string
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE as string

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_KEY
})

// Currying pog
const airtableTable = Airtable.base(AIRTABLE_BASE)(AIRTABLE_TABLE)

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  console.time('Request took')
  const path = req.url

  try {
    const airtableQuery = await airtableTable
      .select({
        filterByFormula: `{route} = '${path}'`
      })
      .all()
    const airtableEntry = airtableQuery[0]

    if (airtableEntry == null) throw new Error('notfound')
    if (!airtableEntry.get('isActive')) throw new Error('inactive')
    const dest = airtableEntry.get('destination')

    res.redirect(dest).end()
    console.log('Request to', path, 'was redirected to', dest)
  } catch (e) {
    const error = e as Error

    switch (error.message) {
      case 'notfound':
        console.log('Request to', path, 'was not found')
        break

      case 'inactive':
        console.log('Request to', path, 'was found but marked as inactive')
        break

      default:
        console.error('Request to', path, 'results with an error:', e)
        break
    }

    // Change final redirects here
    res.redirect('https://angeloanan.xyz').end()
  } finally {
    console.timeEnd('Request took')
  }
}

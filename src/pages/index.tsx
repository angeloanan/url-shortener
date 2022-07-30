import * as React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const IndexPage = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('https://angeloanan.xyz')
  }, [router])

  return (
    <>
      <h1 style={{ fontWeight: 700 }}>Angelo's URL shortener</h1>
      <p>Here, you can find a very fancy link such as:</p>
      <ul>
        <li>
          <Link href='/wob' passHref>
            <a>/wob</a>
          </Link>
        </li>
        <li>
          <Link href='/duck' passHref>
            <a>/duck</a>
          </Link>
        </li>
        <li>
          <Link href='/.env' passHref>
            <a>/.env</a>
          </Link>
        </li>
        <li>
          <Link href='/ActualWebsite' passHref>
            <a>/ActualWebsite</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default IndexPage

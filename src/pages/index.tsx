import * as React from 'react'

import Link from 'next/link'

const IndexPage = () => {
  return (
    <>
      <h1>Angelo's URL shortener</h1>
      <p>Here, you can find a very fancy link such as:</p>
      <ul>
        <li>
          <Link href='/twitter' passHref>
            <a>/twitter</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default IndexPage

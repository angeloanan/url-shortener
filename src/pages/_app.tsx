import '@fontsource/inter/400.css'
import '@fontsource/inter/variable.css'

import * as React from 'react'

import { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>
        {`
          body {
            font-family: 'InterVariable';
            font-weight: 400;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

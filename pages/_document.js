import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang = "en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <body className = 'h-screen bg-gradient-to-r from-[#ece9e6] to-white dark:bg-bg-gray-700 font-roboto' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

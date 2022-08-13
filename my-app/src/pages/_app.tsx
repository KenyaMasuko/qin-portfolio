import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MantineProvider } from "@mantine/core"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { faMoon, faStar } from "@fortawesome/free-solid-svg-icons"

library.add(far, faMoon, faStar)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily:
          '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
        fontFamilyMonospace: "Avenir Next, sans-serif",
        headings: {
          fontFamily: "Avenir Next, sans-serif",
        },
      }}
    >
      <Header />
      <main className="pt-28">
        <Component {...pageProps} />
      </main>
      <Footer />
    </MantineProvider>
  )
}

export default MyApp

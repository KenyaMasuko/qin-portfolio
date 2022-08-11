import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MantineProvider } from "@mantine/core"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Header />
      <main className="pt-28">
        <Component {...pageProps} />
      </main>
      <Footer />
    </MantineProvider>
  )
}

export default MyApp

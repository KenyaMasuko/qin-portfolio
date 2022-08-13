import "../styles/globals.css"
import type { AppProps } from "next/app"
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  Global,
} from "@mantine/core"
import { Footer } from "../components/Layout/Footer"
import { Header } from "../components/Layout/Header"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { library } from "@fortawesome/fontawesome-svg-core"
import { far, faSun } from "@fortawesome/free-regular-svg-icons"
import { faMoon, faStar } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
library.add(far, faMoon, faStar, faSun)

const MyGlobalStyles: React.FC = () => (
  <Global
    styles={(theme) => ({
      "*, *::before, *::after": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        color:
          theme.colorScheme === "dark" ? theme.white : theme.colors.dark[6],
        lineHeight: theme.lineHeight,
      },
      header: {
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        color:
          theme.colorScheme === "dark" ? theme.white : theme.colors.dark[6],
      },
      a: {
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
          opacity: 0.6,
        },
      },
    })}
  />
)

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light")
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          fontFamily:
            '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
          fontFamilyMonospace: "Avenir Next, sans-serif",
          headings: {
            fontFamily: "Avenir Next, sans-serif",
          },
          colorScheme,
        }}
      >
        <MyGlobalStyles />
        <Header />
        <main className="pt-28 md:pt-16">
          <Component {...pageProps} />
        </main>
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp

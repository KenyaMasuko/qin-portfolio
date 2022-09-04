import "../styles/globals.css"
import { useState } from "react"
import type { AppProps } from "next/app"
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  Global,
} from "@mantine/core"

//fontAwesome regularを追加
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { SWRConfig } from "swr"
library.add(far)

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

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// })

// const fetcher = async (...args) => {
//   const res = await fetch(...args)
//   const json = await res.json()
//   return json
// }

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
        withNormalizeCSS
      >
        <MyGlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp

import { Container } from "@mantine/core"
import { HeaderOpenProvider } from "../../../context/Header"
import { HeaderLeft } from "./HeaderLeft"
import { HeaderRight } from "./HeaderRight"

export const Header = () => {
  return (
    <HeaderOpenProvider>
      <header className="w-screen fixed z-50">
        <Container
          size="lg"
          px={0}
          className="md:flex md:items-center md:py-5 md:justify-between"
        >
          <HeaderLeft />
          <HeaderRight />
        </Container>
      </header>
    </HeaderOpenProvider>
  )
}

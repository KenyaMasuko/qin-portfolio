import { HeaderOpenProvider } from "../../context/Header"
import { HeaderLeft } from "./HeaderLeft"
import { HeaderRight } from "./HeaderRight"

export const Header = () => {
  return (
    <HeaderOpenProvider>
      <header className="w-screen fixed z-50 bg-white">
        <div className="md:flex md:items-center md:py-5 md:w-10/12 md:justify-between md:mx-auto">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </header>
    </HeaderOpenProvider>
  )
}

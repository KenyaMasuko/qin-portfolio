import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React, { useContext } from "react"
import { HeaderOpenContext } from "../../context/Header"

const navItems = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const

export const HeaderRight = () => {
  const opened = useContext(HeaderOpenContext)

  return (
    <div>
      <nav
        className={`absolute md:relative top-0 transition-opacity bg-pink-500 md:bg-transparent h-screen md:h-auto w-screen md:w-auto md:pt-0 ${
          opened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
        }`}
      >
        <ul className="pt-36 md:p-0 text-2xl md:text-lg list-none font-bold m-0 pl-0 w-11/12 md:w-auto mx-auto space-y-3 md:space-y-0 md:flex md:space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <a className="text-white md:text-black no-underline hover:opacity-50 transition-opacity">
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button
              className={`bg-transparent border-solid border-gray-300 rounded-lg py-1 ${
                opened
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100 pointer-events-auto"
              }`}
            >
              <FontAwesomeIcon icon={["far", "moon"]} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

import Link from "next/link"
import React, { useContext } from "react"
import { HeaderOpenContext } from "../../context/Header"

export const HeaderRight = () => {
  const opened = useContext(HeaderOpenContext)
  console.log(opened)

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
          <li>
            <Link href="#">
              <a className="text-white md:text-black no-underline hover:opacity-50 transition-opacity">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="text-white md:text-black no-underline  hover:opacity-50 transition-opacity">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="text-white md:text-black no-underline  hover:opacity-50 transition-opacity">
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="text-white md:text-black no-underline hover:opacity-50 transition-opacity">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

import React, { useContext } from "react"
import { Burger } from "@mantine/core"
import {
  HeaderOpenContext,
  HeaderOpenToggleContext,
} from "../../context/Header"

export const HeaderLeft = () => {
  const opened = useContext(HeaderOpenContext)
  const setOpened = useContext(HeaderOpenToggleContext)

  const title = opened ? "Close navigation" : "Open navigation"

  return (
    <div className="relative z-40 pt-16 md:p-0 pb-5 w-11/12 md:w-auto mx-auto md:m-0">
      <div className="flex justify-between items-center">
        <Burger
          opened={opened}
          color={`${opened ? "#fff" : ""}`}
          onClick={() => setOpened((prev) => !prev)}
          title={title}
          className="md:hidden"
        />
        <h1
          className={`text-lg m-0 ${
            opened
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          Shimabu IT University
        </h1>
        <button
          className={`md:hidden ${
            opened
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          icon
        </button>
      </div>
    </div>
  )
}

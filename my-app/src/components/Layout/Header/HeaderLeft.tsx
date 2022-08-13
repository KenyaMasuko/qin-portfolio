import React, { useContext } from "react"
import { Burger, Container, Title, useMantineColorScheme } from "@mantine/core"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import {
  HeaderOpenContext,
  HeaderOpenToggleContext,
} from "../../../context/Header"

export const HeaderLeft = () => {
  const opened = useContext(HeaderOpenContext)
  const setOpened = useContext(HeaderOpenToggleContext)

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const title = opened ? "Close navigation" : "Open navigation"

  return (
    <Container size="lg" className="relative z-40 pt-16 md:p-0 pb-5 md:m-0">
      <div className="flex justify-between items-center">
        <Burger
          opened={opened}
          color={`${opened ? "#fff" : ""}`}
          onClick={() => setOpened((prev) => !prev)}
          title={title}
          className="md:hidden"
        />
        <Link href="/">
          <a className="no-underline hover:opacity-50">
            <Title
              className={`text-lg m-0 ${
                opened
                  ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
                  : "opacity-100  pointer-events-auto"
              }`}
              order={1}
            >
              Shimabu IT University
            </Title>
          </a>
        </Link>
        <button
          className={`bg-transparent border-solid border-gray-300 rounded-lg p-2 md:hidden ${
            opened
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
        >
          {dark ? (
            <FontAwesomeIcon color="white" icon={["far", "sun"]} />
          ) : (
            <FontAwesomeIcon icon={["far", "moon"]} />
          )}
        </button>
      </div>
    </Container>
  )
}

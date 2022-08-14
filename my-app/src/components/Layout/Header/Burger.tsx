import { Burger as HB } from "@mantine/core"
import { useContext } from "react"
import {
  HeaderOpenContext,
  HeaderOpenToggleContext,
} from "../../../context/Header"

export const Burger = () => {
  const opened = useContext(HeaderOpenContext)
  const setOpened = useContext(HeaderOpenToggleContext)

  const title = opened ? "Close navigation" : "Open navigation"

  return <HB opened onClick={() => setOpened((o) => !o)} title={title} />
}

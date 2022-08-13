import {
  Button as MantineButton,
  ButtonProps,
  useMantineColorScheme,
} from "@mantine/core"
import { FC } from "react"

export const Button: FC<ButtonProps> = ({
  children = "View All",
  type = "button",
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <MantineButton
      type={type}
      color="dark"
      radius="xl"
      className="hover:opacity-50"
      sx={{
        backgroundColor: dark ? "white" : "black",
        color: dark ? "black" : "white",
        fontFamily: "Avenir Next, sans-serif",
        ":hover": {
          opacity: 0.5,
          backgroundColor: dark ? "white" : "black",
        },
      }}
    >
      {children}
    </MantineButton>
  )
}

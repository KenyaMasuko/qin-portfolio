import {
  Button as MantineButton,
  Group,
  useMantineColorScheme,
} from "@mantine/core"
import Link from "next/link"
import { FC, ReactNode } from "react"

type ButtonProps = {
  link: string
  children?: ReactNode
}

export const LinkButton: FC<ButtonProps> = ({
  children = "View All",
  link,
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Link href={link} passHref>
      <MantineButton
        component="a"
        radius="xl"
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
    </Link>
  )
}

import { Button as MantineButton } from "@mantine/core"
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
  return (
    <Link href={link} passHref>
      <MantineButton
        component="a"
        radius="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          fontFamily: "Avenir Next, sans-serif",
          "&:hover": {
            opacity: 0.5,
            backgroundColor:
              theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
          },
        })}
      >
        {children}
      </MantineButton>
    </Link>
  )
}

import { Button as MantineButton, Group } from "@mantine/core"
import Link from "next/link"
import { FC, ReactNode } from "react"

type ButtonProps = {
  link: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({ children = "View All", link }) => {
  return (
    <Link href={link} passHref>
      <Group position="center">
        <MantineButton component="a" color="dark" radius="xl">
          {children}
        </MantineButton>
      </Group>
    </Link>
  )
}

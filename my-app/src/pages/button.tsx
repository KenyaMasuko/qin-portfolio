import { Button, Group } from "@mantine/core"
import React from "react"
import { Layout } from "../components/Layout"

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group position="center">
        <Button>Press</Button>
      </Group>
    </Layout>
  )
}

export default ButtonDemo

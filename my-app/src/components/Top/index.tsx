import { SimpleGrid } from "@mantine/core"
import React from "react"
import { BlogTop } from "./Blog"
import { FirstView } from "./FirstView"
import { GithubTop } from "./Github"
import { PortfolioTop } from "./Portfolio"
import { Twitter } from "./Twitter"

export const AppTop = () => {
  return (
    <>
      <FirstView />
      <BlogTop />
      <PortfolioTop />
      <SimpleGrid
        className="md:w-11/12 md:mx-auto"
        breakpoints={[{ minWidth: 768, cols: 2, spacing: "md" }]}
      >
        <GithubTop />
        <Twitter />
      </SimpleGrid>
    </>
  )
}

import { Box, Container, SimpleGrid } from "@mantine/core"
import React from "react"
import { BlogTop } from "./Blog"
import { FirstView } from "./FirstView"
import { GithubTop } from "./Github"
import { PortfolioTop } from "./Portfolio"
import { Twitter } from "./Twitter"

export const Main = () => {
  return (
    <Box className="space-y-5">
      <FirstView />
      <BlogTop />
      <PortfolioTop />
      <Container size="lg">
        <SimpleGrid
          spacing={60}
          breakpoints={[{ minWidth: 768, cols: 2, spacing: "md" }]}
        >
          <Box>
            <GithubTop />
          </Box>
          <Box>
            <Twitter />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

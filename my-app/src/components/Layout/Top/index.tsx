import { Box, Container, SimpleGrid } from "@mantine/core";
import React from "react";
import { BlogTop } from "./blog";
import { FirstView } from "./firstView";
import { GithubTop } from "./github";
import { PortfolioTop } from "./portfolio";
import { Twitter } from "./twitter";

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
  );
};

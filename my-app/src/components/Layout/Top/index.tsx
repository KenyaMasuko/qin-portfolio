import { Box, Container, SimpleGrid } from "@mantine/core";
import React, { FC } from "react";
import { Blog } from "src/types/blog";
import { BlogTop } from "./Blog";
import { FirstView } from "./FirstView";
import { GithubTop } from "./Github";
import { PortfolioTop } from "./Portfolio";
import { Twitter } from "./Twitter";

export const Main: FC<{ posts: Blog[] }> = ({ posts }) => {
  return (
    <Box className="space-y-5">
      <FirstView />
      <BlogTop posts={posts} />
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

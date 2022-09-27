import { Box, Container, SimpleGrid } from "@mantine/core";
import React, { FC } from "react";
import { Blog } from "src/types/type";
import { BlogTop } from "./blog";
import { FirstView } from "./firstView";
import { GithubTop } from "./github";
import { PortfolioTop } from "./portfolio";
import { Twitter } from "./twitter";

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

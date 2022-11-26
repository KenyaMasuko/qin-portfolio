import { Box, Container, Loader, SimpleGrid } from "@mantine/core";
import React, { FC, Suspense, useEffect } from "react";
import { Blog } from "src/types/blog";
import { useGithubClient } from "src/utils/githubClient";
import { BlogTop } from "./Blog";
import { FirstView } from "./FirstView";
import { GithubTop } from "./Github";
import { PortfolioTop } from "./Portfolio";
import { Twitter } from "./Twitter";
export const Main: FC<{ posts: Blog[] }> = ({ posts }) => {
  return (
    <Box className="space-y-5">
      <FirstView />
      <Suspense fallback={<Loader />}>
        <BlogTop posts={posts} />
      </Suspense>
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
            <Suspense fallback={<Loader />}>
              <Twitter />
            </Suspense>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

import { Blog as BlogType } from "@/common/types/blog";
import { Box, Container, Loader, SimpleGrid } from "@mantine/core";
import { FC, Suspense, useEffect } from "react";
import { BlogSection } from "./components/Blog";
import { GithubSection } from "./components/Github";
import { KeyVisualSection } from "./components/KeyVisual";
import { PortfolioSection } from "./components/Portfolio";
import { TwitterSection } from "./components/Twitter";

export const Main: FC<{ posts: BlogType[] }> = ({ posts }) => {
  return (
    <Box className="space-y-5">
      <KeyVisualSection />
      <Suspense fallback={<Loader />}>
        <BlogSection posts={posts} />
      </Suspense>
      <PortfolioSection />
      <Container size="lg">
        <SimpleGrid
          spacing={60}
          breakpoints={[{ minWidth: 768, cols: 2, spacing: "md" }]}
        >
          <Box>
            <GithubSection />
          </Box>
          <Box>
            <Suspense fallback={<Loader />}>
              <TwitterSection />
            </Suspense>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

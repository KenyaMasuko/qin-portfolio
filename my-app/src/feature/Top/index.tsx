import { Blog as BlogType } from "@/common/types/blog";
import { Box, Container, Loader, SimpleGrid } from "@mantine/core";
import dynamic from "next/dynamic";
import { FC, Suspense, lazy } from "react";
import { BlogSection } from "./components/Blog";
import GithubSection from "./components/Github";
import { KeyVisualSection } from "./components/KeyVisual";
import { PortfolioSection } from "./components/Portfolio";
import { TwitterSection } from "./components/Twitter";
import { ErrorBoundary } from "react-error-boundary";

const GithubSuspenseSection = lazy(
  () => import("@/feature/Top/components/Github")
);
// const GithubSuspenseSection = dynamic(
//   () => import("@/feature/Top/components/Github"),
//   {
//     suspense: true,
//   }
// );

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
            <ErrorBoundary fallback={<div>データのフェッチに失敗しました</div>}>
              <Suspense fallback={<Loader />}>
                <GithubSuspenseSection />
              </Suspense>
            </ErrorBoundary>
          </Box>
          <Box>
            <ErrorBoundary fallback={<div>データのフェッチに失敗しました</div>}>
              <Suspense fallback={<Loader />}>
                <TwitterSection />
              </Suspense>
            </ErrorBoundary>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

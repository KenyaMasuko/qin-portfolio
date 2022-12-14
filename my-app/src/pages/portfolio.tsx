import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Container, Image, SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import { AppMain } from "@/common/components/Layout/Main";

const Portfolio: NextPage = () => {
  return (
    <>
      <AppMain
        title="けんやのポートフォリオ | 実績ページ"
        description="けんやが実際に担当したプロジェクトです。"
      >
        <Container size="lg">
          <HeadingTitle>Portfolio</HeadingTitle>
          <SimpleGrid
            breakpoints={[
              { minWidth: 768, cols: 2, spacing: "md" },
              { minWidth: 1280, cols: 3, spacing: "lg" },
            ]}
          >
            {[...Array(6)].map((_, i) => (
              <article key={i}>
                <div className="bg-blue-600">
                  <Image src="/assets/itkingdom.png" alt="" />
                </div>
                <div className="space-y-4 pt-4">
                  <h2 className="text-xl my-2">IT KINGDOM</h2>
                  <p className="text-base my-0">
                    当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                  </p>
                  <span className="text-xs font-bold text-gray-400 block">
                    2022-07-11
                  </span>
                </div>
              </article>
            ))}
          </SimpleGrid>
        </Container>
      </AppMain>
    </>
  );
};

export default Portfolio;

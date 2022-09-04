import { Container, Image, SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import { MetaHead } from "src/components/element/head";
import { HeadingTitle } from "src/components/element/title";
import { AppMain } from "src/components/layout/main";

const Portfolio: NextPage = () => {
  return (
    <>
      <MetaHead title="Portfolio" description="ポートフォリオページ" />
      <AppMain>
        <Container size="lg">
          <HeadingTitle title="Portfolio" />
          <SimpleGrid
            breakpoints={[
              { minWidth: 768, cols: 2, spacing: "md" },
              { minWidth: 1280, cols: 3, spacing: "lg" },
            ]}
          >
            {[...Array(6)].map((_, i) => (
              <article key={i}>
                <div className="bg-blue-600">
                  <Image src="/assets/itkingdom.png" />
                </div>
                <div className="space-y-4 pt-4">
                  <h2 className="text-xl my-2">"IT KINGDOM"</h2>
                  <p className="text-base my-0">
                    "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
                  </p>
                  <span className="text-xs font-bold text-gray-400 block">
                    "2022-07-11"
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

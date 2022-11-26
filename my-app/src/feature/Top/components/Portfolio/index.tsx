/* eslint-disable react/no-unescaped-entities */
import { LinkButton } from "@/common/components/ui-elements/LinkButton";
import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Center, Container, Image, SimpleGrid } from "@mantine/core";

export const PortfolioSection = () => {
  return (
    <section>
      <Container size="lg" className="mx-auto">
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
                <Image src="/assets/itkingdom.png" alt="itkingdom" />
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
        <Center className="mt-12">
          <LinkButton link="/portfolio" />
        </Center>
      </Container>
    </section>
  );
};

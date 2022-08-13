import { Center, Image, SimpleGrid } from "@mantine/core"
import React from "react"
import { Button } from "../Element/Button"
import { Title } from "../Element/Title"

export const PortfolioTop = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Portfolio" />
        <div className="space-y-10">
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
        </div>
        <Center className="mt-12">
          <Button link="/portfolio" />
        </Center>
      </div>
    </section>
  )
}

import { Image } from "@mantine/core"
import React from "react"
import { Button } from "../Element/Button"
import { Title } from "../Title"

export const PortfolioTop = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Portfolio" />
        <div className="space-y-6">
          <article>
            <div className="bg-blue-600">
              <Image src="/assets/itkingdom.png" />
            </div>
            <div className="space-y-6">
              <article className="space-y-4">
                <h2 className="text-xl my-2">IT KINGDOM</h2>
                <p className="text-base my-0">
                  当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
                </p>
                <time
                  className="text-xs font-bold text-gray-400 block"
                  dateTime="2021-10"
                >
                  2021.10 - 2021.12
                </time>
              </article>
            </div>
          </article>
        </div>
        <Button link="/portfolio" />
      </div>
    </section>
  )
}

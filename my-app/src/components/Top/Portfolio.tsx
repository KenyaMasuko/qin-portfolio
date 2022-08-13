import { Image } from "@mantine/core"
import React from "react"
import Portfolio from "../../pages/portfolio"
import { Button } from "../Element/Button"
import { Title } from "../Element/Title"

type Portfolio = {
  id: number
  image: string
  title: string
  body: string
  date: string
}

export const PortfolioTop = () => {
  const Portfolios: Portfolio[] = [
    {
      id: 1,
      image: "/assets/itkingdom.png",
      title: "IT KINGDOM",
      body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
      date: "2022-07-11",
    },
    {
      id: 2,
      image: "/assets/itkingdom.png",
      title: "IT KINGDOM",
      body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
      date: "2022-07-11",
    },
    {
      id: 3,
      image: "/assets/itkingdom.png",
      title: "IT KINGDOM",
      body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
      date: "2022-07-11",
    },
    {
      id: 4,
      image: "/assets/itkingdom.png",
      title: "IT KINGDOM",
      body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
      date: "2022-07-11",
    },
  ]

  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Portfolio" />
        <div className="space-y-10">
          {Portfolios?.map((portfolio) => (
            <article key={portfolio.id}>
              <div className="bg-blue-600">
                <Image src={portfolio.image} />
              </div>
              <div className="space-y-4 pt-4">
                <h2 className="text-xl my-2">{portfolio.title}</h2>
                <p className="text-base my-0">{portfolio.body}</p>
                <span className="text-xs font-bold text-gray-400 block">
                  {portfolio.date}
                </span>
              </div>
            </article>
          ))}
        </div>
        <Button link="/portfolio" />
      </div>
    </section>
  )
}

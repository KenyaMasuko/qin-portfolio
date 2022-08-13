import React, { ReactNode } from "react"
import { Button } from "../Element/Button"
import { Title } from "../Element/Title"

type Blog = {
  id: number
  title: string
  body: string
  date: string
}

export const BlogTop = () => {
  const articles: Blog[] = [
    {
      id: 1,
      title: "This is Header",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022-07-11",
    },
    {
      id: 2,
      title: "This is Header",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022-07-11",
    },
    {
      id: 3,
      title: "This is Header",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022-07-11",
    },
    {
      id: 4,
      title: "This is Header",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022-07-11",
    },
  ]

  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Blog" />
        <div className="space-y-6">
          {articles?.map((article) => (
            <article key={article.id} className="space-y-2">
              <h2 className="text-xl my-0">{article.title}</h2>
              <p className="text-base my-0">{article.body}</p>
              <time
                className="text-xs font-bold text-gray-400 block"
                dateTime={article.date}
              >
                {article.date.replaceAll("-", ".")}
              </time>
            </article>
          ))}
        </div>
        <Button link="/blog" />
      </div>
    </section>
  )
}

import React, { ReactNode } from "react"
import { Button } from "../Element/Button"
import { Title } from "../Title"
type Blog = {
  id: number
}

export const BlogTop = () => {
  const articles: Blog[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ]
  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Blog" />
        <div className="space-y-6">
          {articles?.map((article) => (
            <article key={article.id} className="space-y-2">
              <h2 className="text-xl my-0">This is Header</h2>
              <p className="text-base my-0">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <time
                className="text-xs font-bold text-gray-400 block"
                dateTime="2022-07-11"
              >
                2022.07.11
              </time>
            </article>
          ))}
        </div>
        <Button link="/blog" />
      </div>
    </section>
  )
}

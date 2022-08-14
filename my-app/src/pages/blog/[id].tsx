import { Container } from "@mantine/core"
import type { NextPage } from "next"
import { MetaHead } from "../../components/Element/Head"
import { HeadingTitle } from "../../components/Element/Title"
import { AppMain } from "../../components/Layout/Main"

const BlogDetail: NextPage = () => {
  return (
    <>
      <MetaHead title="blog detail page" description="blogの詳細ページです" />
      <AppMain>
        <Container size="lg">
          <article className="space-y-2">
            <HeadingTitle title="This is Header" />
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
        </Container>
      </AppMain>
    </>
  )
}

export default BlogDetail

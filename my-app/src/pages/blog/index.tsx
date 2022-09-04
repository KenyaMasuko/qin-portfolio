import { Container } from "@mantine/core"
import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { QueryClient } from "react-query"
import { MetaHead } from "src/components/element/head"
import { HeadingTitle } from "src/components/element/title"
import { InfiniteScroll } from "src/components/infiniteScroll"
import { AppMain } from "src/components/layout/main"
// import { useQueryBlogs } from "src/hooks/useQueryBlogs"
import { MockBlogData } from "src/mock/MockBlogData"
import { getAllPost } from "src/utils/microCMS"
import useSWR from "swr"

const Blog: NextPage<any> = ({ res }) => {
  const router = useRouter()
  const mockBlogData = new MockBlogData()
  return (
    <>
      <MetaHead title="blog" description="ブログページ" />
      <AppMain>
        <Container size="lg">
          <HeadingTitle title="Blog" />
          <div className="space-y-6">
            {mockBlogData.blogPosts.map((blog, index) => (
              <article key={index} className="space-y-2">
                <Link href={`${router.pathname}/${index}`}>
                  <a className="no-underline hover:opacity-50 space-y-3">
                    <h2 className="text-xl my-0">{blog.header}</h2>
                    <p className="text-base my-0">{blog.description}</p>
                    <time
                      className="text-xs font-bold text-gray-400 block"
                      dateTime={`${blog.date}`}
                    >
                      {blog.date}
                    </time>
                  </a>
                </Link>
              </article>
            ))}
          </div>
          <InfiniteScroll
            loadMoreData={async () => await mockBlogData.loadMorePosts()}
          />
        </Container>
      </AppMain>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const getBlog = async () => {
  //   const res = await microCMS.get({
  //     endpoint: "blogs",
  //   })
  //   return res
  // }
  // try {
  //   const blogs = await getBlog()
  //   console.log(blogs)
  // } catch (error) {
  //   console.log(error)
  // }

  return { props: {} }
}

export default Blog

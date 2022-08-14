import { Container } from "@mantine/core"
import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { MetaHead } from "../components/Element/Head"
import { HeadingTitle } from "../components/Element/Title"
import { InfiniteScroll } from "../components/InfiniteScroll"
import { AppMain } from "../components/Layout/Main"
import { MockBlogData } from "../Mock/MockBlogData"

const Blog: NextPage = () => {
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
            {/* {[...Array(4)].map((_, i) => (
            ))} */}
          </div>
          <InfiniteScroll
            loadMoreData={async () => await mockBlogData.loadMorePosts()}
          />
        </Container>
      </AppMain>
    </>
  )
}

export default Blog

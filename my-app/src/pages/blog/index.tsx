import { Container } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConvertContent } from "src/components/element/convertContent";
import { ConvertDate } from "src/components/element/convertDate";
import { MetaHead } from "src/components/element/head";
import { HeadingTitle } from "src/components/element/title";
import { AppMain } from "src/components/layout/main";
import { Blog } from "src/types/type";
import { getAllPosts } from "src/utils/microCMS";

const Blog: NextPage<{ posts: Blog[] }> = ({ posts }) => {
  const router = useRouter();
  return (
    <>
      <MetaHead title="blog" description="ブログページ" />
      <AppMain>
        <Container size="lg">
          <HeadingTitle>Blog</HeadingTitle>
          <div className="space-y-6">
            {posts?.map((post) => (
              <article key={post.id} className="space-y-2">
                <Link href={`${router.pathname}/${post.id}`}>
                  <a className="no-underline hover:opacity-50 space-y-3">
                    <h2 className="text-xl my-0">{post.title}</h2>
                    <div className="text-base my-0">
                      <ConvertContent contentHTML={post.content} />
                    </div>
                    <ConvertDate dateISO={post.publishedAt} />
                  </a>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </AppMain>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts } };
};

export default Blog;

import { Center, Container } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ConvertContent } from "src/components/element/convertContent";
import { ConvertDate } from "src/components/element/convertDate";
import { LinkButton } from "src/components/element/linkButton";
import { HeadingTitle } from "src/components/element/title";
import { Blog } from "src/types/type";

export const BlogTop: FC<{ posts: Blog[] }> = ({ posts }) => {
  const router = useRouter();
  return (
    <section>
      <Container size="lg">
        <HeadingTitle>Blog</HeadingTitle>
        <div className="space-y-6">
          {posts?.map((post) => (
            <article key={post.id} className="space-y-2">
              <Link href={`blog/${post.id}`}>
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
        <Center className="mt-12">
          <LinkButton link="/blog" />
        </Center>
      </Container>
    </section>
  );
};

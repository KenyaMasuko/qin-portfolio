import { LinkButton } from "@/common/components/ui-elements/LinkButton";
import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Center, Container } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { ConvertContent } from "@/common/components/functional/ConvertContent";
import { ConvertDate } from "@/common/components/functional/ConvertDate";
import { Blog as BlogType } from "@/common/types/blog";

export const BlogSection: FC<{ posts: BlogType[] }> = ({ posts }) => {
  return (
    <section>
      <Container size="lg">
        <HeadingTitle>Blog</HeadingTitle>
        <div className="space-y-6">
          {posts?.map((post) => (
            <article key={post.id} className="space-y-2">
              <Link href={`blog/${post.id}`} legacyBehavior>
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

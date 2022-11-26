import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Container } from "@mantine/core";
import type { GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { ConvertContent } from "@/common/components/functional/ConvertContent";
import { ConvertDate } from "@/common/components/functional/ConvertDate";
import { AppMain } from "@/common/components/Layout/Main";
import { Blog } from "@/common/types/blog";
import { getAllIds, getPostById } from "@/common/utils/microCMS";

const BlogDetail: NextPage<{ post: Omit<Blog, "id"> }> = ({ post }) => {
  const { title, publishedAt, content } = post;

  return (
    <>
      <AppMain title={`けんやのポートフォリオ | ${title}`} description={title}>
        <Container size="lg">
          <article className="space-y-2">
            <HeadingTitle>{title}</HeadingTitle>
            <div className="text-base my-0">
              <ConvertContent contentHTML={content} />
            </div>
            <ConvertDate dateISO={publishedAt} />
          </article>
        </Container>
      </AppMain>
    </>
  );
};

export const getStaticPaths = async () => {
  const allPostIds = await getAllIds();
  const paths = allPostIds?.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

type Params = ParsedUrlQuery & { id: string };

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const { id } = context.params!;

  const post = await getPostById(id);

  return { props: { post } };
};
export default BlogDetail;

import { Container } from "@mantine/core";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { ConvertContent } from "src/context/Element/ConvertContent";
import { ConvertDate } from "src/context/Element/ConvertDate";
import { MetaHead } from "src/context/Element/Head";
import { HeadingTitle } from "src/context/Element/Title";
import { AppMain } from "src/context/Layout/Main";
import { Blog } from "src/types/type";
import { getAllIds, getPostById } from "src/utils/microCMS";

const BlogDetail: NextPage<{ post: Omit<Blog, "id"> }> = ({ post }) => {
  const { title, publishedAt, content } = post;

  return (
    <>
      <MetaHead title="blog detail page" description="blogの詳細ページです" />
      <AppMain>
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

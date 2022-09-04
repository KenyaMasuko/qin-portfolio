import { Container } from "@mantine/core";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { ConvertContent } from "src/components/element/convertContent";
import { ConvertDate } from "src/components/element/convertDate";
import { Blog } from "src/types/type";
import { getAllIds, getPostById } from "src/utils/microCMS";
import { MetaHead } from "../../components/element/head";
import { HeadingTitle } from "../../components/element/title";
import { AppMain } from "../../components/layout/main";
import parse from "html-react-parser";

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

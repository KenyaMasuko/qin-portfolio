import type { NextPage } from "next";
import { MetaHead } from "src/components/Element/Head";
import { AppMain } from "src/components/Layout/Main";
import { Main } from "src/components/Layout/Top";
import { Blog } from "src/types/blog";
import { getAllPosts } from "src/utils/microCMS";

const Home: NextPage<{ posts: Blog[] }> = ({ posts }) => {
  return (
    <>
      <MetaHead
        title="Kenya's Portfolio"
        description="けんやのポートフォリオのためのページです"
      />
      <AppMain>
        <Main posts={posts} />
      </AppMain>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPosts(5);

  return {
    props: { posts },
  };
};

export default Home;

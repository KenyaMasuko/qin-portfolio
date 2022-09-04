import type { NextPage } from "next";
import { MetaHead } from "src/components/element/head";
import { AppMain } from "src/components/layout/main";
import { Main } from "src/components/layout/top";
import { Blog } from "src/types/type";
import { getAllPosts } from "src/utils/microCMS";

const Home: NextPage<{ posts: Blog[] }> = ({ posts }) => {
  return (
    <>
      <MetaHead
        title="Shinmabu It University"
        description="しまぶーのポートフォリオのためのページです"
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

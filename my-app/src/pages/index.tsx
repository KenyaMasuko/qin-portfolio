import type { NextPage } from "next";
import { MetaHead } from "src/context/Element/Head";
import { AppMain } from "src/context/Layout/Main";
import { Main } from "src/context/Layout/Top";
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

import type { NextPage } from "next";
import { AppMain } from "src/components/Layout/Main";
import { Main } from "src/components/Layout/Top";
import { Blog } from "src/types/blog";
import { getAllPosts } from "src/utils/microCMS";

const Home: NextPage<{ posts: Blog[] }> = ({ posts }) => {
  return (
    <>
      <AppMain
        title="けんやのポートフォリオ | トップ"
        description="Frontend web developerのけんやです。けんやの実績やTweet、Githubのリポジトリなどがみれるようになっています。"
      >
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

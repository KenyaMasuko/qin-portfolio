import type { NextPage } from "next";
import { AppMain } from "@/common/components/Layout/Main";
import { Main } from "src/feature/Top";
import { Blog } from "@/common/types/blog";
import { getAllPosts } from "@/common/utils/microCMS";

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

import type { NextPage } from "next";
import { MetaHead } from "src/components/element/head";
import { AppMain } from "src/components/lay/ma";
import { Main } from "src/components/lay/to";

const Home: NextPage = () => {
  return (
    <>
      <MetaHead
        title="Shinmabu It University"
        description="しまぶーのポートフォリオのためのページです"
      />
      <AppMain>
        <Main />
      </AppMain>
    </>
  );
};

export default Home;

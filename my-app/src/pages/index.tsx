import type { NextPage } from "next"
import { MetaHead } from "src/components/Element/Head"
import { AppMain } from "src/components/Layout/Main"
import { Main } from "src/components/Layout/Top"

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
  )
}

export default Home

import type { NextPage } from "next"
import { MetaHead } from "../components/Element/Head"
import { AppMain } from "../components/Layout/Main"
import { Main } from "../components/Layout/Top"

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

import type { NextPage } from "next"
import { MetaHead } from "../components/Element/Head"
import { AppTop } from "../components/Top"

const Home: NextPage = () => {
  return (
    <>
      <MetaHead
        title="Shinmabu It University"
        description="しまぶーのポートフォリオのためのページです"
      />
      <AppTop />
    </>
  )
}

export default Home

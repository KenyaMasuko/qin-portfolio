import type { NextPage } from "next"
import { BlogTop } from "../components/Top/Blog"
import { PortfolioTop } from "../components/Top/Portfolio"
import { FirstView } from "../components/Top/FirstView"
import { GithubTop } from "../components/Top/Github"
import { Twitter } from "../components/Top/Twitter"
import { MetaHead } from "../components/Element/Head"

const Home: NextPage = () => {
  return (
    <>
      <MetaHead
        title="Shinmabu It University"
        description="しまぶーのポートフォリオのためのページです"
      />
      <FirstView />
      <BlogTop />
      <PortfolioTop />
      <GithubTop />
      <Twitter />
    </>
  )
}

export default Home

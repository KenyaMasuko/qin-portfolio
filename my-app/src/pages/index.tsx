import type { NextPage } from "next"
import { BlogTop } from "../components/Top/Blog"
import { PortfolioTop } from "../components/Top/Portfolio"
import { FirstView } from "../components/Top/FirstView"
import { GithubTop } from "../components/Top/Github"

const Home: NextPage = () => {
  return (
    <>
      <FirstView />
      <BlogTop />
      <PortfolioTop />
      <GithubTop />
    </>
  )
}

export default Home

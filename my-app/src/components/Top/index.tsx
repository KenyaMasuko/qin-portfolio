import React from "react"
import { BlogTop } from "./Blog"
import { FirstView } from "./FirstView"
import { GithubTop } from "./Github"
import { PortfolioTop } from "./Portfolio"
import { Twitter } from "./Twitter"

export const AppTop = () => {
  return (
    <>
      <FirstView />
      <BlogTop />
      <PortfolioTop />
      <GithubTop />
      <Twitter />
    </>
  )
}

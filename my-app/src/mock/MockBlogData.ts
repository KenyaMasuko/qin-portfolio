import { Dispatch, SetStateAction, useState } from "react"
import { BlogPost } from "src/components/layout/top/blog"

export class MockBlogData {
  readonly blogPosts: BlogPost[]
  private readonly setBlogPosts: Dispatch<
    SetStateAction<{ header: string; description: string; date: string }[]>
  >

  constructor() {
    const [blogPosts, setBlogPosts] = useState(this.createDummyPosts())
    this.blogPosts = blogPosts
    this.setBlogPosts = setBlogPosts
  }

  /**
   * postを新しく生成して、既存のpostに追加する
   * @return {Boolean} moreDataYet
   */
  async loadMorePosts() {
    await this.delay(2000)
    const newPosts = this.createDummyPosts()
    this.setBlogPosts([...this.blogPosts, ...newPosts])
    return { moreDataYet: this.blogPosts.length < 20 }
  }

  /**
   * dummyPostsを生成
   */
  private createDummyPosts = () =>
    [...Array(5)].map((_) => ({
      header: "This is Header",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      date: "2022.07.11",
    }))

  private delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

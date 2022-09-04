import { createClient } from "microcms-js-sdk"

export const clientMicroCMS = createClient({
  serviceDomain: `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}`,
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
})

//全記事を取得する（記事一覧に使用）
export const getAllPost = async (limit: number = 100) => {
  try {
    const posts = await clientMicroCMS.get({
      endpoint: "blogs",
      queries: {
        fields: "title,content,createdAt",
        orders: "-createdAt",
        limit: limit,
      },
    })
    return posts.contents
  } catch (error: any) {
    console.log("~~ getAllPosts ~~")
    console.log(error)
  }
}

import { createClient } from "microcms-js-sdk";
import { Blog } from "@/common/types/blog";

export const clientMicroCMS = createClient({
  serviceDomain: `${process.env.MICROCMS_SERVICE_DOMAIN}`,
  apiKey: `${process.env.MICROCMS_API_KEY}`,
});

//IDから記事を取得
export const getPostById = async (id: string) => {
  try {
    const post = await clientMicroCMS.getListDetail<Omit<Blog, "id">>({
      endpoint: "blogs",
      queries: {
        fields: "title,content,publishedAt",
      },
      contentId: id,
    });
    return post;
  } catch (error: any) {
    console.log("~~ getPostById ~~");
    console.log(error);
  }
};

//全記事を取得する（記事一覧に使用）
export const getAllPosts = async (maxLimit: number = 100) => {
  try {
    const response = await clientMicroCMS.getList({
      endpoint: "blogs",
      queries: {
        fields: "title,content,publishedAt,id",
        orders: "-publishedAt",
        limit: maxLimit,
      },
    });

    const posts: Blog[] = response.contents;

    return posts;
  } catch (error: any) {
    console.log("~~ getAllPosts ~~");
    console.log(error);
  }
};

//全記事のIDを取得
export const getAllIds = async (maxLimit: number = 100) => {
  try {
    const response = await clientMicroCMS.getList({
      endpoint: "blogs",
      queries: {
        fields: "title,id",
        orders: "-publishedAt",
        limit: maxLimit,
      },
    });

    const ids: Omit<Blog[], "publishedAt" | "content"> = response.contents;

    return ids;
  } catch (error: any) {
    console.log("~~ getAllIds ~~");
    console.log(error);
  }
};

import { useQuery } from "react-query"

/**
 * CSFの場合に使用する
 */

// export const useQueryBlogs = () => {
//   const getBlogsFromMicroCMS = async () => {
//     const res = await microCMS.get({
//       endpoint: "blogs",
//     })
//     console.log(res)
//     return res
//   }

//   //todo any型の修正
//   return useQuery({
//     queryKey: ["blogs"],
//     queryFn: getBlogsFromMicroCMS,
//     staleTime: Infinity,
//   })
// }

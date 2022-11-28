import { fetcher } from "@/common/utils/fetcher";
import useSWR from "swr";

export const useFetchTweets = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/tweets`,
    fetcher,
    { suspense: true }
  );

  return {
    tweets: data?.data,
    userName: data?.includes.users[0].username,
    userScreenName: data?.includes.users[0].name,
    profileImageUrl: data?.includes.users[0].profile_image_url,
    isError: error,
  };
};

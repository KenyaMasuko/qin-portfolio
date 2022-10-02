import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useFetchTweets = () => {
  const { data, error } = useSWR("./api/tweets", fetcher);

  return {
    tweets: data?.data,
    userName: data?.includes.users[0].username,
    userScreenName: data?.includes.users[0].name,
    profileImageUrl: data?.includes.users[0].profile_image_url,
    isLoading: !error && !data,
    isError: error,
  };
};

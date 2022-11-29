import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Avatar, Center } from "@mantine/core";
import { FormatTwitterDate } from "@/common/components/functional/ConvertDate";
import { useFetchTweets } from "@/common/hooks/useFetchTweets";
import { TweetData } from "@/common/types/twitter";
import { OuterLinkButton } from "@/common/components/ui-elements/OuterLinkButton";

export const TwitterSection = () => {
  const {
    tweets,
    userName,
    profileImageUrl,
    userScreenName,
    isError,
  }: TweetData = useFetchTweets();

  if (isError) {
    return <div>データの取得に失敗しました</div>;
  }

  return (
    <section>
      <HeadingTitle>Twitter</HeadingTitle>
      <div className="space-y-6">
        {tweets?.map((tweet) => (
          <article key={tweet.created_at} className="flex items-start">
            <div className="relative w-9 h-9">
              <Avatar
                radius="xl"
                src={profileImageUrl}
                alt="プロフィール画像"
              />
            </div>
            <div className="ml-4">
              <div className="flex items-center space-x-2">
                <h2 className="m-0 text-base">{userScreenName}</h2>
                <span className="text-xs text-gray-400 font-bold">
                  <span>@{userName} ・</span>
                  <time dateTime="2022-05-25">
                    {FormatTwitterDate(tweet.created_at)}
                  </time>
                </span>
              </div>
              <p className="text-sm">{tweet.text}</p>
            </div>
          </article>
        ))}
      </div>
      <Center className="mt-12">
        <OuterLinkButton link="https://twitter.com/k_e1sh1n">
          View on Twitter
        </OuterLinkButton>
      </Center>
    </section>
  );
};

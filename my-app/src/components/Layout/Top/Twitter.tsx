import { Avatar, Center, Image } from "@mantine/core";
import React from "react";
import { FormatTwitterDate } from "src/components/Element/ConvertDate";
import { LinkButton } from "src/components/Element/LinkButton";
import { HeadingTitle } from "src/components/Element/Title";
import { useFetchTweets } from "src/hooks/useFetchTweets";
import { TweetData } from "src/types/twitter";

export const Twitter = () => {
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
        <LinkButton link="https://twitter.com/k_e1sh1n">
          View on Twitter
        </LinkButton>
      </Center>
    </section>
  );
};

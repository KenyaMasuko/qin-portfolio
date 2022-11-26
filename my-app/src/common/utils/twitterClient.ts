import { Client } from "twitter-api-sdk";
type UserInfo = {
  name: string;
  id: string;
  username: string;
  profile_image_url: string;
};

export const fetchTweetsAndUser = async () => {
  const twitterClient = new Client(`${process.env.TWITTER_BEARER_TOKEN}`);
  const data = await twitterClient.tweets.tweetsRecentSearch({
    //One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length
    query: "(from:k_e1sh1n)",

    //A comma separated list of fields to expand.
    expansions: ["author_id"],

    //A comma separated list of User fields to display.
    "tweet.fields": ["created_at"],

    //A comma separated list of User fields to display.
    "user.fields": ["profile_image_url"],

    //The maximum number of results
    max_results: 10,
  });

  return data;
};

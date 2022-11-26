export type TweetData = {
  tweets: {
    author_id: string;
    created_at: string;
    edit_history_tweet_ids: string[];
    id: string;
    text: string;
  }[];
  userName: string;
  profileImageUrl: string;
  userScreenName: string;
  isError: string | undefined;
};

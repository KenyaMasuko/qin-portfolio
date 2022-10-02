import { NextApiRequest, NextApiResponse } from "next";
import { fetchTweetsAndUser } from "src/utils/twitterClient";

const getTweets = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fetchTweetsAndUser();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json("データが見つかりませんでした");
  }
};

export default getTweets;

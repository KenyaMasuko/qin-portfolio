import { gql, GraphQLClient } from "graphql-request";
import { RepositoryResponse } from "src/pages/api/github";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchGithubRepo = () => {
  const { data } = useSWR<RepositoryResponse[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/github`,
    fetcher,
    {
      suspense: true,
    }
  );

  return { data };
};

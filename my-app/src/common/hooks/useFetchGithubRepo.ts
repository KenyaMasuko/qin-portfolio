import { RepositoryResponse } from "src/pages/api/github";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchGithubRepo = () => {
  const { data, error } = useSWR<RepositoryResponse[]>("/api/github", fetcher);

  return { data, error };
};

import { RepositoryResponse } from "src/pages/api/github";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const useGithubRepo = () => {
  const { data, error } = useSWR<RepositoryResponse[]>("/api/github", fetcher);

  return { data, error };
};

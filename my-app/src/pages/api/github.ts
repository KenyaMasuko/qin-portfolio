import { gql, GraphQLClient } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";

type ApiResponse = {
  repositoryOwner: {
    repositories: {
      nodes: RepositoryResponse[];
    };
  };
};

export type RepositoryResponse = {
  name: string;
  description: string | null;
  forks: number;
  stars: number;
  languages: {
    totalSize: number;
    edges: {
      size: number;
      node: {
        name: string;
        color: string;
      };
    }[];
  };
};

const getGithubRepo = async (
  req: NextApiRequest,
  res: NextApiResponse<RepositoryResponse[]>
) => {
  const query = gql`
    query {
      repositoryOwner(login: "KenyaMasuko") {
        repositories(last: 3) {
          nodes {
            name
            description
            forks: forkCount
            stars: stargazerCount
            languages(first: 10) {
              totalSize
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `;

  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const rawRepoInfo = await client.request<ApiResponse>(query);

  const repoInfo = rawRepoInfo.repositoryOwner.repositories.nodes.map(
    (repo) => ({
      name: repo.name,
      description: repo.description,
      forks: repo.forks,
      stars: repo.stars,
      languages: repo.languages,
    })
  );
  res.status(200).send(repoInfo);
};

export default getGithubRepo;

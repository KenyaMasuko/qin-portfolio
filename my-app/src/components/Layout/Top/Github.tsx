import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Center, Progress, Title } from "@mantine/core";
import { LinkButton } from "src/components/Element/LinkButton";
import { HeadingTitle } from "src/components/Element/Title";
import { RepositoryResponse } from "src/pages/api/github";
import { useGithubRepo } from "src/utils/githubClient";

export const GithubTop = () => {
  const { data, error } = useGithubRepo();
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>loading...</div>;

  console.log(
    data.map((repo) =>
      repo.languages.edges
        .sort((a, b) => b.size - a.size)
        .map((lang) => ({
          value: Number(
            ((lang.size / repo.languages.totalSize) * 100).toFixed(1)
          ),
          color: lang.node.color,
        }))
    )
  );

  return (
    <section>
      <HeadingTitle>Github</HeadingTitle>
      <div className="space-y-6">
        {data.map((repo: RepositoryResponse) => (
          <article key={repo.name} className="space-y-4">
            <Title order={2} className="text-lg my-0">
              {repo.name}
            </Title>
            {repo.description && (
              <p className="text-base my-0">{repo.description}</p>
            )}
            <p className="text-base my-0"></p>
            <div className="text-xs text-gray-400 font-bold space-x-2 flex">
              <div>
                <FontAwesomeIcon icon={["far", "star"]} />
                <span>{repo.stars}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCodeFork} />
                <span>{repo.forks}</span>
              </div>
            </div>
            <Progress
              size="md"
              radius="xl"
              sections={repo.languages.edges
                .sort((a, b) => b.size - a.size)
                .map((lang) => ({
                  value: Number(
                    ((lang.size / repo.languages.totalSize) * 100).toFixed(1)
                  ),
                  color: lang.node.color,
                }))}
            />
            <div className="flex space-x-3">
              {repo.languages.edges
                .sort((a, b) => b.size - a.size)
                .map((lang) => {
                  const ratio = (
                    (lang.size / repo.languages.totalSize) *
                    100
                  ).toFixed(1);
                  return (
                    <>
                      <span className="flex items-center text-xs font-bold">
                        {/* <span className="bg-[#3178C6] w-2 h-2 absolute rounded-full"></span> */}
                        <span
                          className={`bg-[${lang.node.color}] w-2 h-2 absolute rounded-full`}
                        ></span>

                        <span className="ml-3">{lang.node.name}</span>
                        <span className="text-gray-400 ml-2">{ratio}%</span>
                      </span>
                    </>
                  );
                })}

              {/* <span className="flex items-center text-xs font-bold">
                <span className="bg-[#F1E05A] w-2 h-2 absolute rounded-full"></span>
                <span className="ml-3">JavaScript</span>
                <span className="text-gray-400 ml-2">30%</span>
              </span>
              <span className="flex items-center text-xs font-bold">
                <span className="bg-[#EDEDED] w-2 h-2 absolute rounded-full"></span>
                <span className="ml-3">Other</span>
                <span className="text-gray-400 ml-2">5%</span>
              </span> */}
            </div>
          </article>
        ))}
      </div>
      <Center className="mt-12">
        <LinkButton link="#">View on Github</LinkButton>
      </Center>
    </section>
  );
};

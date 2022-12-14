import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Center, Progress, Title } from "@mantine/core";
import { RepositoryResponse } from "src/pages/api/github";
import { useFetchGithubRepo } from "@/common/hooks/useFetchGithubRepo";
import { ShareIcon, StarIcon } from "@heroicons/react/24/outline";
import { OuterLinkButton } from "@/common/components/ui-elements/OuterLinkButton";

const GithubSection = () => {
  const { data } = useFetchGithubRepo();

  return (
    <section>
      <HeadingTitle>Github</HeadingTitle>
      <div className="space-y-6">
        {data?.map((repo: RepositoryResponse) => (
          <article key={repo.name} className="space-y-4">
            <Title order={2} className="text-lg my-0">
              {repo.name}
            </Title>
            {repo.description && (
              <p className="text-base my-0">{repo.description}</p>
            )}
            <p className="text-base my-0"></p>
            <div className="text-xs text-gray-400 font-bold space-x-2 flex">
              <div className="flex items-center gap-1">
                <StarIcon className="w-3" />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <ShareIcon className="w-3" />
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
                    <div key={lang.node.name}>
                      <span className="flex items-center text-xs font-bold">
                        <span
                          className={`bg-[${lang.node.color}] w-2 h-2 absolute rounded-full`}
                        ></span>

                        <span className="ml-3">{lang.node.name}</span>
                        <span className="text-gray-400 ml-2">{ratio}%</span>
                      </span>
                    </div>
                  );
                })}
            </div>
          </article>
        ))}
      </div>
      <Center className="mt-12">
        <OuterLinkButton link="https://github.com/KenyaMasuko">
          View on Github
        </OuterLinkButton>
      </Center>
    </section>
  );
};

export default GithubSection;

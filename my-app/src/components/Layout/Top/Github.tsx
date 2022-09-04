import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Center, Progress, Title } from "@mantine/core";
import React from "react";
import { LinkButton } from "src/components/element/linkButton";
import { HeadingTitle } from "src/components/element/title";

export const GithubTop = () => {
  return (
    <section>
      <HeadingTitle title="Github" />
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <article key={index} className="space-y-4">
            <Title order={2} className="text-lg my-0">
              lightsound/nexst-tailwind
            </Title>
            <p className="text-base my-0">Next.js starter template.</p>
            <div className="text-xs text-gray-400 font-bold space-x-2 flex">
              <div>
                <FontAwesomeIcon icon={["far", "star"]} />
                <span>117</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCodeFork} />
                <span>18</span>
              </div>
            </div>
            <Progress
              size="md"
              radius="xl"
              sections={[
                { value: 65, color: "#3178C6" },
                { value: 30, color: "#F1E05A" },
                { value: 5, color: "#EDEDED" },
              ]}
            />
            <div className="flex space-x-3">
              <span className="flex items-center text-xs font-bold">
                <span className="bg-[#3178C6] w-2 h-2 absolute rounded-full"></span>
                <span className="ml-3">TypeScript</span>
                <span className="text-gray-400 ml-2">65%</span>
              </span>
              <span className="flex items-center text-xs font-bold">
                <span className="bg-[#F1E05A] w-2 h-2 absolute rounded-full"></span>
                <span className="ml-3">JavaScript</span>
                <span className="text-gray-400 ml-2">30%</span>
              </span>
              <span className="flex items-center text-xs font-bold">
                <span className="bg-[#EDEDED] w-2 h-2 absolute rounded-full"></span>
                <span className="ml-3">Other</span>
                <span className="text-gray-400 ml-2">5%</span>
              </span>
            </div>
          </article>
        ))}
      </div>
      <Center className="mt-12">
        <LinkButton children="View on Github" link="#" />
      </Center>
    </section>
  );
};

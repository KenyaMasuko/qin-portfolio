import { faCodeFork } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Progress } from "@mantine/core"
import React from "react"
import { Button } from "../Button"
import { Title } from "../Title"

export const GithubTop = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Github" />
        <div className="space-y-6">
          <article>
            <div className="space-y-6">
              <article className="space-y-4">
                <h2 className="text-lg my-0">lightsound/nexst-tailwind</h2>
                <p className="text-base my-0">Next.js starter template.</p>
                <div>
                  <FontAwesomeIcon icon={["far", "star"]} />
                  <span>117</span>
                  <FontAwesomeIcon icon={faCodeFork} />
                  <span>18</span>
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
                <div className="relative">
                  <span className="before:content-[''] before:bg-[#3178C6] before:w-2 before:h-2 before:absolute">
                    TypeScript
                  </span>
                </div>
              </article>
            </div>
          </article>
        </div>
        <Button link="#" />
      </div>
    </section>
  )
}

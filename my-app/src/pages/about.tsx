import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { MetaHead } from "src/components/Element/Head";
import { HeadingTitle } from "src/components/Element/Title";
import { AppMain } from "src/components/Layout/Main";

const About: NextPage = () => {
  return (
    <>
      <MetaHead title="About" description="Aboutページ" />
      <AppMain>
        <Container size="lg">
          <HeadingTitle>About</HeadingTitle>
          <div className="space-y-6">
            <h2 className="text-xl my-0">Kenya&apos;s Profile</h2>
            <p className="text-base my-0">
              群馬県出身。中央大学を卒業後、五反田にあるスタートアップに就職。Web制作業務と並行して、Reactの勉強中。
            </p>
          </div>
        </Container>
      </AppMain>
    </>
  );
};

export default About;

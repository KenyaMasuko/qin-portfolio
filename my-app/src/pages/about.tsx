import { HeadingTitle } from "@/common/components/ui-elements/Title";
import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { AppMain } from "@/common/components/Layout/Main";

const About: NextPage = () => {
  return (
    <>
      <AppMain
        title="けんやのポートフォリオ | Aboutページ"
        description="けんやについてのページです"
      >
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

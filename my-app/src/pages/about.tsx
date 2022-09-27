import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { MetaHead } from "src/context/Element/Head";
import { HeadingTitle } from "src/context/Element/Title";
import { AppMain } from "src/context/Layout/Main";

const About: NextPage = () => {
  return (
    <>
      <MetaHead title="about" description="aboutページ" />
      <AppMain>
        <Container size="lg">
          <HeadingTitle>About</HeadingTitle>
          <div className="space-y-6">
            <h2 className="text-xl my-0">Lightsound Shimabu</h2>
            <p className="text-base my-0">
              ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
            </p>
          </div>
        </Container>
      </AppMain>
    </>
  );
};

export default About;

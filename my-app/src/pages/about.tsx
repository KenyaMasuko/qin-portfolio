import { Container } from "@mantine/core"
import type { NextPage } from "next"
import { HeadingTitle } from "../components/Element/Title"

const About: NextPage = () => {
  return (
    <Container size="lg">
      <HeadingTitle title="Blog" />
      <div className="space-y-6">
        <h2 className="text-xl my-0">Lightsound Shimabu</h2>
        <p className="text-base my-0">
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </p>
      </div>
    </Container>
  )
}

export default About

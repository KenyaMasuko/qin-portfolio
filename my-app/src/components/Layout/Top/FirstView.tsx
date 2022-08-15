import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Title } from "@mantine/core"
import React from "react"

export const FirstView = () => {
  return (
    <section className="bg-pink-500 text-white pt-14 pb-16">
      <Container
        size="lg"
        className="md:flex md:justify-between md:items-center"
      >
        <hgroup>
          <Title order={1} className="text-2xl md:text-4xl m-0">
            Shimabu IT University
          </Title>
          <Title order={2} className="text-base mt-1 mb-0">
            しまぶーのポートフォリオのページです
          </Title>
        </hgroup>
        <div className="space-x-3 mt-11 md:mt-0">
          <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
          <FontAwesomeIcon className="fa-lg" icon={faFacebook} />
          <FontAwesomeIcon className="fa-lg" icon={faWifi} />
        </div>
      </Container>
    </section>
  )
}

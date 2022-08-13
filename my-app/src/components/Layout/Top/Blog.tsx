import { Center, Container } from "@mantine/core"
import Link from "next/link"
import React from "react"
import { LinkButton } from "../../Element/LinkButton"
import { HeadingTitle } from "../../Element/Title"

export const BlogTop = () => {
  return (
    <section>
      <Container size="lg">
        <HeadingTitle title="Blog" />
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <article key={i} className="space-y-2">
              <Link href="#">
                <a className="no-underline hover:opacity-50 space-y-3">
                  <h2 className="text-xl my-0">"This is Header"</h2>
                  <p className="text-base my-0">
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit."
                  </p>
                  <time
                    className="text-xs font-bold text-gray-400 block"
                    dateTime="2022-07-11"
                  >
                    "2022.07.11"
                  </time>
                </a>
              </Link>
            </article>
          ))}
        </div>
        <Center className="mt-12">
          <LinkButton link="/blog" />
        </Center>
      </Container>
    </section>
  )
}
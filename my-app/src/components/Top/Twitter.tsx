import { Image } from "@mantine/core"
import Link from "next/link"
import React from "react"
import { Button } from "../Element/Button"
import { Title } from "../Title"

export const Twitter = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto md:w-10/12">
        <Title title="Twitter" />
        <div className="space-y-6">
          <article className="flex items-start">
            <div className="relative w-9 h-9">
              <Image
                src="/assets/shimabu.png"
                alt=""
                width="38px"
                height="38px"
              />
            </div>
            <div className="ml-4">
              <div className="flex items-center space-x-2">
                <h2 className="m-0 text-base">しまぶーのIT大学</h2>
                <span className="text-xs text-gray-400 font-bold">
                  <span>@shimabu_it ・</span>
                  <time dateTime="2022-05-25">5月25日</time>
                </span>
              </div>
              <p className="text-sm">
                📣 新サービス「Noway Form」をリリースしました！
                <br />
                <br />
                Noway
                Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                FormsでやっていたことがNotionだけで完結します✌✨
                <br />
                <br />
                試しに使っていただけると幸いです😊
                <br />
                <br />
                <Link href="https://www.noway-form.com/ja">
                  <a className="text-blue-400">https://www.noway-form.com/ja</a>
                </Link>
              </p>
            </div>
          </article>
        </div>
        <Button children="View on Twitter" link="#" />
      </div>
    </section>
  )
}

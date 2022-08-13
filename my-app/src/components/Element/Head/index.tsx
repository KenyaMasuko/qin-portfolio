import Head from "next/head"
import React, { FC } from "react"

type MetaHeadProps = {
  title: string
  description: string
}

export const MetaHead: FC<MetaHeadProps> = ({
  title = "Qin Portfolio",
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    </Head>
  )
}

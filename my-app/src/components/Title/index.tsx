import React, { FC, ReactNode } from "react"

type TitleProps = { title: ReactNode }

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="border-solid border-b border-x-0 border-t-0 border-b-gray-200 pb-6 pt-4 space-y-6">
      {title}
    </h1>
  )
}

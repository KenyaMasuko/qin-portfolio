import { Title as MantineTitle } from "@mantine/core";
import React, { FC, ReactNode } from "react";

type TitleProps = { children: ReactNode };

export const HeadingTitle: FC<TitleProps> = ({ children }) => {
  return (
    <MantineTitle
      order={1}
      className="border-solid border-b border-x-0 border-t-0 border-b-gray-200 pb-6 pt-4 mb-6 space-y-6 text-2xl"
    >
      {children}
    </MantineTitle>
  );
};

import { AppShell } from "@mantine/core";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

export const AppMain: FC<Props> = ({ children, title, description }) => {
  return (
    <AppShell
      header={<Header height={80} />}
      footer={<Footer />}
      styles={{
        main: {
          padding: "80px 0 0 0",
        },
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="けんや portfolio" />
        <meta
          property="og:image"
          content="https://qin-portfolio-eta.vercel.app/assets/itkingdom.png"
        />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      {children}
    </AppShell>
  );
};

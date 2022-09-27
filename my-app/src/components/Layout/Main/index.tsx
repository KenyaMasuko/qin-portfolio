import { AppShell } from "@mantine/core";
import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const AppMain: FC<{ children: ReactNode }> = ({ children }) => {
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
      {children}
    </AppShell>
  );
};

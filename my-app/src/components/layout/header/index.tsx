import { Container, Header as MantineHeader } from "@mantine/core";
import { FC } from "react";
import { HeaderOpenProvider } from "src/context/HeaderContext";
import { HeaderLeft } from "./headerLeft";
import { HeaderRight } from "./headerRight";

export const Header: FC<{ height: number }> = ({ height }) => {
  return (
    <HeaderOpenProvider>
      <MantineHeader height={height} className="w-screen">
        <Container
          size="lg"
          className="h-full py-0 md:flex md:items-center md:py-5 md:justify-between"
        >
          <HeaderLeft />
          <HeaderRight />
        </Container>
      </MantineHeader>
    </HeaderOpenProvider>
  );
};

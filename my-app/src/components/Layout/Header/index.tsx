import { Container, Header as MantineHeader } from "@mantine/core";
import { FC } from "react";
import { HeaderOpenProvider } from "src/context/HeaderContext";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

export const Header: FC<{ height: number }> = ({ height }) => {
  return (
    <HeaderOpenProvider>
      <MantineHeader height={height} className="w-screen">
        <Container
          size="lg"
          className="h-full md:flex md:items-center md:py-5 md:justify-between"
        >
          <HeaderLeft />
          <HeaderRight />
        </Container>
      </MantineHeader>
    </HeaderOpenProvider>
  );
};

import { Button } from "@mantine/core";
import { FC, ReactNode } from "react";

type Props = {
  link: string;
  children: ReactNode;
};

export const OuterLinkButton: FC<Props> = ({ link, children }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button
        component="button"
        radius="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          fontFamily: "Avenir Next, sans-serif",
          "&:hover": {
            opacity: 0.5,
            backgroundColor:
              theme.colorScheme === "dark" ? theme.white : theme.colors.dark[7],
          },
        })}
      >
        {children}
      </Button>
    </a>
  );
};

import { Button as MantineButton, ButtonProps } from "@mantine/core";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({
  children = "View All",
  type = "button",
}) => {
  return (
    <MantineButton
      type={type}
      color="dark"
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
    </MantineButton>
  );
};

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import React, { useContext } from "react";
import {
  HeaderOpenContext,
  HeaderOpenToggleContext,
} from "@/store/HeaderContext";

const navItems = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

export const HeaderRight = () => {
  const opened = useContext(HeaderOpenContext);
  const setOpened = useContext(HeaderOpenToggleContext);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div>
      <nav
        className={`left-0 absolute md:relative top-0 transition-opacity bg-pink-500 md:bg-transparent h-screen md:h-auto w-screen md:w-auto md:pt-0 ${
          opened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
        }`}
      >
        <ul className="items-center pt-36 md:p-0 text-2xl md:text-lg list-none font-bold m-0 pl-0 w-11/12 md:w-auto mx-auto space-y-3 md:space-y-0 md:flex md:space-x-6">
          {/* header nav lists */}
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} passHref>
                <Anchor
                  className="text-2xl md:text-lg"
                  component="button"
                  sx={(theme) => ({
                    fontFamily: "Avenir Next, sans-serif",
                    color: "white",
                    "@media (min-width: 768px)": {
                      color:
                        theme.colorScheme === "dark"
                          ? theme.white
                          : theme.colors.dark[7],
                    },
                    root: {
                      "&:hover": {
                        backgroundColor: "white",
                        opacity: 0.5,
                      },
                    },
                  })}
                  onClick={() => setOpened((o) => !o)}
                >
                  {item.label}
                </Anchor>
              </Link>
            </li>
          ))}
          {/* dark mode button */}
          <li className="hidden md:block">
            <button
              className="bg-transparent border-solid border-gray-300 rounded-lg p-2"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
            >
              {dark
                ? // <FontAwesomeIcon color="white" icon={["far", "sun"]} />
                  "dark"
                : // <FontAwesomeIcon icon={["far", "moon"]} />
                  "light"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

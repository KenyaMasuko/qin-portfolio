import React, { createContext, FC, ReactNode, useState } from "react";

export const HeaderOpenContext = createContext(false);
export const HeaderOpenToggleContext = createContext(
  {} as React.Dispatch<React.SetStateAction<boolean>>
);

export const HeaderOpenProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <HeaderOpenContext.Provider value={opened}>
      <HeaderOpenToggleContext.Provider value={setOpened}>
        {children}
      </HeaderOpenToggleContext.Provider>
    </HeaderOpenContext.Provider>
  );
};

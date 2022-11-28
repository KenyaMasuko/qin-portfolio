import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Text } from "@mantine/core";

type Props = {
  children: React.ReactNode;
  message: string;
};

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return <Text>{message}</Text>;
};

export const ErrorWrapper: FC<Props> = ({ children, message }) => {
  return (
    <ErrorBoundary FallbackComponent={() => <ErrorMessage message={message} />}>
      {children}
    </ErrorBoundary>
  );
};

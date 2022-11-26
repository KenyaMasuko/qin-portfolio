import parse from "html-react-parser";

type Prop = {
  contentHTML: string;
};

export const ConvertContent = ({ contentHTML }: Prop) => {
  const contentReact = parse(contentHTML);
  return <>{contentReact}</>;
};

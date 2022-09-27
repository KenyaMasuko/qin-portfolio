import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

type Prop = {
  dateISO: string;
};

export const ConvertDate = ({ dateISO }: Prop) => {
  return (
    <time className="text-xs font-bold text-gray-400 block" dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy.MM.dd", { locale: ja })}
    </time>
  );
};

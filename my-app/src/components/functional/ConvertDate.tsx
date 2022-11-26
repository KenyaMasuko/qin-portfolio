import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

export const ConvertDate = ({ dateISO }: { dateISO: string }) => {
  return (
    <time className="text-xs font-bold text-gray-400 block" dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy.MM.dd", { locale: ja })}
    </time>
  );
};

export const FormatTwitterDate = (dateStr: string) =>
  format(new Date(dateStr), "MM月dd日");

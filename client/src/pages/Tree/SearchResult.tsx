import { SearchObject } from "@shared";
import { MdFilePresent, MdFolder } from "react-icons/md";
import { Link } from "react-router-dom";
import { OverflowScrollText } from "../../components/OverflowScrollText";

export const SearchResult = ({ path, type }: SearchObject) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 transition-colors group max-w-180"
    >
      <span className="text-lg shrink-0">
        {type === "file" ? <MdFilePresent /> : <MdFolder />}
      </span>

      <OverflowScrollText className="text-sm">{path}</OverflowScrollText>
    </Link>
  );
};

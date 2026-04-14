import { SearchObject } from "@shared";
import { MdFilePresent, MdFolder } from "react-icons/md";
import { Link } from "react-router-dom";

export const SearchResult = ({ path, type }: SearchObject) => (
  <Link
    to={path}
    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 transition-colors"
  >
    <span className="text-lg">
      {type === "file" ? <MdFilePresent /> : <MdFolder />}
    </span>
    <span className="text-sm">{path}</span>
  </Link>
);

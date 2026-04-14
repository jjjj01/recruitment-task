import { Link } from "react-router-dom";
import { MdFilePresent } from "react-icons/md";
import { TREE } from "../../consts";

interface FileProps {
  name: string;
  path: string;
  treeLevel: number;
}

export const File = ({ name, path, treeLevel }: FileProps) => (
  <Link
    to={path}
    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 transition-colors"
    style={{
      paddingLeft: `${treeLevel * TREE.indentSize + TREE.baseIndent}px`,
    }}
  >
    <span className="text-lg">
      <MdFilePresent />
    </span>
    <span className="text-sm">{name}</span>
  </Link>
);

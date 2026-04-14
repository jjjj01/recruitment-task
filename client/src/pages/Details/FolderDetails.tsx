import { Link } from "react-router-dom";
import { MdFolder, MdFilePresent } from "react-icons/md";
import { InfoField } from "./InfoField";
import { getSize, getChildrenSizes } from "../../utils";
import { FolderOrFile } from "@shared";

interface FolderDetailsProps {
  data: Extract<FolderOrFile, { type: "folder" }>;
  path: string;
}

export const FolderDetails = ({ data, path }: FolderDetailsProps) => {
  const totalSize = getChildrenSizes(data);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl text-amber-500">
          <MdFolder />
        </span>
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Folder
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">{path}</p>
        </div>
      </div>
      <div className="grid gap-4 mb-6">
        <InfoField label="Name" value={data.name} />
        <InfoField label="Children Count" value={data.children.length} />
        <InfoField label="Total Size" value={getSize(totalSize)} />
      </div>

      {data.children.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Children
          </h2>
          <div className="grid gap-2">
            {data.children.map((child) => {
              const childPath = path.endsWith("/")
                ? path + child.name
                : `${path}/${child.name}`;
              return (
                <Link
                  to={childPath}
                  key={child.name}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                >
                  {child.type === "folder" ? (
                    <span className="text-xl text-amber-500">
                      <MdFolder />
                    </span>
                  ) : (
                    <span className="text-xl text-indigo-500">
                      <MdFilePresent />
                    </span>
                  )}
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {child.name}
                  </span>
                  {child.type === "file" && (
                    <span className="ml-auto text-sm text-zinc-400">
                      {getSize(child.size)}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

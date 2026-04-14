import { useState } from "react";
import { MdFolder } from "react-icons/md";
import { File } from "./File";
import { TREE } from "../../consts";
import { FolderOrFile } from "@shared";

interface FolderProps {
  name: string;
  path: string;
  children: Array<FolderOrFile>;
  treeLevel: number;
}

export const Folder = ({ name, path, children, treeLevel }: FolderProps) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div style={{ paddingLeft: `${treeLevel * TREE.indentSize}px` }}>
      <button
        onClick={() => setToggled((curr) => !curr)}
        className={`flex items-center gap-2 py-2 px-3 w-full text-left rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${
          toggled ? "bg-zinc-50 dark:bg-zinc-800/50" : ""
        }`}
      >
        <span className="text-xl text-amber-500">
          <MdFolder />
        </span>
        <span className="font-medium text-zinc-700 dark:text-zinc-300">
          {name}
        </span>
        <span
          className={`ml-auto text-zinc-400 transition-transform ${
            toggled ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>
      {toggled && (
        <div className="ml-2 border-l-2 border-zinc-200 dark:border-zinc-700">
          {children.map((child) =>
            child.type === "folder" ? (
              <Folder
                key={child.name}
                name={child.name}
                path={`${path}/${child.name}`}
                children={child.children}
                treeLevel={treeLevel + 1}
              />
            ) : (
              <File
                key={child.name}
                name={child.name}
                treeLevel={treeLevel + 1}
                path={`${path}/${child.name}`}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
};

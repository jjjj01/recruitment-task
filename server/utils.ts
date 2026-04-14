import { Config, FolderOrFile, SearchObject } from "@shared";

export const configToSearchObjects = (config: Config): Array<SearchObject> => {
  const result: SearchObject[] = [];

  const traverse = (node: FolderOrFile, currentPath: string) => {
    const newPath = currentPath ? `${currentPath}/${node.name}` : node.name;

    result.push({
      name: node.name,
      path: newPath,
      type: node.type,
    });

    if (node.type === "folder") {
      node.children.forEach((child) => traverse(child, newPath));
    }
  };

  config.children.forEach((child) => traverse(child, ""));

  return result;
};

import { Config, FolderOrFile, SearchObject } from "@shared";

// Format bytes to human readable size
export const getSize = (size: number): string => {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }
  if (size >= 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  }
  return `${size} B`;
};

// Recursively calculate total size of folder contents
export const getChildrenSizes = (node: FolderOrFile): number => {
  if (node.type === "file") {
    return node.size;
  }
  return node.children.reduce((acc, curr) => {
    return acc + getChildrenSizes(curr);
  }, 0);
};

// Find a node in the tree by path
export const findNodeByPath = (
  root: FolderOrFile,
  path: string,
): FolderOrFile | undefined => {
  const nodePathComponents = path.split("/").filter((n) => n.length > 0);
  let current: FolderOrFile | undefined = root;

  for (const comp of nodePathComponents) {
    if (current?.type !== "folder") {
      return undefined;
    }
    current = current.children.find((child) => child.name === comp);
  }

  return current;
};

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

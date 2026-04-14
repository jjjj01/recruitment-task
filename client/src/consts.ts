import { Config } from "@shared";

export const API_URL = "http://localhost:3001/api";

export const TREE = {
  baseIndent: 12,
  indentSize: 20,
  animationDuration: 200,
} as const;

export const DEFAULT_CONFIG: Config = {
  name: "root",
  type: "folder",
  children: [],
};

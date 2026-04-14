import { z } from "zod";

export type FolderOrFile =
  | {
      name: string;
      type: "folder";
      children: FolderOrFile[];
    }
  | {
      name: string;
      type: "file";
      size: number;
    };

export const FolderOrFileSchema: z.ZodType<FolderOrFile> = z.lazy(() =>
  z.union([
    z.object({
      name: z.string(),
      type: z.literal("folder"),
      children: z.array(FolderOrFileSchema),
    }),
    z.object({
      name: z.string(),
      type: z.literal("file"),
      size: z.number(),
    }),
  ]),
);

export const SearchObjectSchema = z.object({
  name: z.string(),
  path: z.string(),
  type: z.union([z.literal("folder"), z.literal("file")]),
});

export type SearchObject = z.infer<typeof SearchObjectSchema>;

export const ConfigSchema = z.object({
  name: z.literal("root"),
  type: z.literal("folder"),
  children: z.array(FolderOrFileSchema),
});

export type Config = z.infer<typeof ConfigSchema>;

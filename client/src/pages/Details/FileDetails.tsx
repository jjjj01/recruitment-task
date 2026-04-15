import { MdFilePresent } from "react-icons/md";
import { InfoField } from "./InfoField";
import { getSize } from "../../utils";
import { FolderOrFile } from "@shared";
import { OverflowScrollText } from "../../components/OverflowScrollText";

interface FileDetailsProps {
  data: Extract<FolderOrFile, { type: "file" }>;
  path: string;
}

export const FileDetails = ({ data, path }: FileDetailsProps) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <span className="text-4xl text-indigo-500">
        <MdFilePresent />
      </span>
      <div className="max-w-180 flex flex-col group">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          File
        </h1>
        <OverflowScrollText className="text-zinc-500 dark:text-zinc-400">
          {path}
        </OverflowScrollText>
      </div>
    </div>
    <div className="grid gap-4">
      <InfoField label="Name" value={data.name} />
      <InfoField label="Size" value={getSize(data.size)} />
      <InfoField label="Path" value={path} />
    </div>
  </div>
);

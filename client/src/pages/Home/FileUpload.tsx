import { MdFilePresent } from "react-icons/md";

interface FileUploadProps {
  fileName: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUpload = ({ fileName, onFileChange }: FileUploadProps) => (
  <div className="flex items-center gap-4">
    <label className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg cursor-pointer transition-colors">
      <span className="text-xl">
        <MdFilePresent />
      </span>
      Upload JSON
      <input
        type="file"
        accept=".json"
        onChange={onFileChange}
        className="hidden"
      />
    </label>
    {fileName && (
      <span className="text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
        {fileName}
      </span>
    )}
  </div>
);

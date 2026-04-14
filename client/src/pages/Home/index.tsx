import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFolder } from "react-icons/md";
import { Card, Button } from "../../components";
import { FileUpload } from "./FileUpload";
import { JsonInput } from "./JsonInput";
import { StatusMessage } from "./StatusMessage";
import { useCurrentJson, useImportJson } from "../../api/queries";

export const Home = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [fileName, setFileName] = useState("");

  const { data } = useCurrentJson();
  const { mutate, status, isPending } = useImportJson();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setJsonInput(JSON.stringify(json, null, 2));
      } catch {
        console.error("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setJsonInput(JSON.stringify(data, null, 2));
    }
  }, [data]);

  return (
    <div className="min-h-screen">
      <Card>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Import JSON
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Upload or paste your source JSON file to get started
        </p>

        <div className="space-y-6">
          <FileUpload fileName={fileName} onFileChange={handleFileUpload} />
          <JsonInput
            value={jsonInput}
            onChange={(changedValue) => setJsonInput(changedValue)}
          />
          <Button
            onClick={() => mutate(JSON.parse(jsonInput))}
            disabled={!jsonInput || isPending}
          >
            {isPending ? "Importing..." : "Import JSON"}
          </Button>
          <StatusMessage status={status} />
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700">
          <Link
            to="/tree"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            <span className="text-xl">
              <MdFolder />
            </span>
            View Tree Structure
          </Link>
        </div>
      </Card>
    </div>
  );
};

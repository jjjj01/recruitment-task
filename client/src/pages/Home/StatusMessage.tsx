import { MutationStatus } from "@tanstack/react-query";

interface StatusMessageProps {
  status: MutationStatus;
}

export const StatusMessage = ({ status }: StatusMessageProps) => {
  if (status === "pending" || status === "idle") return null;

  const isSuccess = status === "success";

  return (
    <div
      className={`flex items-center gap-2 p-4 rounded-lg ${
        isSuccess
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isSuccess ? "bg-green-500" : "bg-red-500"}`}
      />
      {isSuccess
        ? "JSON imported successfully!"
        : "Invalid JSON - please check the format"}
    </div>
  );
};

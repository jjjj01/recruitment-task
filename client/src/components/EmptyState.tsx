import { Link } from "react-router-dom";

interface EmptyStateProps {
  title?: string;
  message: string;
  actionLink?: string;
  actionLabel?: string;
}

export const EmptyState = ({
  title,
  message,
  actionLink,
  actionLabel,
}: EmptyStateProps) => (
  <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">
    {title && (
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        {title}
      </h1>
    )}
    <p className="mb-6">{message}</p>
    {actionLink && actionLabel && (
      <Link
        to={actionLink}
        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
      >
        {actionLabel}
      </Link>
    )}
  </div>
);

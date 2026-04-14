interface InfoFieldProps {
  label: string;
  value: string | number;
  className?: string;
}

export const InfoField = ({ label, value, className = "" }: InfoFieldProps) => (
  <div className={`p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg ${className}`}>
    <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
    <p className="font-medium text-zinc-900 dark:text-zinc-100">{value}</p>
  </div>
);

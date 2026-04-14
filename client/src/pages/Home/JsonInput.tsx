interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const JsonInput = ({ value, onChange }: JsonInputProps) => (
  <div>
    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
      Or paste JSON
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='{"key": "value"}'
      className="w-full h-64 p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    />
  </div>
);

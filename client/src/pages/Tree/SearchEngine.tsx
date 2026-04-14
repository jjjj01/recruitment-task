import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchEngine = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState(
    searchParams.get("search") ?? "",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchString) {
        setSearchParams({ search: searchString });
      } else {
        setSearchParams({});
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchString, setSearchParams]);

  return (
    <div className="flex items-center justify-start mb-6 gap-4">
      <input
        className="w-full text-xl font-semibold text-zinc-900 dark:text-zinc-100"
        placeholder="Type to start searching"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </div>
  );
};

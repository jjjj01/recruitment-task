import { Link, useSearchParams } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { Card, EmptyState } from "../../components";
import { Folder } from "./Folder";
import { File } from "./File";
import { useCurrentJson, useSearchFromJson } from "../../api/queries";
import { SearchEngine } from "./SearchEngine";
import { SearchResult } from "./SearchResult";
import { DEFAULT_CONFIG } from "../../consts";

export const Tree = () => {
  const { data: currentJson = DEFAULT_CONFIG } = useCurrentJson();
  const { data: searchList = [] } = useSearchFromJson();

  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search");

  const searchResults =
    searchParam === null
      ? searchList
      : searchList.filter(({ name }) =>
          name.toLowerCase().includes(searchParam.toLowerCase()),
        );

  return (
    <div className="min-h-screen">
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            File Tree
          </h1>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span className="text-xl">
              <MdHome />
            </span>
            Home
          </Link>
        </div>

        {currentJson.children.length === 0 ? (
          <EmptyState
            message="No data available. Import a JSON file first."
            actionLink="/"
            actionLabel="Go to Home"
          />
        ) : (
          <div className="space-y-1">
            <SearchEngine />
            {searchParams.get("search") === null ? (
              currentJson.children.map((child) =>
                child.type === "folder" ? (
                  <Folder
                    key={child.name}
                    name={child.name}
                    children={child.children}
                    treeLevel={0}
                    path={child.name}
                  />
                ) : (
                  <File
                    key={child.name}
                    name={child.name}
                    treeLevel={0}
                    path={child.name}
                  />
                ),
              )
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Search Results
                </h2>
                {searchResults?.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  <div>
                    {searchResults.map((result) => (
                      <SearchResult {...result} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "./keys";
import { endpoints } from "./endpoints";
import { Config, SearchObject } from "@shared";

export type CurrentResponse = Config | undefined;

export type SearchResponse = Array<SearchObject> | undefined;

export const useCurrentJson = () =>
  useQuery({
    queryKey: keys.current(),
    queryFn: async (): Promise<CurrentResponse> => {
      const res = await fetch(endpoints.current);

      if (!res.ok) {
        throw new Error("Failed to fetch current JSON");
      }

      return res.json();
    },
  });

export const useSearchFromJson = () =>
  useQuery({
    queryKey: keys.search(),
    queryFn: async (): Promise<SearchResponse> => {
      const res = await fetch(endpoints.search);

      if (!res.ok) {
        throw new Error("Failed to fetch a searchable list of object");
      }

      return res.json();
    },
  });

export const useImportJson = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Config) => {
      const res = await fetch(endpoints.import, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to import JSON");
      }

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.current() });
    },
  });
};

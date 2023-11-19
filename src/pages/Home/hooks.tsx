import { useQuery } from "@tanstack/react-query";

const fetchServerHealth = async () => {
  const response = await fetch(
    "https://private-anon-432b0fc50c-blissrecruitmentapi.apiary-mock.com/health"
  );
  return response.json();
};

export const useGetHealth = () => {
  const { data, isLoading, error } = useQuery(["health"], fetchServerHealth);
  return { data, isLoading, error };
};

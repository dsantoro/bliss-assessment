import { useQuery } from "@tanstack/react-query";

export type Question = {
  id: string;
  question: string;
  image_url: string | null;
  thumb_url: string | null;
  published_at: string;
  choices: {
    choice: string;
    votes: number;
  }[];
};

const fetchServerQuestions = async () => {
  const response = await fetch(
    "https://private-anon-432b0fc50c-blissrecruitmentapi.apiary-mock.com/questions"
  );
  return response.json();
};

export const useGetQuestions = () => {
  const { data, isLoading, error } = useQuery<Question[]>(
    ["questions", "health"],
    fetchServerQuestions
  );
  return { data, isLoading, error };
};

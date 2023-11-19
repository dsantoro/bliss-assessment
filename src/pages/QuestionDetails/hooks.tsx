import { useQuery, useMutation } from "@tanstack/react-query";
import { successToast, failedToast } from "../../utils/toaster";

const fetchServerQuestions = async (id: string) => {
  const response = await fetch(
    `https://private-anon-432b0fc50c-blissrecruitmentapi.apiary-mock.com/questions/${id}`
  );
  return response.json();
};

const postQuestionMutation = async (id: string) => {
  const response = await fetch(
    `https://private-anon-432b0fc50c-blissrecruitmentapi.apiary-mock.com/questions/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

const postShareQuestion = async (destinationEmail: string, url: string) => {
  const response = await fetch(
    `https://private-anon-432b0fc50c-blissrecruitmentapi.apiary-mock.com/share?destination_email=${destinationEmail}&content_url=${url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export const useGetQuestion = (id: string) => {
  const { data, isLoading, error } = useQuery(["questions", id], () =>
    fetchServerQuestions(id)
  );
  return { data, isLoading, error };
};

export const useQuestionMutation = (id: string) => {
  return useMutation(["questions", id], () => postQuestionMutation(id), {
    onSuccess: () => {
      successToast("Thank you for your vote!", {
        position: "bottom-right",
      });
    },
    onError: () => {
      failedToast("Uh-oh, something went wrong! Try again in few minutes", {
        position: "bottom-right",
      });
    },
  });
};

export const useShareQuestion = (destinationEmail: string, url: string) => {
  return useMutation(
    ["share"],
    () => postShareQuestion(destinationEmail, url),
    {
      onSuccess: () => {
        successToast("Question shared successfully!", {
          position: "bottom-right",
        });
      },
      onError: () => {
        failedToast("Uh-oh, something went wrong! Try again in few minutes", {
          position: "bottom-right",
        });
      },
    }
  );
};

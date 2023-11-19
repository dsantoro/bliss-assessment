import React from "react";
import QuestionCard from "../../components/QuestionCard";
import Skeleton from "../../components/Skeleton";
import { Question, useGetQuestions } from "./hooks";
import "./Questions.css";
import Error from "../../components/Error";
interface QuestionsProps {}

const Questions: React.FC<QuestionsProps> = () => {
  const { data = [], isLoading, error } = useGetQuestions();

  if (isLoading)
    return (
      <div className="questions">
        {Array.from({ length: 10 }, (_, index) => index).map((item) => (
          <Skeleton key={item} />
        ))}
      </div>
    );

  if (error) return <Error />;

  return (
    <div className="questions">
      {data.map((question: Question) => (
        <QuestionCard key={question.id} {...question} />
      ))}
    </div>
  );
};

export default Questions;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Undo2, Share } from "lucide-react";
import { format } from "date-fns";
import { useGetQuestion, useQuestionMutation, useShareQuestion } from "./hooks";
import "./question-details.css";
import Error from "../../components/Error";

interface Props {}

const QuestionDetails: React.FC<Props> = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const { data, isLoading, error } = useGetQuestion(questionId);

  const { mutate } = useQuestionMutation(questionId);
  const { mutate: shareQuestion } = useShareQuestion(
    "danylo.santoro@gmail.com",
    window.location.href
  );

  const handleVote = (choiceProperty: string) => {
    mutate({
      ...data,
      choices: [
        ...data.choices.map((choice: { choice: string; votes: string }) => {
          if (choice.choice === choiceProperty) {
            return { ...choice, votes: choice.votes + 1 };
          }
          return choice;
        }),
      ],
    });
  };

  if (isLoading) return <div>Loading...</div>;

  const { question, published_at, choices } = data || {};

  return (
    <>
      <div className="question-details__header">
        <Link to="/questions">
          <Undo2 />
          Back to list
        </Link>

        <button onClick={() => shareQuestion()}>
          <Share />
          Share
        </button>
      </div>

      {error ? (
        <Error />
      ) : (
        <>
          <div className="question-details__body">
            <div className="question-details__body__info">
              <img src={data?.image_url} alt={question} />
              <div>
                <h1>{question}</h1>
                <span>
                  Published at: {format(new Date(published_at), "MM/dd/yyyy")}
                </span>
              </div>
            </div>

            <div className="question-details__choices">
              <h2>Vote in your favorite language</h2>
              <div className="question-details__list">
                {choices.map((choice: { choice: string; votes: string }) => (
                  <button
                    onClick={() => handleVote(choice.choice)}
                    key={choice.choice}
                    className="question-details__list__item"
                  >
                    Vote <span>{choice.choice}</span>
                    <span>{choice.votes} votes</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default QuestionDetails;

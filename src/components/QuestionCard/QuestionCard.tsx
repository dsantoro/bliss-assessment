import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Question } from "../../pages/Questions/hooks";
import LanguageTag from "../LanguageTag";
import Button from "../ui/Button";
import "./question-card.css";

interface QuestionCardProps extends Question {}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  thumb_url,
  question,
  choices,
  published_at,
}: Question) => {
  return (
    <div className="question__card">
      <div className="card__header">
        <img
          src={thumb_url ?? ""}
          alt={question}
          className="card__header__image"
        />
        <div className="card__header__title">
          <h2>{question}</h2>
          <span>
            Published at: {format(new Date(published_at), "MM/dd/yyyy")}
          </span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="card__body">
        <h3>Choices</h3>
        <ul>
          {choices.map((choice) => (
            <li key={choice.choice}>
              <LanguageTag language={choice.choice} />
            </li>
          ))}
        </ul>
      </div>

      <div className="card__footer">
        <Button>
          <Link to={`/questions/${id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;

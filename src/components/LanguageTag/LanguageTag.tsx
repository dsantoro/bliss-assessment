import React from "react";
import classNames from "classnames";
import "./language-tag.css";

interface LanguageTagProps {
  language: string;
}

const LanguageTag: React.FC<LanguageTagProps> = ({ language }) => {
  const tagClass = classNames("language-tag", {
    "language-tag--swift": language === "Swift",
    "language-tag--python": language === "Python",
    "language-tag--objective-c": language === "Objective-C",
    "language-tag--ruby": language === "Ruby",
  });

  return (
    <div className={tagClass}>
      <span>{language}</span>
    </div>
  );
};

export default LanguageTag;

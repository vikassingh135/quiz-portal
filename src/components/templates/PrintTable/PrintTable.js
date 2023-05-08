import React, { useEffect, useState } from "react";
import ShowQuiz from "../../pages/AdminDashboard/ShowQuiz/ShowQuiz";
import { Link } from "react-router-dom";
import AddCategory from "../../pages/AdminDashboard/AddCategory/AddCategory";
import { getCategoryById } from "../../apis/admin/adminApi";

const PrintTable = ({ categories }) => {
  return (
    <>
      {categories.map((curUser) => {
        const { _id, title, description } = curUser;

        return (
          <tr key={_id}>
            <td>{title}</td>
            <td>{description}</td>
          </tr>
        );
      })}
    </>
  );
};

const PrintQuizTable = ({ quizzes }) => {
  return (
    <>
      {quizzes.map((curUser) => {
        const {
          _id,
          title,
          description,
          maxMarks,
          numberOfQuestions,
          category,
          createdAt,
        } = curUser;
        return (
          <tr key={_id}>
            <td>{title}</td>
            <td>{description}</td>
            <td>{maxMarks}</td>
            <td>{numberOfQuestions}</td>
            <td>{category}</td>
            <td>{createdAt}</td>
            <td>
              <Link to={`/quiz/showQuestions/${_id}`}>Show Questions</Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};

const PrintQuestionTable = ({ questions }) => {
  return (
    <>
      {questions.map((currQuestion) => {
        const {
          _id,
          content,
          optionA,
          optionB,
          optionC,
          optionD,
          correctAnswer,
        } = currQuestion;

        return (
          <tr key={_id}>
            <td>{content}</td>
            <td>{optionA}</td>
            <td>{optionB}</td>
            <td>{optionC}</td>
            <td>{optionC}</td>
            <td>{correctAnswer}</td>
          </tr>
        );
      })}
    </>
  );
};

export { PrintTable, PrintQuizTable, PrintQuestionTable };

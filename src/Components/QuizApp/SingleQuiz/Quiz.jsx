import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Question from "./Question";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Quiz = () => {
  const [singleQuiz, setSingleQuiz] = useState({});
  const [storeAnswer, setStoreAnswer] = useState([]);
  const { quizId } = useParams();

  React.useEffect(() => {
    getQuizQuestion();
  }, [quizId]);

  const getQuizQuestion = async () => {
    const res = await axios.get(
      `https://openapi.programming-hero.com/api/quiz/${quizId}`
    );
    console.log(res.data.data);
    setSingleQuiz(res.data.data);
  };

  const handleQuizTotal = (id, answer) => {
    if (storeAnswer?.length > 0) {
      const exist = storeAnswer.find((sd) => sd.id === id);
      if (exist?.id) {
        let newD = { id, answer: answer };
        const rest = storeAnswer.filter((sd) => sd.id !== id);
        setStoreAnswer([...rest, newD]);
      } else {
        setStoreAnswer([...storeAnswer, { id, answer: answer }]);
      }
    } else {
      setStoreAnswer([{ id, answer: answer }]);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    for (let index = 0; index < storeAnswer?.length; index++) {
      if (storeAnswer[index].answer) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }
    Swal.fire({
      title: "Congratulations!",
      text: `Successfully submitted. You got ${correct} out of ${storeAnswer.length}`,
      icon: "success",
      confirmButtonText: "Close",
    });

    const data = {
      name: singleQuiz.name,
      time: new Date(),
      correctAnswer: correct,
      totalQuestion: singleQuiz.questions.length,
      image: singleQuiz.logo,
    };
    const loc = localStorage.getItem("answerList");
    if (loc !== null) {
      const newData = [...JSON.parse(loc), data];
      localStorage.setItem("answerList", JSON.stringify(newData));
    } else {
      localStorage.setItem("answerList", JSON.stringify([data]));
    }
  };

  return (
    <div className="container">
      <h1>Quiz of {singleQuiz.name}</h1>
      {singleQuiz?.questions?.map((question, index) => {
        return (
          <Question
            question={question}
            questionNo={index + 1}
            handleQuizTotal={handleQuizTotal}
            handleSubmit={handleSubmit}
          />
        );
      })}
      <Button
        className="w-50 my-4 p-3"
        onClick={() => {
          if (storeAnswer?.length === singleQuiz.questions?.length) {
            handleSubmit();
          } else {
            console.log(storeAnswer?.length, singleQuiz?.questions?.length);
            Swal.fire({
              title: "You haven't answer all",
              text: `Please answer all question`,
              icon: "error",
              confirmButtonText: "Close",
            });
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Quiz;

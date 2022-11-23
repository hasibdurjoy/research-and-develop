import { Eye } from "phosphor-react";
import React from "react";
import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question, questionNo, handleQuizTotal }) => {
  const { correctAnswer } = question;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState("");

  const handleAnswer = (data, id) => {
    setSelectedAnswer(data);
    if (question.correctAnswer === data) {
      setIsCorrect("correct");
      rightAnswer();
      handleQuizTotal(id, true);
    } else {
      setIsCorrect("wrong");
      wrongAnswer();
      handleQuizTotal(id, false);
    }
  };
  const notify = () => toast.info(`correct answer is '${correctAnswer}'`);
  const wrongAnswer = () => toast.error("wrong answer");
  const rightAnswer = () => toast.success("correct answer");
  return (
    <Card className="mb-3 p-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <span>({questionNo})</span>
          <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
        </div>
        <Button onClick={notify} variant="light" className="p-0">
          <Eye size={32} />
        </Button>
      </div>
      <Row xs={1} md={2} className="g-3 container mx-auto">
        {question?.options.map((quiz) => {
          return (
            <Col className="h-100" style={{ height: "80px" }}>
              <Card
                className=""
                style={{
                  height: "80px",
                  backgroundColor:
                    selectedAnswer === quiz && isCorrect === "correct"
                      ? "green"
                      : selectedAnswer === quiz && isCorrect === "wrong"
                      ? "red"
                      : "transparent",
                  color: selectedAnswer === quiz ? "white" : "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleAnswer(quiz, question.id);
                }}
              >
                <Card.Body>
                  <Card.Text>{quiz}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
    </Card>
  );
};

export default Question;

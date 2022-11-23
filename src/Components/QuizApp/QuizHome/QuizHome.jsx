import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Attempts from "../Attempts";
import Loader from "../Loader";

const QuizHome = () => {
  const [quizList, setQuizList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getQuizList();
  }, []);

  const getQuizList = async () => {
    setIsLoading(true);
    const res = await axios.get(
      "https://openapi.programming-hero.com/api/quiz"
    );
    setQuizList(res.data.data);
    setIsLoading(false);
  };

  return (
    <div className="mt-2">
      {isLoading ? <Loader /> : <QuizTopic quizList={quizList} />}
      <Attempts />
    </div>
  );
};

export default QuizHome;

const QuizTopic = ({ quizList }) => {
  return (
    <Container>
      <h2 className="my-2">Quiz Topic List</h2>
      <Row xs={1} md={3} className="g-4 mt-2">
        {quizList.map((quiz) => {
          return (
            <Col>
              <Card className="p-3 shadow-lg border-0 rounded-5">
                <Card.Img
                  variant="top"
                  src={quiz.logo}
                  style={{
                    height: "250px",
                    width: "100%",
                    // border: "1px solid black",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{quiz.name}</Card.Title>
                  <Card.Text>No Of Quiz : {quiz.total}</Card.Text>
                </Card.Body>
                <Card.Footer className="border-0">
                  <Link to={`/quiz/${quiz.id}`}>
                    <Button className="w-100">Start Quiz</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

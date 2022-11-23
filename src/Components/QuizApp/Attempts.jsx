import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Attempts = () => {
  const [yourAnswerList, setYourAnswerList] = useState([]);
  const [viewList, setViewList] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    setYourAnswerList(JSON.parse(localStorage.getItem("answerList")));
    setPath(window.location.pathname);
  }, []);

  useEffect(() => {
    if (path === "/") {
      setViewList(yourAnswerList?.slice(0, 6));
    } else {
      if (seeAll) {
        setViewList(yourAnswerList);
      } else {
        setViewList(yourAnswerList?.slice(0, 6));
      }
    }
  }, [yourAnswerList, seeAll]);

  return (
    <>
      {yourAnswerList?.length > 0 ? (
        <>
          <Container className="my-4">
            <h2 className="my-2">Your Previous Attempt List</h2>
            <Row xs={1} md={3} className="g-4 mt-2">
              {viewList.map((quiz) => {
                return (
                  <Col>
                    <Card className="p-3 shadow-lg border-1 rounded-4">
                      <div className="d-flex">
                        <div>
                          <Card.Img
                            variant="top"
                            src={quiz.image}
                            style={{
                              height: "170px",
                              width: "90%",
                              // border: "1px solid black",
                              borderRadius: "20px",
                              padding: "10px",
                            }}
                          />
                        </div>
                        <div>
                          <Card.Body>
                            <Card.Title>{quiz.name}</Card.Title>
                            <Card.Text className="text-start">
                              Total Marks : {quiz.totalQuestion}
                            </Card.Text>
                            <Card.Text className="text-start">
                              Your Marks : {quiz.correctAnswer}
                            </Card.Text>
                            <Card.Text className="text-start">
                              Percentage :{" "}
                              {(
                                (quiz.correctAnswer / quiz.totalQuestion) *
                                100
                              ).toFixed(1)}{" "}
                              %
                            </Card.Text>
                          </Card.Body>
                        </div>
                      </div>
                      <Card.Footer className="border-0">
                        Quiz Time :{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }).format(new Date(quiz.time))}
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            {yourAnswerList?.length > 6 ? (
              <div>
                {path.includes("attempts") ? (
                  <Button
                    className="mt-5 w-50"
                    onClick={() => {
                      setSeeAll(!seeAll);
                    }}
                  >
                    {seeAll ? "See Less" : "See More"}
                  </Button>
                ) : (
                  <Link to="/attempts">
                    <Button className="mt-5 w-50">See All</Button>
                  </Link>
                )}
              </div>
            ) : (
              ""
            )}
          </Container>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Attempts;

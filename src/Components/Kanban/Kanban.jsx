import React, { useEffect, useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import Card from "./Card";

const board = {
  columns: [
    {
      id: "1",
      title: "To Do",
      cards: [],
    },
    {
      id: "2",
      title: "Current Sprint",
      cards: [],
    },
    {
      id: 3,
      title: "In Progress",
      cards: [],
    },
    {
      id: 4,
      title: "Completed",
      cards: [],
    },
    {
      id: 4,
      title: "Next Feature",
      cards: [],
    },
  ],
};

export function ControlledBoard() {
  const [controlledBoard, setBoard] = useState(board);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setBoard(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    fetch("TasksData.json")
      .then((res) => res.json())
      .then((data) => {
        // setBoard(data);
        // console.log(data);
        const fil = data.results.filter((d) => d.status.id === 3);
        console.log(JSON.stringify(fil));
      });
  }, []);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
    console.log(controlledBoard, source, destination);
  }

  return (
    <>
      <h4>Example of a controlled board</h4>
      <div className="mx-auto">
        <Board
          onCardDragEnd={handleCardMove}
          renderCard={(card, { removeCard, dragging }) => (
            <Card
              style={{ height: "95vh", overflow: "scroll", position: "fixed" }}
              dragging={dragging}
              removeCard={removeCard}
              allowRemoveCard={true}
              /* handleCardRemove={handleCardRemove}
            handleMeeting={handleMeeting}
            handleCall={handleCall}
            handleAssignandReassign={handleAssignandReassign}
            handleHistory={handleHistory}
            handleMobileNumber={handleMobileNumber} */
            >
              {card}
            </Card>
          )}
          disableColumnDrag
        >
          {controlledBoard}
        </Board>
      </div>
    </>
  );
}

export function UncontrolledBoard() {
  return (
    <>
      <h4>Example of an uncontrolled board</h4>
      <div className="container">
        <Board
          onCardDragEnd={console.log("drggaed")}
          allowRemoveLane
          allowRenameColumn
          allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={console.log}
          initialBoard={board}
          allowAddCard={{ on: "top" }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ...draftCard,
          })}
          onCardNew={console.log}
        />
      </div>
    </>
  );
}

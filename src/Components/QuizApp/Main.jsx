import React from "react";
import { Outlet } from "react-router-dom";
import QuizHeader from "./QuizHeader";

const Main = () => {
  return (
    <div>
      <QuizHeader />
      <Outlet />
    </div>
  );
};

export default Main;

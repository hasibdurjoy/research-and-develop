import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Kanban, {
  ControlledBoard,
  UncontrolledBoard,
} from "./Components/Kanban/Kanban";
import DropDown from "./Components/DropDown/DropDown";
import SeekVideo from "./Components/SeekVideo/SeekVideo";
import Sequencer from "./Components/Sequencer/Sequencer";
import NewSequencer from "./Components/Sequencer/NewSequencer";
import ResizableDiv from "./Components/ResizableDiv/ResizeableDiv";
import ReResizable from "./Components/ResizableDiv/ReResizable";
import Draggable from "./Components/ResizableDiv/Draggable";
import QuizHome from "./Components/QuizApp/QuizHome/QuizHome";
import Quiz from "./Components/QuizApp/SingleQuiz/Quiz";
import QuizHeader from "./Components/QuizApp/QuizHeader";
import Main from "./Components/QuizApp/Main";
import Statistics from "./Components/QuizApp/Statistics";
import Attempts from "./Components/QuizApp/Attempts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <QuizHome></QuizHome>,
        },
        {
          path: "/topic",
          element: <QuizHome></QuizHome>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/attempts",
          element: <Attempts></Attempts>,
        },
        {
          path: "/quiz/:quizId",
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <ReResizable />
      <Draggable />
       <Header />
      <ControlledBoard />
      <Kanban />
      <DropDown />
      <SeekVideo />
      <Sequencer />
      <NewSequencer />
      <ResizableDiv /> */}
    </div>
  );
}

export default App;

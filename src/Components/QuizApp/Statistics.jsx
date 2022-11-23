import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import Loader from "./Loader";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = quizList.map((quiz) => quiz.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: quizList.map((quiz) => quiz.total),
        backgroundColor: "aquamarine",
      },
    ],
  };
  return (
    <div className="mx-auto">
      <h5>Bar Chart</h5>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "800px",
              width: "800px",
            }}
          >
            <Bar options={options} data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;

import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart } from "chart.js/auto";
export default function LineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Films",
        data: [
          3278, 3942, 4054, 3132, 3454, 3834, 4656, 4334, 4645, 3234, 4003,
          5100,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "Cartoons",
        data: [
          3813, 4705, 5253, 4593, 4936, 4454, 3532, 3454, 2934, 4567, 5676,
          5789,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };
  return <Line data={data} />;
}

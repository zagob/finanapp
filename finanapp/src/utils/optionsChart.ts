import { ApexOptions } from "apexcharts";

export const options: ApexOptions = {
  chart: {
    id: "apex-chart-example",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: "#fff",
  },
  xaxis: {
    type: "numeric",
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  grid: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#fff000"],
      // opacityFrom: 0.8,
      // opacityTo: 0.6,
    },
  },
};

export const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];

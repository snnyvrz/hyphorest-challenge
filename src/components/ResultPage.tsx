import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Result } from "../types";
import { Button } from "./Button";
import { useContext } from "react";
import { HeroContext } from "../App";

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  //@ts-ignore
  cx,
  //@ts-ignore
  cy,
  //@ts-ignore
  midAngle,
  //@ts-ignore
  innerRadius,
  //@ts-ignore
  outerRadius,
  //@ts-ignore
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const ResultPage = ({ result }: { result: Result }) => {
  const { dispatch } = useContext(HeroContext);

  const pieData = [
    { name: "Transportation", value: result.transportation },
    { name: "Diet", value: result.diet },
    { name: "Household", value: result.household },
  ];

  const barData = [
    { name: "You", value: result.total },
    { name: result.countryName, value: result.country },
    { name: "Global", value: result.global },
  ];

  return (
    <>
      <PieChart width={400} height={400}>
        <Legend verticalAlign="top" />
        <Tooltip />
        <Pie
          data={pieData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="red"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <BarChart width={400} height={400} data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid />
        <Bar dataKey="value" fill="green" />
      </BarChart>
      <Button
        label="Close"
        variant="ghost"
        type="button"
        onClick={() => dispatch({ type: "SHOW_FORM" })}
      />
    </>
  );
};

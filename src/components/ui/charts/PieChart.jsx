import { PieChart, Pie, Tooltip } from "recharts";

const MyPieChart = ({ data }) => {
  return (
    <PieChart width={400} height={250}>
      <Pie data={data} dataKey="value" nameKey="name" />
      <Tooltip />
    </PieChart>
  );
};

export default MyPieChart;
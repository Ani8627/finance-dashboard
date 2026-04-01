import { transactions } from "../data/mockData";
import MyLineChart from "../components/ui/charts/LineChart";
import MyPieChart from "../components/ui/charts/PieChart";

const Dashboard = ({ dark }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  const chartData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  const categoryData = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  return (
    <div className="space-y-8">

      {/* 🔹 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Balance */}
        <div
          className={`p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
  dark
    ? "bg-[#1e293b] border border-white/10"
    : "bg-white shadow-md"
}`}
        >
          <h2 className="text-gray-400">Balance</h2>
          <p className="text-2xl font-bold text-blue-500">₹ {balance}</p>
        </div>

        {/* Income */}
        <div
      className={`p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
  dark
    ? "bg-[#1e293b] border border-white/10"
    : "bg-white shadow-md"
}`}
        >
          <h2 className="text-gray-400">Income</h2>
          <p className="text-2xl font-bold text-green-500">₹ {income}</p>
        </div>

        {/* Expense */}
        <div
      className={`p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
  dark
    ? "bg-[#1e293b] border border-white/10"
    : "bg-white shadow-md"
}`}
        >
          <h2 className="text-gray-400">Expenses</h2>
          <p className="text-2xl font-bold text-red-500">₹ {expense}</p>
        </div>

      </div>

      {/* 🔹 CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Line Chart */}
        <div
          className={`p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
            dark
              ? "bg-white/5 border border-white/10"
              : "bg-white/70 shadow"
          }`}
        >
          <h2 className="mb-3 font-semibold">Balance Trend</h2>
          <MyLineChart data={chartData} />
        </div>

        {/* Pie Chart */}
        <div
          className={`p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
            dark
              ? "bg-white/5 border border-white/10"
              : "bg-white/70 shadow"
          }`}
        >
          <h2 className="mb-3 font-semibold">Spending Breakdown</h2>
          <MyPieChart data={pieData} />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
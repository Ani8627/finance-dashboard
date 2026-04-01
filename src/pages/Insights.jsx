import { transactions } from "../data/mockData";

const Insights = ({ dark }) => {
  const expenses = transactions.filter(t => t.type === "expense");

  const total = expenses.reduce((acc, t) => acc + t.amount, 0);

  const categoryMap = {};
  expenses.forEach(t => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const topCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  return (
    <div className="space-y-6">

      {/* Total */}
      <div className={`p-6 rounded-2xl ${
        dark ? "bg-[#1e293b]" : "bg-white shadow"
      }`}>
        <h2 className={`${dark ? "text-gray-300" : "text-gray-500"}`}>
          Total Expense
        </h2>
        <p className="text-2xl font-bold text-red-500">₹ {total}</p>
      </div>

      {/* Insight */}
      <div className={`p-6 rounded-2xl ${
        dark ? "bg-[#1e293b]" : "bg-white shadow"
      }`}>
        <h2 className={`${dark ? "text-gray-300" : "text-gray-500"}`}>
          Insight
        </h2>

        <p className={`${dark ? "text-gray-200" : "text-gray-700"} text-lg`}>
          ⚠️ You spent most on{" "}
          <span className="text-yellow-400 font-semibold">
            {topCategory}
          </span>
        </p>
      </div>

    </div>
  );
};

export default Insights;
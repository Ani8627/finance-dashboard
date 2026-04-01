import { useState } from "react";
import { transactions as data } from "../data/mockData";

const Transactions = ({ dark, role }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [showModal, setShowModal] = useState(false);


  const filteredData = data.filter((item) => {
    const matchSearch = item.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType = type === "all" || item.type === type;

    return matchSearch && matchType;
  });

  return (
    
    <div className="space-y-6">
        {role === "admin" && (
  <button
    onClick={() => setShowModal(true)}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
  >
    + Add Transaction
  </button>
)}

      {/* 🔹 Controls */}
      <div className="flex gap-4">
        <input
          placeholder="Search category..."
          onChange={(e) => setSearch(e.target.value)}
          className={`p-2 rounded-lg border w-full ${
            dark ? "bg-[#1e293b] text-white border-gray-600" : "bg-white"
          }`}
        />

        <select
          onChange={(e) => setType(e.target.value)}
          className={`p-2 rounded-lg border ${
            dark ? "bg-[#1e293b] text-white border-gray-600" : "bg-white"
          }`}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 🔹 Table */}
      <div
        className={`rounded-2xl overflow-hidden ${
          dark
            ? "bg-[#1e293b] border border-white/10"
            : "bg-white shadow-md"
        }`}
      >
        <table className="w-full text-sm">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((t) => (
                <tr
                  key={t.id}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">{t.category}</td>
                  <td className="p-3 font-medium">₹ {t.amount}</td>
                  <td
                    className={`p-3 font-semibold ${
                      t.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {t.type}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <div className="p-6 text-center text-gray-400">
                    📭 No transactions found
                    <p className="text-sm mt-1">
                      Try adjusting filters
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    {showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    
    <div
      className={`p-6 rounded-xl w-80 space-y-4 transition-all ${
        dark
          ? "bg-[#1e293b] text-white"
          : "bg-white text-black"
      }`}
    >

      <h2 className="font-semibold text-lg">Add Transaction</h2>

      {/* Category */}
      <input
        placeholder="Category"
        className={`p-2 w-full rounded border ${
          dark
            ? "bg-[#0f172a] text-white border-gray-600"
            : "bg-white"
        }`}
      />

      {/* Amount */}
      <input
        placeholder="Amount"
        type="number"
        className={`p-2 w-full rounded border ${
          dark
            ? "bg-[#0f172a] text-white border-gray-600"
            : "bg-white"
        }`}
      />

      {/* Type */}
      <select
        className={`p-2 w-full rounded border ${
          dark
            ? "bg-[#0f172a] text-white border-gray-600"
            : "bg-white"
        }`}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowModal(false)}
          className="px-3 py-1 border rounded hover:opacity-80"
        >
          Cancel
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:scale-105 transition"
        >
          Save
        </button>
      </div>

    </div>

  </div>
)}

    </div>
  );
};

export default Transactions;
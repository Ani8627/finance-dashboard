import { useState, useEffect } from "react";
import Dashboard from "../../pages/Dashboard";
import Transactions from "../../pages/Transactions";
import Insights from "../../pages/Insights";

const Layout = () => {
  // 🔹 Load saved preferences
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState(
    localStorage.getItem("role") || "viewer"
  );
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );

  // 🔹 Persist settings
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    localStorage.setItem("role", role);
  }, [dark, role]);

  return (
    <div
      className={`flex h-screen transition-all duration-300 ${
        dark
          ? "bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white"
          : "bg-linear-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9] text-gray-900"
      }`}
    >
      {/* 🔹 Sidebar */}
      <aside
        className={`w-64 p-6 flex flex-col backdrop-blur-xl ${
          dark
            ? "bg-white/5 border-r border-white/10"
            : "bg-white/70 shadow-lg"
        }`}
      >
        <h1 className="text-2xl font-bold mb-8">Finance App</h1>

        <nav className="space-y-2 text-sm">
          {["dashboard", "transactions", "insights"].map((item) => (
            <div
              key={item}
              onClick={() => setPage(item)}
              className={`cursor-pointer px-3 py-2 rounded-lg capitalize transition-all ${
                page === item
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 dark:hover:bg-white/10"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* 🔹 Main */}
      <main className="flex-1 flex flex-col">

        {/* 🔹 Topbar */}
        <header
          className={`px-6 py-4 flex justify-between items-center backdrop-blur-xl ${
            dark
              ? "bg-white/5 border-b border-white/10"
              : "bg-white/70 shadow"
          }`}
        >
          <h2 className="text-lg font-semibold capitalize">{page}</h2>

          <div className="flex gap-3 items-center">

            {/* Dark Mode */}
            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-1.5 rounded-lg bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow hover:scale-105 transition"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            {/* Role */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border px-3 py-1.5 rounded-lg"
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </header>

        {/* 🔹 Content */}
        <section className="p-6 flex-1 overflow-auto">
          {page === "dashboard" && <Dashboard dark={dark} />}
          {page === "transactions" && (
            <Transactions dark={dark} role={role} />
          )}
          {page === "insights" && <Insights dark={dark} />}
        </section>

      </main>
    </div>
  );
};

export default Layout;
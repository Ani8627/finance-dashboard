# 💰 Finance Dashboard – Interactive Financial Analytics UI

## 📌 Overview

Finance Dashboard is a modern web-based application designed to help users visualize and understand their financial data through interactive charts and dashboards.

The application provides insights into income, expenses, and spending patterns using a clean and responsive user interface built with React and Tailwind CSS.

---

## ✨ Key Features

* 📊 Interactive dashboard with financial overview
* 📈 Line chart for income/expense trends
* 🥧 Pie chart for category-wise distribution
* 💸 Transaction history view
* 📊 Insights page for data analysis
* ⚡ Fast and responsive UI
* 🎨 Clean and modern design

---

## 🛠 Tech Stack

### 💻 Frontend

* **React.js** (with Vite)
* **JavaScript (ES6+)**
* **Tailwind CSS**

---

### 📊 Data Visualization

* Custom-built **Line Chart** component
* Custom-built **Pie Chart** component

---

### ⚙️ Tools & Configuration

* Vite (for fast development & build)
* ESLint (code quality)
* PostCSS

---

### 📁 Data Handling

* Static **mock data** (`mockData.js`)
* No backend (frontend prototype)

---

## 🏗 Project Structure

```
src/
│
├── components/
│   └── ui/
│       ├── Layout.jsx
│       └── charts/
│           ├── LineChart.jsx
│           └── PieChart.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── Insights.jsx
│
├── data/
│   └── mockData.js
│
└── App.jsx
```

---

## ⚙️ Working Principle

1. Application loads financial data from mock dataset
2. Data is processed and passed to chart components
3. Charts dynamically render insights
4. Pages display:

   * Dashboard → overview
   * Transactions → detailed records
   * Insights → analytics

---

## ⚙️ Installation & Setup

```bash id="fin2"
# Clone the repository
git clone https://github.com/your-username/finance-dashboard

# Navigate to project folder
cd finance-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🚀 Future Improvements

* 🔐 User authentication system
* 🗄 Backend integration (Node.js / Next.js)
* 📡 MongoDB database integration
* 📱 Mobile responsiveness improvements
* 🤖 AI-based financial insights
* 📊 Real-time data fetching

---

## 👨‍💻 Author

Anish Sontakke
📧 [anishks.as@gmail.com](mailto:anishks.as@gmail.com)

---

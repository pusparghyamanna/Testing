// ✅ Initialize Firebase first
import "./firebase-init.js";

// ✅ Load styles (relative paths, NOT absolute)
import "./index-BtHSM5_G.css";
import "./all.min.css";
import "./remixicon.min.css";

// ✅ Import React + ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Main App component (your app entry)
function App() {
  return (
    <div className="app-container">
      <header className="p-4 shadow-md flex justify-between items-center bg-white">
        <h1 className="text-xl font-bold text-indigo-600">FundMate</h1>
        <nav className="flex gap-4">
          <i className="ri-home-line text-lg"></i>
          <i className="ri-user-line text-lg"></i>
          <i className="ri-logout-box-r-line text-lg"></i>
        </nav>
      </header>

      <main className="p-6">
        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
        <div className="w-full h-64">
          <canvas id="summaryChart"></canvas>
        </div>
      </main>
    </div>
  );
}

// ✅ Mount React app into #root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ No #root element found in home.html");
}

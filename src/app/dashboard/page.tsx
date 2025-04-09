// src/app/dashboard/page.tsx
"use client"

const DashboardPage = () => {
  // Sample data for charts and metrics
  const performanceData = [
    { month: "Jan", return: 2.4 },
    { month: "Feb", return: -1.8 },
    { month: "Mar", return: 3.2 },
    { month: "Apr", return: 5.1 },
    { month: "May", return: -0.7 },
    { month: "Jun", return: 2.9 },
  ]

  const metrics = [
    { name: "Total Simulations", value: "24", change: "+3", changeType: "positive" },
    { name: "Win Rate", value: "62%", change: "+5%", changeType: "positive" },
    { name: "Avg. Return", value: "2.8%", change: "-0.3%", changeType: "negative" },
    { name: "Best Strategy", value: "MACD", change: "No change", changeType: "neutral" },
  ]

  const recentSimulations = [
    { id: 1, strategy: "MACD Crossover", date: "2025-04-08", return: "+3.2%", status: "success" },
    { id: 2, strategy: "RSI Divergence", date: "2025-04-05", return: "-1.4%", status: "error" },
    { id: 3, strategy: "Moving Average", date: "2025-04-02", return: "+2.1%", status: "success" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <select className="bg-black border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-black rounded-xl p-5 shadow-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <p className="text-sm text-gray-400">{metric.name}</p>
            <div className="flex items-end justify-between mt-2">
              <p className="text-2xl font-semibold">{metric.value}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full flex items-center ${
                  metric.changeType === "positive"
                    ? "bg-green-500/20 text-green-500"
                    : metric.changeType === "negative"
                      ? "bg-red-500/20 text-red-500"
                      : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-black rounded-xl p-5 shadow-md border border-white/5 hover:border-white/10 transition-all duration-300">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="h-64 w-full">
          {/* Chart visualization - simplified representation */}
          <div className="h-full w-full flex items-end space-x-2">
            {performanceData.map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full ${item.return >= 0 ? "bg-green-500" : "bg-red-500"} rounded-t-sm transition-all duration-300 hover:opacity-80`}
                  style={{ height: `${Math.abs(item.return) * 10}%` }}
                ></div>
                <div className="mt-2 text-xs text-gray-400">{item.month}</div>
                <div className="text-xs font-medium">{item.return > 0 ? `+${item.return}%` : `${item.return}%`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Simulations */}
      <div className="bg-black rounded-xl p-5 shadow-md border border-white/5 hover:border-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Simulations</h2>
          <button className="text-sm text-white hover:text-white/80 transition-colors">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-white/10">
                <th className="pb-3 font-medium">Strategy</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Return</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentSimulations.map((sim) => (
                <tr key={sim.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3">{sim.strategy}</td>
                  <td className="py-3 text-sm text-gray-400">{sim.date}</td>
                  <td className={`py-3 ${sim.return.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                    {sim.return}
                  </td>
                  <td className="py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        sim.status === "success" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {sim.status === "success" ? "Profitable" : "Loss"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-black rounded-xl p-5 shadow-md border border-white/5 hover:border-white/10 transition-all duration-300">
        <h2 className="text-lg font-semibold mb-4">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-all duration-300 hover:translate-y-[-2px] group">
            <h3 className="font-medium mb-2 group-hover:text-white transition-colors">Understanding MACD Strategy</h3>
            <p className="text-sm text-gray-400 mb-3">
              Learn how to use the Moving Average Convergence Divergence indicator for trading decisions.
            </p>
            <button className="text-white text-sm hover:text-white/80 transition-colors group-hover:translate-x-1 inline-flex items-center transition-transform duration-300">
              Read more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-all duration-300 hover:translate-y-[-2px] group">
            <h3 className="font-medium mb-2 group-hover:text-white transition-colors">RSI Trading Techniques</h3>
            <p className="text-sm text-gray-400 mb-3">
              Discover advanced techniques for using the Relative Strength Index in your trading strategy.
            </p>
            <button className="text-white text-sm hover:text-white/80 transition-colors group-hover:translate-x-1 inline-flex items-center transition-transform duration-300">
              Read more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

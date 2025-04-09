"use client";

import React, { useState } from 'react';

const DashboardPage = () => {
  // Sample data for charts and metrics
  const performanceData = [
    { month: 'Jan', return: 2.4 },
    { month: 'Feb', return: -1.8 },
    { month: 'Mar', return: 3.2 },
    { month: 'Apr', return: 5.1 },
    { month: 'May', return: -0.7 },
    { month: 'Jun', return: 2.9 },
  ];

  const metrics = [
    { name: 'Total Simulations', value: '24', change: '+3', changeType: 'positive' },
    { name: 'Win Rate', value: '62%', change: '+5%', changeType: 'positive' },
    { name: 'Avg. Return', value: '2.8%', change: '-0.3%', changeType: 'negative' },
    { name: 'Best Strategy', value: 'MACD', change: 'No change', changeType: 'neutral' },
  ];

  const recentSimulations = [
    { id: 1, strategy: 'MACD Crossover', date: '2025-04-08', return: '+3.2%', status: 'success' },
    { id: 2, strategy: 'RSI Divergence', date: '2025-04-05', return: '-1.4%', status: 'error' },
    { id: 3, strategy: 'Moving Average', date: '2025-04-02', return: '+2.1%', status: 'success' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <select className="bg-surface border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
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
          <div key={metric.name} className="bg-surface rounded-xl p-5 shadow-md">
            <p className="text-sm text-gray-400">{metric.name}</p>
            <div className="flex items-end justify-between mt-2">
              <p className="text-2xl font-semibold">{metric.value}</p>
              <span className={`text-xs px-2 py-1 rounded-full flex items-center ${
                metric.changeType === 'positive' ? 'bg-success/20 text-success' : 
                metric.changeType === 'negative' ? 'bg-error/20 text-error' : 
                'bg-gray-500/20 text-gray-400'
              }`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-surface rounded-xl p-5 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="h-64 w-full">
          {/* Chart visualization - simplified representation */}
          <div className="h-full w-full flex items-end space-x-2">
            {performanceData.map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-full ${item.return >= 0 ? 'bg-success' : 'bg-error'} rounded-t-sm`} 
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
      <div className="bg-surface rounded-xl p-5 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Simulations</h2>
          <button className="text-sm text-primary hover:text-primary-dark">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-border">
                <th className="pb-3 font-medium">Strategy</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Return</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentSimulations.map((sim) => (
                <tr key={sim.id} className="border-b border-border/50 hover:bg-surface-lighter">
                  <td className="py-3">{sim.strategy}</td>
                  <td className="py-3 text-sm text-gray-400">{sim.date}</td>
                  <td className={`py-3 ${sim.return.startsWith('+') ? 'text-success' : 'text-error'}`}>{sim.return}</td>
                  <td className="py-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      sim.status === 'success' ? 'bg-success/20 text-success' : 'bg-error/20 text-error'
                    }`}>
                      {sim.status === 'success' ? 'Profitable' : 'Loss'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-surface rounded-xl p-5 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-4 hover:bg-surface-lighter transition-colors">
            <h3 className="font-medium mb-2">Understanding MACD Strategy</h3>
            <p className="text-sm text-gray-400 mb-3">Learn how to use the Moving Average Convergence Divergence indicator for trading decisions.</p>
            <button className="text-primary text-sm hover:text-primary-dark">Read more →</button>
          </div>
          <div className="border border-border rounded-lg p-4 hover:bg-surface-lighter transition-colors">
            <h3 className="font-medium mb-2">RSI Trading Techniques</h3>
            <p className="text-sm text-gray-400 mb-3">Discover advanced techniques for using the Relative Strength Index in your trading strategy.</p>
            <button className="text-primary text-sm hover:text-primary-dark">Read more →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

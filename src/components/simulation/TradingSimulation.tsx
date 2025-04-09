"use client";

import React, { useState } from 'react';

const TradingSimulation = () => {
  const [selectedStrategy, setSelectedStrategy] = useState('macd');
  const [timeframe, setTimeframe] = useState('1d');
  const [symbol, setSymbol] = useState('AAPL');
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Sample data for chart
  const chartData = {
    dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    prices: [150, 155, 159, 145, 162, 170, 165, 172, 180],
    signals: [
      { date: 'Feb', type: 'buy', price: 155 },
      { date: 'Apr', type: 'sell', price: 145 },
      { date: 'Jun', type: 'buy', price: 170 },
      { date: 'Aug', type: 'sell', price: 172 },
    ]
  };

  const strategies = [
    { id: 'macd', name: 'MACD Crossover' },
    { id: 'rsi', name: 'RSI Divergence' },
    { id: 'ma', name: 'Moving Average' },
    { id: 'bb', name: 'Bollinger Bands' },
  ];

  const timeframes = [
    { id: '1h', name: '1 Hour' },
    { id: '4h', name: '4 Hours' },
    { id: '1d', name: '1 Day' },
    { id: '1w', name: '1 Week' },
  ];

  const symbols = [
    { id: 'AAPL', name: 'Apple Inc.' },
    { id: 'MSFT', name: 'Microsoft Corp.' },
    { id: 'GOOGL', name: 'Alphabet Inc.' },
    { id: 'AMZN', name: 'Amazon.com Inc.' },
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsRunning(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trading Simulation</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Strategy Configuration */}
        <div className="bg-surface rounded-xl p-5 shadow-md lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Strategy Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Trading Strategy</label>
              <select 
                value={selectedStrategy}
                onChange={(e) => setSelectedStrategy(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {strategies.map(strategy => (
                  <option key={strategy.id} value={strategy.id}>{strategy.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Symbol</label>
              <select 
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {symbols.map(sym => (
                  <option key={sym.id} value={sym.id}>{sym.name} ({sym.id})</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Timeframe</label>
              <select 
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {timeframes.map(tf => (
                  <option key={tf.id} value={tf.id}>{tf.name}</option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isRunning ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running Simulation...
                  </>
                ) : "Run Simulation"}
              </button>
            </div>
          </div>

          {showResults && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-md font-semibold mb-3">Simulation Results</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Trades:</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Win Rate:</span>
                  <span className="font-medium text-success">75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Net Return:</span>
                  <span className="font-medium text-success">+20.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Drawdown:</span>
                  <span className="font-medium text-error">-8.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chart and Analysis */}
        <div className="bg-surface rounded-xl p-5 shadow-md lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{symbol} Price Chart</h2>
            <div className="flex space-x-2">
              <button className="bg-background hover:bg-surface-lighter px-3 py-1 rounded-lg text-sm">1M</button>
              <button className="bg-primary text-white px-3 py-1 rounded-lg text-sm">3M</button>
              <button className="bg-background hover:bg-surface-lighter px-3 py-1 rounded-lg text-sm">6M</button>
              <button className="bg-background hover:bg-surface-lighter px-3 py-1 rounded-lg text-sm">1Y</button>
            </div>
          </div>

          {/* Chart visualization - simplified representation */}
          <div className="h-64 w-full mb-6 bg-background rounded-lg p-4">
            <div className="h-full w-full flex items-end space-x-1 relative">
              {chartData.prices.map((price, index) => {
                const height = (price / Math.max(...chartData.prices)) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div 
                      className="w-full bg-primary/30 rounded-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                );
              })}
              
              {/* Line overlay */}
              <div className="absolute inset-0 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d={`M0,${100 - (chartData.prices[0] / Math.max(...chartData.prices)) * 100} ${chartData.prices.map((price, i) => {
                      const x = (i / (chartData.prices.length - 1)) * 100;
                      const y = 100 - (price / Math.max(...chartData.prices)) * 100;
                      return `L${x},${y}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#0066cc"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              
              {/* Trade signals */}
              {showResults && chartData.signals.map((signal, index) => {
                const signalIndex = chartData.dates.findIndex(date => date === signal.date);
                const xPos = (signalIndex / (chartData.dates.length - 1)) * 100;
                const yPos = 100 - (signal.price / Math.max(...chartData.prices)) * 100;
                
                return (
                  <div 
                    key={index}
                    className={`absolute w-3 h-3 rounded-full ${signal.type === 'buy' ? 'bg-success' : 'bg-error'}`}
                    style={{ 
                      left: `${xPos}%`, 
                      bottom: `${yPos}%`,
                      transform: 'translate(-50%, 50%)'
                    }}
                  ></div>
                );
              })}
            </div>
            
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              {chartData.dates.map((date, index) => (
                <div key={index}>{date}</div>
              ))}
            </div>
          </div>

          {showResults && (
            <div className="border-t border-border pt-4">
              <h3 className="text-md font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-300">
                The MACD Crossover strategy performed well on AAPL over this period, with 3 winning trades and 1 losing trade. 
                The strategy effectively captured the uptrend in June-September, but had a false signal in April.
                Consider adjusting the MACD parameters to reduce false signals in sideways markets.
              </p>
              
              <div className="mt-4 bg-primary/10 rounded-lg p-3 border border-primary/20">
                <h4 className="text-sm font-medium mb-1 text-primary">Learning Opportunity</h4>
                <p className="text-sm text-gray-300">
                  MACD works best in trending markets but can generate false signals during consolidation periods. 
                  Consider combining with a trend filter like ADX to improve performance.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {showResults && (
        <div className="bg-surface rounded-xl p-5 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Trade Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-400 border-b border-border">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Signal</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Return</th>
                  <th className="pb-3 font-medium">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3">Feb</td>
                  <td className="py-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-success/20 text-success">Buy</span>
                  </td>
                  <td className="py-3">$155.00</td>
                  <td className="py-3">-</td>
                  <td className="py-3 text-sm text-gray-400">MACD line crossed above signal line</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Apr</td>
                  <td className="py-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-error/20 text-error">Sell</span>
                  </td>
                  <td className="py-3">$145.00</td>
                  <td className="py-3 text-error">-6.45%</td>
                  <td className="py-3 text-sm text-gray-400">MACD line crossed below signal line</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Jun</td>
                  <td className="py-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-success/20 text-success">Buy</span>
                  </td>
                  <td className="py-3">$170.00</td>
                  <td className="py-3">-</td>
                  <td className="py-3 text-sm text-gray-400">MACD line crossed above signal line</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3">Aug</td>
                  <td className="py-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-error/20 text-error">Sell</span>
                  </td>
                  <td className="py-3">$172.00</td>
                  <td className="py-3 text-success">+1.18%</td>
                  <td className="py-3 text-sm text-gray-400">MACD line crossed below signal line</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingSimulation;

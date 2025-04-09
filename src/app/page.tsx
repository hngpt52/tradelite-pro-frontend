"use client"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="bg-black rounded-3xl p-6 md:p-10 shadow-md border border-white/5 backdrop-blur-xs">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Learn Trading Without Financial Risk</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              TradeLite Pro is an interactive, educational platform for retail traders with AI-powered algorithmic
              trading simulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/simulations"
                className="bg-white hover:bg-white/90 text-black font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center hover:translate-y-[-2px]"
              >
                Try a simulation
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/auth/register"
                className="bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-white/20 hover:translate-y-[-2px]"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-2xl shadow-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-2px] group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Trading Simulations</h3>
            <p className="text-gray-300">
              Test different trading strategies without risking real money. Learn from AI-powered feedback.
            </p>
          </div>

          <div className="bg-black p-6 rounded-2xl shadow-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-2px] group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-300">
              Receive educational feedback and insights based on your simulation results and trading decisions.
            </p>
          </div>

          <div className="bg-black p-6 rounded-2xl shadow-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-2px] group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
            <p className="text-gray-300">
              Track your progress and analyze your performance with detailed metrics and visualizations.
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <div className="bg-black rounded-2xl p-6 md:p-8 shadow-md border border-white/5 backdrop-blur-xs">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Select a strategy</h3>
              <p className="text-gray-300">
                Choose from various trading strategies like MACD, RSI, or Moving Average Crossovers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Run simulation</h3>
              <p className="text-gray-300">
                Test your selected strategy against historical market data to see how it performs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learn & improve</h3>
              <p className="text-gray-300">
                Analyze results and receive AI-powered feedback to improve your trading knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="bg-black rounded-3xl p-6 md:p-8 shadow-md border border-white/5 text-center backdrop-blur-xs">
          <h2 className="text-2xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            TradeLite Pro provides a comprehensive environment for learning about trading strategies without financial
            risk.
          </p>
          <Link
            href="/auth/register"
            className="bg-white hover:bg-white/90 text-black font-medium py-3 px-6 rounded-xl transition-all duration-300 inline-block hover:translate-y-[-2px]"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 TradeLite Pro. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

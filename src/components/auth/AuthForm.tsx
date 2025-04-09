"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

type AuthFormProps = {
  type: "login" | "register" | "forgot-password"
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      if (type === "forgot-password") {
        setSuccess("Password reset instructions have been sent to your email.")
      } else if (type === "register" && password !== confirmPassword) {
        setError("Passwords do not match.")
      }
    }, 1500)
  }

  const getTitle = () => {
    switch (type) {
      case "login":
        return "Sign in to your account"
      case "register":
        return "Create a new account"
      case "forgot-password":
        return "Reset your password"
      default:
        return ""
    }
  }

  const getDescription = () => {
    switch (type) {
      case "login":
        return "Enter your credentials to access your account"
      case "register":
        return "Fill in your details to create a new account"
      case "forgot-password":
        return "Enter your email and we'll send you instructions to reset your password"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-black rounded-2xl p-6 md:p-8 w-full max-w-md shadow-md border border-white/5 backdrop-blur-xs">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">{getTitle()}</h1>
          <p className="text-gray-400">{getDescription()}</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl p-3 mb-6">{error}</div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl p-3 mb-6">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {type === "register" && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
              placeholder="you@example.com"
              required
            />
          </div>

          {type !== "forgot-password" && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                  Password
                </label>
                {type === "login" && (
                  <Link
                    href="/auth/forgot-password"
                    className="text-xs text-white hover:text-white/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          {type === "register" && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white hover:bg-white/90 text-black font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed hover:translate-y-[-2px]"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : type === "login" ? (
              "Sign In"
            ) : type === "register" ? (
              "Create Account"
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          {type === "login" ? (
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-white hover:text-white/80 font-medium transition-colors">
                Sign up
              </Link>
            </p>
          ) : type === "register" ? (
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-white hover:text-white/80 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          ) : (
            <p className="text-gray-400">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-white hover:text-white/80 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthForm

import {
  Network,
  Cloud,
  Terminal,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, onLoginSubmit, errors, isSubmitting, register } =
    useAuth();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#141218] font-['Inter',sans-serif] text-[#e6e0e9]">
      {/* Background Decorations */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#cfbcff]/5 blur-[120px]" />

        <div className="absolute -bottom-[10%] -left-[10%] h-[400px] w-[400px] rounded-full bg-[#cdc0e9]/5 blur-[100px]" />
      </div>

      {/* Main Section */}
      <main className="relative z-10 flex flex-grow items-center justify-center p-4">
        <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Login Card */}
          <div className="overflow-hidden rounded-xl border border-[#494551]/30 bg-[#1d1b20] p-8 shadow-2xl sm:p-10">
            {/* Brand Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#6750a4]">
                <Network size={28} className="text-[#cfbcff]" />
              </div>

              <h1 className="text-2xl font-semibold tracking-tight">
                Synthetix AI
              </h1>

              <p className="mt-1 text-sm text-[#cbc4d2]">
                Sign in to your workspace
              </p>
            </div>

            {/* Social Login */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {/* Google */}
              <button
                type="button"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#494551]/50 bg-[#2b292f] px-4 py-3 transition-colors hover:bg-[#3b383e]"
              >
                <Cloud
                  size={18}
                  className="text-[#cbc4d2] transition-colors group-hover:text-white"
                />

                <span className="text-xs font-semibold tracking-wider">
                  GOOGLE
                </span>
              </button>

              {/* GitHub */}
              <button
                type="button"
                className="group flex items-center justify-center gap-2 rounded-lg border border-[#494551]/50 bg-[#2b292f] px-4 py-3 transition-colors hover:bg-[#3b383e]"
              >
                <Terminal
                  size={18}
                  className="text-[#cbc4d2] transition-colors group-hover:text-white"
                />

                <span className="text-xs font-semibold tracking-wider">
                  GITHUB
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-8 flex items-center">
              <div className="flex-grow border-t border-[#494551]/30" />

              <span className="mx-3 flex-shrink px-1 text-xs text-[#cbc4d2]">
                or continue with email
              </span>

              <div className="flex-grow border-t border-[#494551]/30" />
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="ml-1 text-[11px] font-semibold tracking-wider text-[#cbc4d2]"
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full rounded-lg border border-[#494551]/50 bg-[#0f0d13] px-4 py-3 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c]/50 focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                />

                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label
                    htmlFor="password"
                    className="text-[11px] font-semibold tracking-wider text-[#cbc4d2]"
                  >
                    PASSWORD
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs text-[#cfbcff] transition-all hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                    className="w-full rounded-lg border border-[#494551]/50 bg-[#0f0d13] px-11 py-3 pr-12 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c]/50 focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#948e9c] transition-colors hover:text-[#cfbcff]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 px-1">
                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="h-4 w-4 cursor-pointer rounded border-[#494551]/50 bg-[#0f0d13] text-[#cfbcff] focus:ring-[#cfbcff]/30"
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer select-none text-xs text-[#cbc4d2]"
                >
                  Stay signed in
                </label>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6750a4] py-3.5 text-sm font-semibold text-[#e0d2ff] shadow-lg transition-all duration-300 hover:bg-[#cfbcff] hover:text-[#381e72] hover:shadow-[#cfbcff]/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>{isSubmitting ? "Signing In..." : "Sign In"}</span>

                <ArrowRight size={18} />
              </button>
            </form>

            {/* Sign Up Footer */}
            <div className="mt-8 border-t border-[#494551]/30 pt-6 text-center">
              <p className="text-xs text-[#cbc4d2]">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="ml-1 font-bold text-[#cfbcff] hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Meta */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#948e9c]/50">
              © 2024 Synthetix AI. Enterprise Intelligence Platforms.
            </p>

            <div className="mt-3 flex justify-center gap-4">
              <a
                href="#"
                className="text-xs text-[#948e9c]/40 transition-colors hover:text-[#cbc4d2]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-xs text-[#948e9c]/40 transition-colors hover:text-[#cbc4d2]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Right AI Decoration */}
      <div className="pointer-events-none fixed bottom-6 right-6 hidden select-none opacity-20 lg:block">
        <div className="relative h-64 w-64 overflow-hidden rounded-xl border border-[#494551]/20">
          <img
            src="/images/ai-decoration.jpg"
            alt="Abstract AI Visualization"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#141218] to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Login;

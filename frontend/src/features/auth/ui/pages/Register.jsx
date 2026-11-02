

import { UserRound, Mail, LockKeyhole, Sparkles, Network } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const {watch, onRegisterSubmit, handleSubmit, register, errors} = useAuth();
  const password = watch("password", "");

  // Password Strength
  const getPasswordStrength = (value) => {
    let strength = 0;

    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    return strength;
  };

  const strength = getPasswordStrength(password);

  const strengthText = ["Weak", "Fair", "Good", "Strong", "Very Strong"];

  // Form Submit
  

  return (
    <div className="min-h-screen bg-[#141218] text-[#e6e0e9] font-['Inter',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full px-6 py-4">
        <h2 className="text-xl font-bold tracking-tight">Synthetix AI</h2>
      </header>

      <main className="flex min-h-screen">
        {/* Left Section */}
        <section className="relative hidden w-[40%] flex-col justify-end overflow-hidden border-r border-[#494551]/20 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] p-12 md:flex">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
            alt="AI Neural Network"
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141218] via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-[#cfbcff]">
              <Sparkles size={20} fill="currentColor" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                Next-Gen Intelligence
              </span>
            </div>

            <h1 className="max-w-md text-4xl font-bold leading-tight">
              Accelerate your team's intelligence.
            </h1>

            <p className="max-w-sm text-base leading-6 text-[#cbc4d2]">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>

            {/* Statistics */}
            <div className="flex gap-8 pt-8 opacity-60">
              <div>
                <h3 className="text-xl font-bold">99.9%</h3>

                <p className="text-xs text-[#cbc4d2]">Uptime SLA</p>
              </div>

              <div>
                <h3 className="text-xl font-bold">ISO</h3>

                <p className="text-xs text-[#cbc4d2]">27001 Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex w-full items-center justify-center bg-[#141218] px-6 py-24 md:w-[60%] md:px-12">
          <div className="w-full max-w-[480px] space-y-8">
            {/* Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="text-sm text-[#cbc4d2]">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <UserRound
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Name must contain at least 3 characters",
                      },
                    })}
                    className="w-full rounded-lg border border-[#494551] bg-[#1d1b20] py-4 pl-12 pr-4 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c] focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />
                </div>

                {errors.name && (
                  <p className="text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="w-full rounded-lg border border-[#494551] bg-[#1d1b20] py-4 pl-12 pr-4 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c] focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />
                </div>

                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#948e9c]"
                  />

                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                    className="w-full rounded-lg border border-[#494551] bg-[#1d1b20] py-4 pl-12 pr-4 text-sm text-[#e6e0e9] outline-none transition-all placeholder:text-[#948e9c] focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30"
                  />
                </div>

                {errors.password && (
                  <p className="text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}

                {/* Password Strength Indicator */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          strength >= item ? "bg-[#cfbcff]" : "bg-[#494551]/50"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[#cfbcff]">
                    {password.length > 0
                      ? strengthText[strength]
                      : "Enter your password"}
                  </span>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-3 py-1">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms and conditions",
                  })}
                  className="mt-1 h-5 w-5 cursor-pointer rounded border-[#494551] bg-[#1d1b20] text-[#cfbcff] focus:ring-[#cfbcff] focus:ring-offset-[#141218]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-relaxed text-[#cbc4d2]"
                >
                  I agree to the{" "}
                  <a href="#" className="text-[#cfbcff] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#cfbcff] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {errors.terms && (
                <p className="text-xs text-red-400">{errors.terms.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#6750a4] to-[#cfbcff] py-4 font-bold text-[#22005d] shadow-lg transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-[#494551]/40" />

              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#948e9c]">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#494551]/40" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              {/* Google */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#494551] py-4 transition-colors hover:bg-[#1d1b20]"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHN2FlWTdTx9wh1INaysdZY8qgrdScmCkhGNyzpMYyvbRwQt2tcsIHfDPFWnxeHKbRsGL3kW_0qJfkMIP_Tzkq4WzNtJJHh2L-6aCvq3dIfBzxRm8FxkxInr0BNOLock5HHxiDu_568eYshXQPEERUmYCL6I98MRWPxixmmTcUa1XrMBwbTQe4rVeFRt7uwM15sJK8-NlZpy6L1C-6i-GIifuyiO0xSTjd4KjorP2uvhSTxoppxXtHLkSQ6hnDzznwGqyj6Ao9Q2Xf"
                  alt="Google"
                  className="h-5 w-5"
                />

                <span className="text-sm">Google</span>
              </button>

              {/* SSO */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#494551] py-4 transition-colors hover:bg-[#1d1b20]"
              >
                <Network size={20} />

                <span className="text-sm">SSO</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="pt-4 text-center">
              <p className="text-sm text-[#cbc4d2]">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="ml-1 font-bold text-[#cfbcff] hover:underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-[#494551]/20 bg-[#141218] px-6 py-8 md:flex-row">
        <div className="text-xl font-bold">Synthetix AI</div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="text-xs text-[#cbc4d2] hover:text-white">
            Privacy Policy
          </a>

          <a href="#" className="text-xs text-[#cbc4d2] hover:text-white">
            Terms of Service
          </a>

          <a href="#" className="text-xs text-[#cbc4d2] hover:text-white">
            Security
          </a>

          <a href="#" className="text-xs text-[#cbc4d2] hover:text-white">
            System Status
          </a>
        </div>

        <p className="text-xs text-[#cbc4d2]">
          © 2024 Synthetix AI. Enterprise Intelligence Platforms.
        </p>
      </footer>
    </div>
  );
};

export default Register;

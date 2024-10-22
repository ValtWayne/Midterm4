import Image from "next/image";

export default function SignUpFacebook() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-blue-500"> 
   
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">

      <Image
        className="mb-8 mx-auto"  // Added 'mx-auto' here
        src="/image/fblogo.png" 
        alt="Facebook Logo"
        width={90}
        height={20}
        priority
      />

        <h1 className="text-2xl font-bold text-center mb-6">Create a New Account</h1>
        <p className="text-center text-gray-600 mb-6">It's quick and easy.</p>

        {/* Sign Up Form */}
        <form className="flex flex-col gap-4">
          {/* First and Last Name */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          {/* Email or Phone */}
          <input
            type="email"
            placeholder="Mobile number or email"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="New Password"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Complete Address */}
          <input
            type="text"
            placeholder="Street Address"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="State/Province"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Contact Number */}
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Birthday */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Birthday</label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 w-full">
                <option value="day">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select className="border border-gray-300 rounded px-2 py-1 w-full">
                <option value="month">Month</option>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                  (month, i) => (
                    <option key={i} value={month}>
                      {month}
                    </option>
                  )
                )}
              </select>
              <select className="border border-gray-300 rounded px-2 py-1 w-full">
                <option value="year">Year</option>
                {[...Array(100)].map((_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col items-center gap-2">
            <label className="text-gray-600 text-sm">Gender</label>
            <div className="flex justify-center gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Female" className="border-gray-300" />
                Female
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Male" className="border-gray-300" />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Custom" className="border-gray-300" />
                Custom
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center mt-4">
          By clicking Sign Up, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Data Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Cookies Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";

interface StepOneProps {
  darkMode: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface ValidationRule {
  field: string;
  regex: RegExp;
  message: string;
}

const validationRules: ValidationRule[] = [
  {
    field: "firstName",
    regex: /\S+/,
    message: "Please enter your first name",
  },
  {
    field: "lastName",
    regex: /\S+/,
    message: "Please enter your last name",
  },
  {
    field: "email",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  {
    field: "phoneNumber",
    regex: /^\d{10}$/,
    message: "Please enter a valid phone number",
  },
];

const RegisterStepOne: React.FC<StepOneProps> = ({ darkMode, onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "male") {
      setMale(true);
      setFemale(false);
    } else if (name === "female") {
      setFemale(true);
      setMale(false);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: string[] = [];

    validationRules.forEach((rule) => {
      if (!rule.regex.test(eval(`${rule.field}`))) {
        errors.push(rule.message);
      }
    });

    if (!male && !female) {
      errors.push("Please select your sex");
    }

    if (errors.length === 0) {
      const birthday = new Date(`${year}-${month}-${date}`).toISOString();
      // Do something with the form data
    } else {
      setErrors(errors);
    }
  };

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
      <div
        className={`flex flex-col items-center ${
          darkMode ? "bg-green-800 text-white" : "bg-white text-green-700"
        } p-40`}
      >
        <h2 className="font-bold text-xl mb-4">Step One</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className={`block font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleInput}
              className={`appearance-none border ${
                darkMode
                  ? "border-green-300 text-black"
                  : "border-green-500 text-green-700"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className={`block font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleInput}
              className={`appearance-none border ${
                darkMode
                  ? "border-green-300 text-black"
                  : "border-green-500 text-green-700"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleInput}
              className={`appearance-none border ${
                darkMode
                  ? "border-green-300 text-black"
                  : "border-green-500 text-green-700"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className={`block font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleInput}
              className={`appearance-none border ${
                darkMode
                  ? "border-green-300 text-black"
                  : "border-green-500 text-green-700"
              } rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>
          <div className="mb-4">
            <label
              className={`block font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Birthday
            </label>
            <div className="flex space-x-2">
              <select
                name="date"
                id="date"
                value={date}
                onChange={handleInput}
                className={`w-full border ${
                  darkMode
                    ? "border-green-300 text-black"
                    : "border-green-500 text-green-700"
                } rounded py-2 px-3 focus:outline-none focus:shadow-outline`}
              >
                <option value="">Date</option>
                {days.map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                name="month"
                id="month"
                value={month}
                onChange={handleInput}
                className={`w-full border ${
                  darkMode
                    ? "border-green-300 text-black"
                    : "border-green-500 text-green-700"
                } rounded py-2 px-3 focus:outline-none focus:shadow-outline`}
              >
                <option value="">Month</option>
                {months.map((m, index) => (
                  <option key={index} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                name="year"
                id="year"
                value={year}
                onChange={handleInput}
                className={`w-full border ${
                  darkMode
                    ? "border-green-300 text-black"
                    : "border-green-500 text-green-700"
                } rounded py-2 px-3 focus:outline-none focus:shadow-outline`}
              >
                <option value="">Year</option>
                {years.map((y, index) => (
                  <option key={index} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className={`block font-bold mb-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Sex
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="male"
                id="male"
                checked={male}
                onChange={handleInput}
                className="focus:outline-none focus:shadow-outline"
              />
              <label
                htmlFor="male"
                className={`${darkMode ? "text-white" : "text-black"}`}
              >
                Male
              </label>
              <input
                type="radio"
                name="female"
                id="female"
                checked={female}
                onChange={handleInput}
                className="focus:outline-none focus:shadow-outline"
              />
              <label
                htmlFor="female"
                className={`${darkMode ? "text-white" : "text-black"}`}
              >
                Female
              </label>
            </div>
          </div>

          {errors.length > 0 && (
            <ul
              className={`mb-4 ${darkMode ? "text-red-300" : "text-red-700"}`}
            >
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}

          <button
            type="submit"
            className={`w-full ${
              darkMode
                ? "bg-green-300 text-green-800 hover:bg-green-200"
                : "bg-green-500 text-white hover:bg-green-400"
            } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};
export default RegisterStepOne;

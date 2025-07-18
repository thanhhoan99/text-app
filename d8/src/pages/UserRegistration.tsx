import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: string;
  dateOfBirth: Date;
  country: string;
  hobbies: string[];
  profilePic: FileList;
  bio: string | undefined; // ❗ sửa từ `bio?: string` ➝ `string | undefined`
};

const schema = yup.object({
  fullName: yup.string().min(3, "Full Name must be at least 3 characters.").required("Full Name is required."),
  email: yup.string().email("Invalid email address.").required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Confirm Password is required."),
  phone: yup.string().min(10, "Phone number must be at least 10 digits.").required("Phone number is required."),
  gender: yup.string().required("Please select a gender."),
  dateOfBirth: yup
    .date()
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), "You must be at least 18 years old.")
    .required("Date of Birth is required."),
  country: yup.string().required("Please select a country."),
  hobbies: yup.array().min(1, "Select at least one hobby."),
 profilePic: yup
  .mixed()
  .test("required", "Please upload a file", (value) => {
    return value instanceof FileList && value.length > 0;
  }),
 bio: yup.string().optional(),
});

export default function UserRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            {...register("fullName")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            {...register("email")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            {...register("password")}
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex space-x-4">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center space-x-1">
                <input type="radio" value={g} {...register("gender")} />
                <span>{g}</span>
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
        </div>

        {/* Country */}
        <div>
          <label className="block font-medium mb-1">Country</label>
          <select
            {...register("country")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Country</option>
            <option value="Vietnam">Vietnam</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <p className="text-red-500 text-sm">{errors.country?.message}</p>
        </div>

        {/* Hobbies */}
        <div>
          <label className="block font-medium mb-1">Hobbies</label>
          <div className="flex flex-wrap gap-4">
            {["Reading", "Traveling", "Gaming"].map((hobby) => (
              <label key={hobby} className="flex items-center space-x-1">
                <input type="checkbox" value={hobby} {...register("hobbies")} />
                <span>{hobby}</span>
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.hobbies?.message}</p>
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block font-medium mb-1">Profile Picture</label>
          <input
            type="file"
            {...register("profilePic")}
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-gray-50 file:text-sm file:font-semibold hover:file:bg-gray-100"
          />
          <p className="text-red-500 text-sm">{errors.profilePic?.message}</p>
        </div>

        {/* Bio */}
        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

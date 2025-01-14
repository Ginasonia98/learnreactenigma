import { useState, useEffect } from "react";
import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/axios"; // Import axios instance for requests
import { useSignInContext } from "../../context/SignInContext"; // Import context

// Schema for login form
const loginFormSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password harus minimal 8 karakter"),
});

const SignInPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [users, setUsers] = useState([]);
  const { login } = useSignInContext(); // Ambil fungsi login dari context
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  // Fetch users (GET request)
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data); // Store users in the state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Login function (verify user data)
  const loginUser = async (data) => {
    try {
      if (!data.email || !data.password) {
        alert("Inputan belum sesuai!");
        return;
      }

      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        alert(`Login berhasil! Welcome ${data.email}`);
        login(user); // Simpan data pengguna ke context
        navigate(`/dashboard/${user.username}`); // Arahkan ke halaman dashboard
      } else {
        alert("Belum pernah register akun ini!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Fetch users data when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg">Sign In</CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={form.handleSubmit(loginUser)} className="flex flex-col gap-4">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  type="email"
                  label="Email"
                  size="sm"
                  isInvalid={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  type="password"
                  label="Password"
                  size="sm"
                  isInvalid={Boolean(fieldState.error)}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Button type="submit" color="primary">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignInPage;


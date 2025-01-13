import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../../lib/axios"; // Import axios instance for requests
import { useNavigate, Link } from "react-router-dom";

// Schema for the form validation
const signUpFormSchema = z.object({
  email: z.string().email("Format email belum sesuai"),
  username: z.string().min(4, "Username harus 4 karakter atau lebih"),
  password: z.string().min(8, "Password harus 8 karakter atau lebih"),
});

const SignUpPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  //Digunakan untuk navigasi ke halaman lain setelah pendaftaran berhasil (misalnya, menuju halaman login).
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
    // Hook dari react-hook-form untuk mengelola state form. defaultValues mengatur nilai awal form, dan resolver mengintegrasikan schema validasi zod.
  });

  // Register user function (POST request)
  const registerUser = async (data) => {
    try {
      // Sending POST request to add user to the db.json
      await axiosInstance.post("/users", {
        email: data.email,
        username: data.username,
        password: data.password,
      });
      //Fungsi ini menangani proses pendaftaran pengguna dengan mengirimkan data form
      //ke endpoint API (/users) menggunakan metode POST

      // Alert on successful registration
      alert(
        `Registration Successful!\nEmail: ${data.email} | Username: ${data.username}`
      );

      // Redirect to SignInPage after successful registration
      navigate("/sign-in"); // Use React Router to navigate to SignInPage
    } catch (error) {
      console.error("Error registering user:", error);
    }
    //Jika berhasil, akan muncul alert yang mengonfirmasi keberhasilan pendaftaran,
    //dan kemudian pengguna diarahkan ke halaman login (/signin) menggunakan navigate.
    //Jika ada error, akan ditampilkan pesan error di konsol.
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg">Sign up!</CardHeader>
        <Divider />
        <CardBody>
          <form
            onSubmit={form.handleSubmit(registerUser)}
            className="flex flex-col gap-4"
          >
            {/* isInvalid: Menandakan jika ada kesalahan validasi.
            errorMessage: Menampilkan pesan error jika validasi gagal. */}
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
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Username"
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
              Sign up
            </Button>
          </form>
        </CardBody>
        {/* to itu isinya link tujuan page */}
        <CardFooter className="flex justify-center">
          <Link to="/wishlist" className="text-blue-500 hover:underline">
            To Wishlist Page
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;

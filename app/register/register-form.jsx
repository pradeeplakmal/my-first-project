"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";
// import { registerUser } from "@/lib/apis/server";
import { signUp } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};
//Keep this as the client component (functional component
export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitForm = async (event) => {
    event?.preventDefault();

    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name").toString();
    const email = formData.get("email").toString();
    const password = formData.get("password").toString();
    const confirmPassword = formData.get("confirm-password") ?? "";
    // console.log("submitted!", { name, email, password, confirmPassword });

    //Basic validation logic
    //if (name && email && password && confirmPassword) {
    if (password === confirmPassword) {
      setError(DEFAULT_ERROR);

      // setLoading(true);
      // const registerResp = await registerUser({ name, email, password });
      // setLoading(false);
      // if (registerResp?.error) {
      //   setError({ error: true, message: registerResp.error });
      // } else {
      //   toast({
      //     variant: "success",
      //     title: "Registration successful...",
      //     description: "Please continue with login...",
      //     action: (
      //       <ToastAction altText="Login" className="hover:bg-green-800">
      //         Login
      //       </ToastAction>
      //     ),
      //   });
      // }

      const { data, error } = await signUp.email(
        {
          email: email,
          password: password,
          name: name,
          image: undefined,
        },
        {
          onRequest: () => {
            //console.log("onSuccess", ctx);
          },

          onSuccess: (ctx) => {
            console.log("onSuccess", ctx);
          },
          onError: (ctx) => {
            if (ctx) {
              setError({ error: true, message: ctx.error.message });
            }
          },
        }
      );

      if (data) {
        console.log("data", data);
      }
    } else {
      setError({ error: true, message: "Password doesn't match..." });
    }
    //}
    //console.log("Error!", error);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="bg-blue-50/90 w-[360px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your information to get start</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Pradeep Lakmal" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="lakmal@gmail.com"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Enter password again to cinfirm"
                />
              </div>

              <div className="flex justify-center">
                {error?.error && (
                  <span className="text-xs text-center text-red-600 duration-1000 animate-pulse">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center gap-1 text-xs">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

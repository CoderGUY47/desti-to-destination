"use client";
import React from "react";
import Link from "next/link";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from "@heroui/react";
import { FiUser, FiMail, FiLock, FiImage } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Account Login successfully");
      redirect("/");
    }
    else if (error) {
      toast.error(error.message);
      return;
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    }); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-44 pb-6 bg-black/80 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-white tracking-tight">
          Sign in your account
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Enjoy your trip with Desti To Destination
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white w-full max-w-[420px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-gray-100 rounded-lg">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Email Address */}
          <TextField name="email" type="email" isRequired className="w-full">
            <Label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Email Address
            </Label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400 text-lg" />
              </div>
              <Input
                name="email"
                suppressHydrationWarning
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-200 focus:bg-white rounded-none py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>
            <FieldError className="text-red-500 text-xs mt-1 block" />
          </TextField>

          {/* Password */}
          <TextField
            name="password"
            type="password"
            isRequired
            className="w-full"
          >
            <Label className="block text-sm font-semibold text-gray-800 mb-1.5">
              Password
            </Label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400 text-lg" />
              </div>
              <Input
                name="password"
                suppressHydrationWarning
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-200 focus:bg-white rounded-none py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>
            <FieldError className="text-red-500 text-xs mt-1 block" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#18a0b5] hover:bg-[#14899b] text-white font-medium py-2.5 rounded-none transition-colors mt-2 text-sm"
          >
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-3 text-sm text-gray-500">Or sign up with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleSignIn}
            type="button"
            variant="ghost"
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold text-sm py-2.5 rounded-none transition-colors"
          >
            <FcGoogle className="text-xl" />
            Login With Google
          </Button>
        </Form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-[#18a0b5] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

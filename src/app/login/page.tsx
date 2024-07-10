"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import * as Yup from "yup";
const initialValues = { email: "", password: "" };
type TFormValues = typeof initialValues;
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const page = () => {
  const handleSubmit = async (values: TFormValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      console.log(values);
      toast.success(`Welcome back. ${"Jonny"}.`);
    } catch (error) {
      toast.error("Something went wrong while submitting this form");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[800px] items-center justify-between rounded-2xl bg-card shadow-xl sm:flex-row-reverse">
        <div className="relative hidden h-full w-1/2 overflow-hidden rounded-r-2xl sm:block">
          <Image
            src="/images/login.png"
            alt="Login illustration"
            width={800}
            height={600}
            className="object-cover"
          />
        </div>
        <div className="w-full max-w-md space-y-6 p-8 sm:p-10">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Enter your email and password to access your account.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <Button type="submit" className="w-full bg-primaryMat">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <div className="flex flex-col gap-[5px]">
            <p className="text-start text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium underline underline-offset-4 hover:text-primaryTxt"
                prefetch={false}
              >
                Sign up
              </Link>
            </p>
            <Link
              href="#"
              className="text-sm font-medium underline underline-offset-4 hover:text-primaryTxt"
              prefetch={false}
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i8gqcrYis5F
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 flex items-center justify-center px-4 md:px-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription>
              Already have an account?
              <Link
                href="#"
                className="text-primary underline"
                prefetch={false}
              >
                Sign in
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};
export default page;

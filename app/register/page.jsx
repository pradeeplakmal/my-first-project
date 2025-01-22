import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import RegisterForm from "./register-form";

//keep this as server component (functional component)
export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="mx-auto container">
      <RegisterForm title="Register Form" />
    </div>
  );
}

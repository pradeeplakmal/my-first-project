import LoginForm from "./login-form";

//server component for SSR
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <LoginForm title="Sign in to HRMD"/>
    </div>
  );
}

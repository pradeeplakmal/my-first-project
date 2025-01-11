import RegisterForm from "./register-form";

//keep this as server component (functional component)
export default function RegisterPage() {
  return (
    <div className="mx-auto container">
      <RegisterForm title="Register Form" />
    </div>
  );
}

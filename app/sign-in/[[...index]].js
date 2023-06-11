
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex col-auto 90vw justify-center uppercase text-center container mx-auto p-8">
    <SignIn />
  </div>
);

export default SignInPage;

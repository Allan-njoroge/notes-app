import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="relative flex h-[100vh] w-full justify-center items-center">
      <div className="h-[50vh] bg-primary absolute top-0 left-0 w-full" />
      <form
        action=""
        className="bg-background p-10 border border-primary z-50 w-[90%] md:w-1/2 lg:w-[35%] rounded-md"
      >
        <h1 className="text-2xl font-semibold mb-5">Hi, Welcome back</h1>

        <div className="grid gap-3">
          <Input
            placeholder="Email address"
            type="email"
            required
            className=""
          />
          <Input placeholder="Password" type="password" required className="" />
          <Link><p className="ml-2 mt-2 text-muted-foreground hover:underline">Forgot password ?</p></Link>
          <Button>Login</Button>
        </div>

        <div className="my-5 grid gap-3">
            <h3 className="text-center">OR</h3>
            
            <Button variant="secondary" className="flex gap-3 hover:border hover:border-primary">
                <FaGoogle />
                <span>Continue with google</span>
            </Button>
        </div>

        {/* <p className="text-red-400 my-2 text-center">This option is unavailable!</p> */}

        <p className="text-muted-foreground text-center">
            Don't have an account? <Link to={'/register'} className="text-primary hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

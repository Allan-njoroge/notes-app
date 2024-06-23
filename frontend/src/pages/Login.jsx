import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, error, loading } = useContext(AuthContext);
  const navigate = useNavigate()

  // ===== input values
  const [inputValue, setInputValue] = useState({ email_address: "", password: "" })

  // Input fields
  const inputs = [
    { name: "email_address", placeholder: "Email Address", value: inputValue.email_address, type: "email" },
    { name: "password", placeholder: "Password", value: inputValue.password, type: "password" },
  ]

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit =  async (e) => {
    e.preventDefault()
    const res = await login(inputValue)
    console.log(res)
    navigate("/")
  }

  return (
    <div className="relative flex h-[100vh] w-full justify-center items-center">
      <div className="h-[50vh] bg-primary absolute top-0 left-0 w-full" />
      <form
        action=""
        className="bg-background p-10 border border-primary/20 z-50 w-[90%] md:w-1/2 lg:w-[35%] rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-5">Hi, Welcome back</h1>

        <div className="grid gap-3">
          {inputs.map((item, index) => (
            <Input 
              key={index}
              name={item.name}
              placeholder={item.placeholder}
              value={item.value}
              type={item.type}
              required
              onChange={handleChange}
            />
          ))} 
          <Link><p className="ml-2 mt-2 text-muted-foreground hover:underline">Forgot password ?</p></Link>
          <Button 
            type="submit" 
            className={` ${loading ? 'bg-primary/60' : ''}`}
          >
            { loading ? "Logging in..." : "Log in" }
          </Button>
        </div>

        <div className="my-5 grid gap-3">
            <h3 className="text-center">OR</h3>
            
            <Button variant="secondary" className="flex gap-3 hover:border hover:border-primary">
                <FaGoogle />
                <span>Continue with google</span>
            </Button>
        </div>

        { error && <p className="text-red-400 my-2 text-center">{error}</p>}

        <p className="text-muted-foreground text-center">
            Don't have an account? <Link to={'/register'} className="text-primary hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  
  // ===== input values
  const [inputValue, setInputValue] = useState({
    first_name: '', second_name: "", email_address: "", password: ""
  })

  // Input fields
  const inputs = [
    { name: "first_name", placeholder: "First Name", value: inputValue.first_name, type: "text" },
    { name: "second_name", placeholder: "Second Name", value: inputValue.second_name, type: "text" },
    { name: "email_address", placeholder: "Email Address", value: inputValue.email_address, type: "email" },
    { name: "password", placeholder: "Password", value: inputValue.password, type: "password" },
  ]
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()



  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  // register function
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(inputValue)

    try{
      const res = await axios.post('http://127.0.0.1:8000/api/users/register', inputValue)

      if(res.status != 201) setError(res.data.serializer.error)

      navigate('/login')
    }
    catch (err) {
      setError(error.res?.data?.serializer?.error || "An error occured")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="relative flex h-[100vh] w-full justify-center items-center">
      <div className="h-[50vh] bg-primary absolute top-0 left-0 w-full" />
      <form 
        className="bg-background p-10 border border-primary/20 z-50 w-[90%] md:w-1/2 lg:w-[35%] rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-5">Hi, Create an account</h1>

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
          <Button 
            type="submit" 
            className={` ${loading ? 'bg-primary/60' : ''}`}
          >
            { loading ? "Registering..." : "Register" }
          </Button>
        </div>

        <div className="my-5 grid gap-3">
          <h3 className="text-center">OR</h3>

          <Button
            variant="secondary"
            className="flex gap-3 hover:border hover:border-primary"
          >
            <FaGoogle />
            <span>Continue with google</span>
          </Button>
        </div>

        { error && <p className="text-red-400 my-2 text-center">{error}</p> }

        <p className="text-muted-foreground text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

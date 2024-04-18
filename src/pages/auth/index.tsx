import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

// components
import FormLogin from "@/components/auth/formLogin";
import FormSignup from "@/components/auth/formSignup";
import NavAuth from "@/components/auth/navAuth";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsIndex, setErrors] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    let errors$ = {
      // name: '',
      emailLogin: '',
      passwordLogin: '',
    };

    // if (!name) {
    //     errors.name = 'Name is required.';
    // }

    if (!/\S+@\S+\.\S+/.test(email) && email !== "") {
      errors$.emailLogin = "Email is invalid.";
    }

    if (password.length < 8 && password !== "") {
      errors$.passwordLogin = "Password must be at least 8 characters.";
    }

    console.log(errors$);
    

    setErrors(errors$);
    setIsFormValid(Object.keys(errors$).length === 0);
  };

  function onSubmit(e: any) {
    e.preventDefault();

    let updatedErrors = {
      ...errorsIndex,
      emailLogin: '',
      passwordLogin: '',
    };
  
    if (email === "") {
      updatedErrors.emailLogin = 'Email is required.';
    }
  
    if (password === "") {
      updatedErrors.passwordLogin = 'Password is required.';
    }
  
    setErrors(updatedErrors);

    if (password !== "" && password !== "" && isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  }

  const handleFormChange = (isActive: boolean) => {
    setIsLogin(isActive);
  };

  const inputChange = (e: any) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);

    if(name === "password") {
      setPassword(value)
    } else if(name === "email") {
      setEmail(value)
    }
  };

  return (
    // <FormProvider >
    <div className="flex flex-col items-center justify-center my-[13.344em] w-full">
      <div className="flex flex-col space-y-6 border border-black-4 rounded shadow-[0_8px_40px_-5px_rgba(0,0,0,0.2)] w-[21.63%] ">
        <NavAuth handleFormChange={handleFormChange} />
        <form onSubmit={onSubmit}>
          {isLogin ? (
            <FormLogin
              errors={errorsIndex}
              // isFormValid = {isFormValid}
              inputChange={(e) => inputChange(e)}
            />
          ) : (
            <FormSignup refs={"signup"} />
          )}
        </form>
      </div>
    </div>
    // </FormProvider>
  );
};

export default Index;

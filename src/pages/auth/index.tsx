import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

// components
import FormLogin from "@/components/auth/formLogin";
import FormSignup from "@/components/auth/formSignup";
import NavAuth from "@/components/auth/navAuth";

// service
import AuthService from "@/services/Auth/auth.service";
import User from "@/models/user.model";

const Index = () => {
  const router = useRouter();
  const [userConnected, setUser] = useState<User>()

  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsIndex, setErrors] = useState({
    username: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [username, password]);

  const validateForm = () => {
    let errors$ = {};

    if (!username && username !== "") {
        errors$.username = 'Username is required.';
    }

    // if (!/\S+@\S+\.\S+/.test(email) && email !== "") {
    //   errors$.email = "Email is invalid.";
    // }

    if (password.length < 8 && password !== "") {
      errors$.password = "Password must be at least 8 characters.";
    }

    console.log(errors$);
    

    setErrors(errors$);
    setIsFormValid(Object.keys(errors$).length === 0);
  };

  const handleFormChange = (isActive: boolean) => {
    setIsLogin(isActive);
  };

  const inputChange = (e: any) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);

    if(name === "password") {
      setPassword(value)
    } 
    else if(name === "username") {
      setUsername(value)
    }
    // else if(name === "email") {
    //   setEmail(value)
    // }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    let updatedErrors = {
      ...errorsIndex,
    };
  
    // if (email === "") {
    //   updatedErrors.email = 'Email is required.';
    // }

    if (username === "") {
      updatedErrors.username = 'Username is required.';
    }
  
    if (password === "") {
      updatedErrors.password = 'Password is required.';
    }
  
    setErrors(updatedErrors);

    if (password !== "" && password !== "" && isFormValid) {
      console.log("Form submitted successfully!");

      try {
        const response: User = await AuthService.login({ username, password });
        console.log('Connexion réussie !', response);

        setUser(response)

        // Rediriger vers la page d'accueil ou autre page après la connexion réussie
        router.push('/');
      } catch (error: any) {
        console.error('Erreur lors de la connexion:', error.response.data.message);
        // setErrorMessage(error.message);
      }

    } else {
      console.log("Form has errors. Please correct them.");
    }
  }

  useEffect(() => {
    localStorage.setItem('token', userConnected?.token!);
  }, [userConnected])

  return (
    // <FormProvider >
    <div className="flex flex-col items-center justify-center my-[13.344em] w-full">
      <div className="flex flex-col space-y-6 border border-black-4 rounded shadow-[0_8px_40px_-5px_rgba(0,0,0,0.2)] w-[21.63%] ">
        <NavAuth handleFormChange={handleFormChange} />
        <form onSubmit={onSubmit}>
          {isLogin ? (
            <FormLogin
              errors={errorsIndex}
              isFormValid = {isFormValid}
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

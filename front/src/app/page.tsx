'use client';
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen items-center justify-center bg-zinc-100">
      <div className="
        hidden md:flex flex-col md:h-full w-full md:w-3/5 items-center justify-center bg-[var(--color-amethystSmoke-400)]"
      >
        <Image 
          src="/images/ChatGPTSketchFinancas.png" 
          alt="SketchFinances"
          width={545}
          height={851}
          style={{ boxShadow: '0px 0px 10px 5px var(--color-amethystSmoke-500)' }}
          className="
            h-auto max-h-full rounded-4xl bg-[var(--color-amethystSmoke-400)]
            border border-4xl border-[var(--color-amethystSmoke-800)]"
        />
      </div>
      <div className="
        flex flex-col w-full items-center justify-center md:w-2/5 h-full gap-6 md:gap-12  
      ">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-amethystSmoke-800)]">
            Login
          </h1>
          <form className="flex flex-col gap-1 w-full">
            <div className="flex flex-col gap-1 items-center w-full">
              <TextInput 
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                label="Email"
                />
              <TextInput 
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                label="Password"
                />
            </div>
          </form>
        </div>
        <div className="flex items-center w-full px-4">
          <div className="flex-1 h-px bg-[var(--color-amethystSmoke-500)]"></div>
          <span className="px-4 text-[var(--color-amethystSmoke-500)]">or</span>
          <div className="flex-1 h-px bg-[var(--color-amethystSmoke-500)]"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-amethystSmoke-800)]">
            Create an account
          </h1>
          <form className="flex flex-col gap-1 w-full">
            <div className="flex flex-col gap-1 items-center w-full">
              <TextInput 
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                label="Email"
                />
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-1 w-full items-center">
              <TextInput 
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                label="Name"
                />
              <TextInput 
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                value={lastName}
                label="Last Name"
                />
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-1 w-full items-center">
              <TextInput 
                onChange={(e) => setCreatePassword(e.target.value)}
                type="password"
                value={createPassword}
                label="Password"
                />
              <TextInput 
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                value={confirmPassword}
                label="Confirm Password"
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

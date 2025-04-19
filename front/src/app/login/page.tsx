'use client';
import { useAuth } from "@/components/auth/AuthProvider";
import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";
import { Enum } from "@/lib/Enum";
import { DecodedToken } from "@/lib/Token";
import { login } from "@/services/authService";
import { IconEye } from "@tabler/icons-react";
import { IconEyeClosed } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth() as { setUser: (user: DecodedToken) => void };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await login(email, password);
      setUser(response.data);
      router.push("/dashboard");
    } 
    catch (error: unknown) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen items-center justify-center bg-zinc-200">
      <div className="
        hidden md:flex flex-col md:h-full w-full md:w-3/5 items-center justify-center bg-zinc-300"
      >
        <Image 
          src="/images/ChatGPTSketchFinancas.png" 
          alt="SketchFinances"
          width={545}
          height={851}
          style={{ boxShadow: '0px 0px 10px 5px var(--color-heavy-metal-200)' }}
          className="
            h-auto max-h-full rounded-4xl bg-[var(--color-heavy-metal-200)]
            border border-4xl border-[var(--color-heavy-metal-200)]"
        />
      </div>
      <div className="
        flex flex-col w-full items-center justify-center md:w-2/5 h-full gap-6 md:gap-12  
      ">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-heavy-metal-700)]">
            Login Into {Enum.Project_Name}
          </h1>
          <div className="flex flex-col gap-1 w-1/2">
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
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  label="Password"
                  icon={!isPasswordVisible ? 
                    <IconEyeClosed onClick={() => setIsPasswordVisible(!isPasswordVisible)}/> : 
                    <IconEye onClick={() => setIsPasswordVisible(!isPasswordVisible)}/>
                  }
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Button color="heavyMetal" onClick={handleLogin} text={"Login"} icon={<IconEye/>}/>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center w-full px-4">
          <span className="px-1 text-[var(--color-heavy-metal-500)]">Don&apos;t have an account?</span>
          <Link href="/register" className="font-bold text-[var(--color-heavy-metal-500)]">Register</Link>
        </div>
      </div>
    </div>
  );
}

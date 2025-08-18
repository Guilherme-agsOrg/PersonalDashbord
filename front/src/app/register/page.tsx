'use client';
import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";
import { Enum } from "@/lib/Enum";
import { IconEye } from "@tabler/icons-react";
import { IconEyeClosed } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { register } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { UserAuthenticatedData } from "@/lib/Token";

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth() as { setUser: (user: UserAuthenticatedData) => void };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent multiple submissions
    
    setIsSubmitting(true);
    try {
      const response = await register(email, password, confirmPassword);
      setUser(response.data);
      router.push("/dashboard");
    } 
    catch (error: unknown) {
      console.error("Register failed:", error);
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
          Create an account in {Enum.Project_Name}
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
                                <TextInput 
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={isConfirmPasswordVisible ? "text" : "password"}
                value={confirmPassword}
                label="Confirm Password"
                icon={!isConfirmPasswordVisible ? 
                  <IconEyeClosed onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}/> : 
                  <IconEye onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}/>
                }
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Button color="heavyMetal" onClick={handleRegister} disabled={isSubmitting} text={"Register"} icon={<IconEye/>}/>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center w-full px-4">
          <span className="px-1 text-[var(--color-heavy-metal-500)]">Already have an account?</span>
          <Link href="/login" className="font-bold text-[var(--color-heavy-metal-500)]">Login</Link>
        </div>
      </div>
    </div>
  );
}

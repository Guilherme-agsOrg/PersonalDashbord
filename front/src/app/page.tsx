import LoginPage from "./login/page";

export default function HomePage() {

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen items-center justify-center bg-zinc-200">
    <div className="
        hidden md:flex flex-col md:h-full w-full md:w-3/5 items-center justify-center bg-zinc-300"
      >
        <LoginPage />
      </div>
    </div>
  )
}

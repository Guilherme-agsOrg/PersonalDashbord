import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-100">
      <div className="
        flex flex-col w-1/2 items-center justify-center m-5"
      >
        <Image 
          src="/images/OrganizzeDashboard.png" 
          alt="OrganizzeDashboard"
          width={545}
          height={851}
          style={{ boxShadow: '0px 0px 10px 5px var(--color-amethystSmoke-500)' }}
          className="rounded-4xl w-full bg-[var(--color-amethystSmoke-400)] border border-4xl border-[var(--color-amethystSmoke-800)]"
        />
      </div>
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div className="flex">
          <h1 className="text-4xl font-bold text-center text-[var(--color-amethystSmoke-800)]">
            Login
          </h1>
          <form>
            
          </form>
        </div>
        <div className="flex">
          <p className="text-center text-[var(--color-amethystSmoke-500)]">
            ------------------- or -------------------
          </p>
        </div>
        <div className="flex">
          <h1 className="text-4xl font-bold text-center text-[var(--color-amethystSmoke-800)]">
            Create an account
          </h1>
          <form>

          </form>
        </div>
      </div>
    </div>
  );
}

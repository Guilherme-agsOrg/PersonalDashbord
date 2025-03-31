import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-zinc-900 min-h-screen">
        <aside className="flex flex-col bg-black w-72 p-7 gap-10">
            {/* <Logo/>
            <Menu/> */}
        </aside>
        <div className="flex-1 flex flex-col">
            {/* <Cabecalho/> */}
            <main className="flex-1 p-7">
                {children}
            </main>
        </div>
    </div>
  );
}

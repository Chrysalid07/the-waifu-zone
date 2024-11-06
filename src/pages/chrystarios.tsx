import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-sky-800 flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row">
                <Link className="rounded-lg" href="/">
                    <img className="w-10 h-10 invert" src="https://cdn-icons-png.flaticon.com/512/1174/1174444.png" />
                </Link>
                <h1 className="text-7xl font-semibold text-white">Chrys-tarios</h1>
            </div>
            <div className="flex flex-col gap-8 p-4">
                <p className="text-2xl font-Bold rounded-lg bg-white/30 w-fit p-2">Chrysalid: Las fotos probablemente pasen toas a ser cuadra&apos; NMQD</p>
                <p className="text-2xl font-Bold rounded-lg bg-white/30 w-fit p-2">Chrysalid: Probablemente actualice la foto de Ellen </p>
            </div>
        </div>
    )
}
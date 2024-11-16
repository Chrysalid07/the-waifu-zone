import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-sky-800 flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row">
                <Link className="rounded-lg" href="/">
                    <img className="w-10 h-10 invert" src="/Pred images/Flecha.png" />
                </Link>
                <h1 className="text-7xl font-semibold text-white">Chrys-tarios</h1>
            </div>
            <div className="flex flex-col gap-8 p-4 bg-white/10 rounded-lg w-fit p-6">
                <p className="text-2xl font-Bold rounded-lg bg-white/30 w-fit p-2">Chrysalid: Locura, la 1.0 se viene. Basicamente porque se vienen basto de mejoras.</p>
                <p className="text-2xl font-Bold rounded-lg bg-white/30 w-fit p-2">Chrysalid: Pero ahora si que si, quien quiera descubrir el misterio de la 8ª waifu lo va a tener chungo.</p>
            </div>
        </div>
    )
}
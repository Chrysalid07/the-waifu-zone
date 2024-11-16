import Link from "next/link";

export default function Page() {

    return (
        <div className={`min-h-screen bg-[#ff7779] flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row g-12 p-4">
                <Link href="/">
                    <img className="w-10 h-10" src="/Pred images/Casa.webp" />
                </Link>
                <h1 className="text-6xl text-white">Ellen Joe</h1>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-white font-semibold text-4xl">Aquí no hay nada que hacer, solo disfruta de Ellen bailando.</h1>
                <img className="w-56 h-56 rounded-lg" src="/Waifus/ellen/Ellen dance.gif" alt="Ellen Dancing" />
            </div>
        </div>
    )
}
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [imageSource, setImageSource] = useState("/Waifus/akane/Akane Angry.gif")

    return (
        <div className={`min-h-screen bg-sky-800 flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row g-12 p-4">
                    <Link className="rounded-lg bg-white/10 h-16" href="/">
                        <img className="w-16 h-16" src="/No logo.png" />
                    </Link>
                    <Link href="/">
                        <img className="w-10 h-10 invert" src="/Pred images/Casa.webp" />
                    </Link>
                    <h1 className="text-7xl text-white">Akane</h1>
            </div>
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-white text-7xl font-semibold">Akane está enfadada!</h1>
                <p>
                    <img className="w-96 h-80 bg-white rounded-3xl" alt="Cambiar imagen" onMouseLeave={() => {
                        setImageSource("/Waifus/akane/Akane Angry.gif")
                    }} onMouseEnter={() => {
                        setImageSource("/Waifus/akane/Akane Happy.gif")}} src={imageSource} />
                </p>
                <h2 className="text-white font-semibold rounded-lg bg-rose-300/50 text-2xl">Coloca tu cursor sobre ella para hacerla feliz</h2>
            </div>
        </div>
    )
}
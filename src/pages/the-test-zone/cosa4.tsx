import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [imageSource, setImageSource] = useState("/Pokeball.png")

    return (
        <div className={`min-h-screen bg-black flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row g-12 p-4">
                    <Link className="rounded-lg invert" href="/the-test-zone">
                        <img className="w-10 h-10" src="/Pred images/Flecha.png" />
                    </Link>
                    <Link href="/">
                        <img className="w-10 h-10 invert" src="/Pred images/Casa.webp" />
                    </Link>
                    <h1 className="text-7xl text-white p-4">Tachación</h1>
            </div>
            <p>
                <img className="w-80 h-80 bg-white rounded-3xl" alt="Cambiar imagen" onMouseLeave={() => {
                    setImageSource("/Waifus/iono/Pokeball.png")
                }} onMouseEnter={() => {
                    setImageSource("/Waifus/iono/Pokeball tachada.png")}} src={imageSource} />
            </p>
        </div>
    )
}
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [imageSource, setImageSource] = useState("/Blue.png")

    return (
        <div className={`min-h-screen bg-sky-800 flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row g-12 p-4">
                <Link href="/">
                    <img className="w-10 h-10" src="Casa.webp" />
                </Link>
                <h1 className="text-7xl text-white">Ellen Joe</h1>
            </div>
            <div className=" flex flex-row gap-12">
                <img className="rounded-full w-96 h-96" src="/Zenless Zone Zero foto Ellen.png" alt="Ellen Joe" />
                <p>
                    <img className="w-80 h-96 bg-white rounded-3xl" alt="Cambiar imagen" onMouseLeave={() => {
                        setImageSource("/Blue.png")
                    }} onMouseEnter={() => {
                        setImageSource("/Pista 3.png")}} src={imageSource} />
                </p>
            </div>
        </div>
    )
}
import { useState } from "react";

export default function Page() {
    const [imageSource, setImageSource] = useState("/Red.png")

    return (
        <div className={`min-h-screen bg-[#a5313a] flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row p-4">
                <h1 className="text-7xl font-semibold text-white">Deadzone</h1>
            </div>
            <div className="flex flex-row gap-96">
                <div className="flex flex-col gap-8 p-4 bg-white/10 rounded-lg w-fit p-6">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-bold rounded-lg w-fit">The only things you need:</h4>
                        <p className="text-2xl rounded-lg w-fit">· It is a game</p>
                        <p className="text-2xl rounded-lg w-fit">· I never played it but I love it</p>
                        <p className="text-2xl rounded-lg w-fit">· There are 3 Clues on the web</p>
                        <p className="text-2xl rounded-lg w-fit">· It is a waifu, always a waifu</p>
                        <p className="text-2xl font-bold rounded-lg w-fit">Any question to my Discord</p>
                    </div>
                </div>
                <p>
                    <img className="w-96 h-80 bg-white" alt="Cambiar imagen" onMouseLeave={() => {
                        setImageSource("/Red.png")
                    }} onMouseEnter={() => {
                        setImageSource("/C2.png")}} src={imageSource} />
                </p>
            </div>
        </div>
    )
}
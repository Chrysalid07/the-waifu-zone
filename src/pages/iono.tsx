import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [selectedGame, setSelectedGame] = useState("Eq1")
    
    return (
        <div className={`min-h-screen bg-sky-800 flex flex-row gap-12 items-center justify-between pr-36`}>
            <div className="h-full flex flex-col gap-12 self-start">
                <div className="flex flex-row g-12 p-4">
                    <Link href="/">
                        <img className="w-10 h-10" src="Casa.webp" />
                    </Link>
                    <h1 className="text-7xl text-white p-4">Iono</h1>
                </div>
                <div className=" flex flex-row gap-12">
                    <img className="rounded-full w-96 h-96" src="/Z Iono photo.png" alt="Iono" />
                </div>
            </div>
            <div className="w-1/2 h-2/3 bg-white/20 flex flex-col rounded-lg overflow-hidden p-2 gap-2">
                <h1 className="text-4xl text-white font-extrabold">Equipo Pokémon</h1>
                <div className="w-full flex flex-row gap-2">
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "Eq1" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("Eq1")
                        }}
                    >
                        Gimnasio
                    </div>
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "Eq2" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("Eq2")
                        }}
                    >
                        Revancha
                    </div>
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "Eq3" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("Eq3")
                        }}
                    >
                        Club de la Liga
                    </div>
                </div>
                <div className="bg-white/50 w-full h-0.5 rounded-full" />
                {selectedGame == "Eq1" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/39/latest/20230113063807/Wattrel.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6e/latest/20221014145229/Bellibolt.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/5/51/latest/20200720152820/Luxio.png" className="aspect-square flex-grow w-40 h-52" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/2/25/latest/20200721105200/Mismagius.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="Pokeball tachada.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="Pokeball tachada.png" className="aspect-square flex-grow w-40 h-52" />
                    </div>
                </>}
                {selectedGame == "Eq2" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/latest/20230113063832/Kilowattrel.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6e/latest/20221014145229/Bellibolt.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20220216203321/Electrode.png" className="aspect-square flex-grow w-40 h-52" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/e/ee/latest/20200720153035/Luxray.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/2/25/latest/20200721105200/Mismagius.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="Pokeball tachada.png" className="aspect-square flex-grow w-40 h-52" />
                    </div>
                </>}
                {selectedGame == "Eq3" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/0/0a/latest/20230113063832/Kilowattrel.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20220216203321/Electrode.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6e/latest/20221014145229/Bellibolt.png" className="aspect-square flex-grow w-40 h-52" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/e/ee/latest/20200720153035/Luxray.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/e/ee/latest/20200827204228/Electivire.png" className="aspect-square flex-grow w-40 h-52" />
                        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/2/25/latest/20200721105200/Mismagius.png" className="aspect-square flex-grow w-40 h-52" />
                    </div>
                </>}
            </div>
        </div>
    )
}
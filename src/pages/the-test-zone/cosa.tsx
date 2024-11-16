import Link from "next/link"
import { useState } from "react"

export default function Page() {
    const [selectedGame, setSelectedGame] = useState("genshin")
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="flex flex-row">
                <Link className="rounded-lg bg-white" href="/the-test-zone">
                    <img className="w-10 h-10" src="/Pred images/Flecha.png" />
                </Link>
                <Link className="rounded-lg bg-white" href="/">
                  <img className="w-10 h-10" src="/Pred images/Casa.webp" />
                </Link>
            </div>
            <h1 className="text-4xl text-extrablack text-white">Rincón de pruebas</h1>
            <div className="w-1/2 bg-white/20 flex flex-col rounded-lg overflow-hidden p-2 gap-2">
                <div className="w-full flex flex-row gap-2">
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "genshin" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("genshin")
                        }}
                    >
                        Genshin Impact
                    </div>
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "hsr" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("hsr")
                        }}
                    >
                        Honkai: Star Rail
                    </div>
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "zzz" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("zzz")
                        }}
                    >
                        Zenless Zone Zero
                    </div>
                    <div
                        className={`text-white transition-all text-lg hover:bg-white/20 flex-grow rounded-lg px-2 font-bold select-none cursor-pointer ${selectedGame == "dokkan" ? "bg-white/10" : "bg-white/5"}`}
                        onClick={() => {
                            setSelectedGame("dokkan")
                        }}
                    >
                        Dokkan Battle
                    </div>
                </div>
                <div className="bg-white/50 w-full h-0.5 rounded-full" />
                {selectedGame == "genshin" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/gensin-impact/images/7/77/Gaming_Icon.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Gorou_Icon.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Aloy_Icon.png" className="aspect-square flex-grow" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/gensin-impact/images/3/35/Chongyun_Icon.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/gensin-impact/images/3/31/Cyno_Icon.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Lyney_Icon.png" className="aspect-square flex-grow" />
                    </div>
                </>}
                {selectedGame == "hsr" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/d/d3/Profile_Picture_Caelus_-_Welcome.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/c/c8/Sticker_PPG_08_Hook_01.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/b/b2/Profile_Picture_Stelle_-_Welcome.png" className="aspect-square flex-grow" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/0/07/Profile_Picture_Jing_Yuan_-_In_Leisure.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/6/6f/Sticker_PPG_06_Blade_01.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/4/47/Profile_Picture_Dan_Heng_-_Welcome.png" className="aspect-square flex-grow" />
                    </div>
                </>}
                {selectedGame == "zzz" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_2_Ellen.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7f/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_3_Seth01.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6b/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_2_Lycaon.png" className="aspect-square flex-grow" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/zenless-zone-zero/images/6/60/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_2_Billy.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/zenless-zone-zero/images/9/95/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_4_Caesar02.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/zenless-zone-zero/images/4/41/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_4_Burnice01.png" className="aspect-square flex-grow" />
                    </div>
                </>}
                {selectedGame == "dokkan" && <>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/dbz-dokkanbattle/images/a/a7/Card_1030200_thumb.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/dbz-dokkanbattle/images/1/19/Card_1026130_thumb_apng.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/dbz-dokkanbattle/images/0/09/Card_1017380_thumb_apng.png" className="aspect-square flex-grow" />
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <img src="https://static.wikia.nocookie.net/dbz-dokkanbattle/images/2/20/Card_1030210_thumb.png" className="aspect-square flex-grow" />
                        <img src="https://static.wikia.nocookie.net/dbz-dokkanbattle/images/6/60/Card_1012400_thumb_apng.png" className="aspect-square flex-grow" />
                        <img src="/C4.png" className="aspect-square flex-grow h-30 w-24" />
                    </div>
                </>}
            </div>
        </div>
    )
} 
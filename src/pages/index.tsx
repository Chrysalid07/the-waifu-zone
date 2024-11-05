import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";

export default function Home() {
  const [playing, setPlaying] = useState(false)
  const [play, {stop}] = useSound("/3NK3vSz.m4a", {
    interrupt: true
  })

  //useEffect(play, [play])

  return (
    <div className={`min-h-screen bg-sky-800 flex flex-col gap-12`}>
      <div className="flex flex-row g-12 p-4">
        <h1 className="text-7xl text-white">Monitas Chinas</h1>
        <div className="flex-grow" />
        <img className="padding-right w-12 h-12 opacity-5 cursor-pointer" src="https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20220228205623/Magnemite.png" onClick={() => {
          if (playing) {
            stop()
            setPlaying(false)
          } else {
            play()
            setPlaying(true)
          }
        }} />
        <Link href="the-test-zone" className="opacity-5">
          <img className="padding-right w-12 h-12" src="https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20220228205623/Magnemite.png" />
        </Link>
      </div>
      <div className=" flex flex-row p-4 gap-12">
        <Link className="rounded-full w-fit" href="/ellen">
          <img className="rounded-full w-80 h-80" src="/Zenless Zone Zero foto Ellen.png" alt="Ellen Joe" />
        </Link> 
        <Link className="rounded-full w-fit" href="/iono">
          <img className="rounded-full w-80 h-80" src="/Z Iono photo.png" alt="Iono" />
        </Link>
        <img className="rounded-full w-80 h-80" src="/To Be Determined.png" alt="Yoi"/>
      </div>
      <div className="flex flex-row p-4 gap-12">
        <img className="rounded-full w-80 h-80" src="/To Be Determined.png" alt="O.N.K.W" />
        <Link className="rounded-lg w-fit bg-yellow" href="/akane">
          <div className="flex flex-col rounded-lg bg-white/30">
            <img className="rounded-lg w-80 h-80" src="/Akane photo.jpg" alt="Akane (Temporarily)" />
            <div className="flex flex-col items-center">
              <h2 className="text-white font-extrabold">NEUVO</h2>
            </div>
          </div>
        </Link>
        <img className="rounded-full w-80 h-80" src="/To Be Determined.png" alt="Carrot (Probably)" />
      </div>
    <div className="p-4">
      <p className="text-2xl font-Bold rounded-lg bg-white/30 w-fit p-2">Comentario: Las fotos probablemente pasen toas a ser cuadra' NMQD</p>
    </div>
    <p className="text-2xl text-white">Tania Cabezona</p>
    </div>
  )
}

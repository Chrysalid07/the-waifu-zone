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
    <div className={`min-h-screen bg-sky-800 flex flex-col gap-8`}>
      <img className="fixed top-0 left-0 right-0 w-full h-20 opacity-30" src="/Test images/Test Banner 1.png" alt="Test" />
      <div className="flex flex-row fixed top-0 left-0 right-0 p-2">
        <h1 className="text-7xl font-semibold text-white">Monitas Chinas</h1>
        <Link className="w-fit" href="/chrystarios">
          <img className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/16/16021.png" alt="comments" />
        </Link></div>
      <div className="flex flex-row g-12 p-4">
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
        <Link className="rounded-lg w-fit" href="/ellen">
          <img className="rounded-lg w-80 h-80" src="/Waifus/Ellen photo.png" alt="Ellen Joe" />
        </Link> 
        <Link className="rounded-lg w-fit" href="/iono">
          <img className="rounded-lg w-80 h-80" src="/Waifus/Iono photo.png" alt="Iono" />
        </Link>
        <Link className="" href="/Y">
          <div className="flex flex-col rounded-lg bg-orange-300/50">
            <img className="rounded-full w-80 h-80" src="/Test images/To Be Determined.png" alt="Yoi"/>
            <div className="flex flex-col items-center">
              <h2 className="text-white font-extrabold">IN PROGRESS</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row p-4 gap-12">
        <img className="rounded-full w-80 h-80" src="/Test images/To Be Determined.png" alt="30 D.T (Rina)" />
        <Link className="rounded-lg w-fit bg-yellow" href="/akane">
          <div className="flex flex-col rounded-lg bg-white/30">
            <img className="rounded-lg w-80 h-80" src="/Waifus/Akane photo.jpg" alt="Akane" />
            <div className="flex flex-col items-center">
              <h2 className="text-white font-extrabold">NEUVO</h2>
            </div>
          </div>
        </Link>
        <img className="rounded-full w-80 h-80" src="/Test images/To Be Determined.png" alt="Carrot (Yotsuba)" />
      </div>
      <div className="flex flex-row p-4 gap-12">
        <img className="rounded-full w-80 h-80" src="/Test images/To Be Determined.png" alt="" />
        <img className="rounded-full w-80 h-80" src="/Test images/To Be Determined.png" alt="Pre K Now S (Sumire)" />
        <img className="rounded-full w-80 h-80" src="/Test images/To Be Determined.png" alt="" />
      </div>
    <p className="text-2xl text-white">Tania Cabezona</p>
    </div>
  )
}

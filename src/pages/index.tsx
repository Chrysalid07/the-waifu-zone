import Link from "next/link";

export default function Home() {
  return (
    <div className={`min-h-screen bg-sky-800 flex flex-col gap-12`}>
      <div className="flex flex-row g-12 p-4">
        <h1 className="text-7xl text-white">Monitas Chinas</h1>
        <Link href="cosa" className="absolute right-4 top-4">
          <img className="padding-right w-12 h-12" src="https://images.wikidexcdn.net/mwuploads/wikidex/8/80/latest/20220228205623/Magnemite.png" />
        </Link>
      </div>
      <div className=" flex flex-row gap-12">
        <Link className="rounded-lg bg-red-700/30 w-fit" href="ellen">
          <img className="rounded-full w-96 h-96" src="/Zenless Zone Zero foto Ellen.png" alt="Ellen Joe" />
        </Link>
        <Link className="rounded-lg bg-yellow-300/20" href="iono">
          <img className="rounded-full w-96 h-96" src="/Z Iono photo.png" alt="Iono" />
        </Link>
        <img className="rounded-full w-96 h-96" src="/To Be Determined.png" alt="Unknown"/>
      </div>

    <p className="text-2xl font-Bold">Texto de Prueba</p>
    <p className="text-2xl text-white">Tania Cabezona</p>
       
    </div>
  )
}

import Flickity from "react-flickity-component-module";
import "flickity/css/flickity.css"
import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";

export default function Home() {
  const [playing, setPlaying] = useState(false)
  const [play, {stop}] = useSound("/Music/3NK3vSz.m4a", {
    interrupt: true
  })

  //useEffect(play, [play])

  const items = [
    {
      src: '/Waifu News/Waifu news sign.png',
      href: '/news',
      altText: 'Waifu news test',
    },
    {
      src: '/Waifu News/Ellen Announcement.png',
      href: '/waifus/ellen',
      altText: 'Ellen Announcement',
    },
    {
      src: '/Waifu News/Iono Announcement.png',
      href: '/waifus/iono',
      altText: 'Iono Announcement',
    },
    {
      src: '/Waifu News/Yoimiya Announcement.png',
      href: '/waifus/yoimiya',
      altText: 'Yoimiya Announcement',
    },
    {
      src: '/Waifu News/rina_announcement.png',
      href: '/waifus/rina',
      altText: 'Rina Announcement',
    },
    {
      src: '/Waifu News/Akane Announcement.png',
      href: '/waifus/akane',
      altText: 'Akane Announcement',
    },
    {
      src: '/Waifu News/teaser_2_announcement.png',
      href: '/progress',
      altText: 'Teaser 2 Announcement',
    },
  ];

  return (
    <div className={`min-h-screen bg-sky-800 flex flex-col gap-8`}>
      <div className="flex flex-row fixed top-0 left-0 right-0 gap-6 p-2 z-10 overflow-auto whitespace-nowrap bg-sky-400/50">
        <h1 className="text-7xl font-semibold text-white">Monitas Chinas</h1>
        <Link className="flex-none" href="/chrystarios">
          <img className="h-16 w-16" src="https://cdn-icons-png.flaticon.com/512/16/16021.png" alt="comments" />
        </Link>
        <Link className="flex-none" href="/news">
          <img className="h-16 w-16" src="https://svgsilh.com/svg_v2/1096279.svg" alt="news" />
        </Link>
      </div>
      <div>{/* Spacer */}</div>
      <div>{/* Spacer */}</div>
      <div>{/* Spacer */}</div>
      <div>{/* Spacer */}</div>
      <div className="flex flex-row items-center justify-center">
        <Flickity
          className={'carousel w-1/2'}                
          elementType={'div'}                   
          options={{
            wrapAround: true,
            autoPlay: 3000
          }}
          disableImagesLoaded
          reloadOnUpdate
          static
        >
          {items.map((v, i) => {
            return (
              <Link key={i} href={v.href} className="w-2/3 mx-5">
                <img src={v.src} alt={v.altText} />
              </Link>
            )
          })}
        </Flickity>
      </div>
      <div>{/* Spacer */}</div>
      <div className="grid grid-cols-3 p-4 w-fit gap-4 md:gap-12 items-start">
        <Link href="/waifus/ellen">
          <img className="rounded-lg aspect-square w-80" src="/Waifus/Ellen photo.png" alt="Ellen Joe" />
        </Link> 
        <Link href="/waifus/iono">
          <img className="rounded-lg aspect-square w-80" src="/Waifus/Iono photo.png" alt="Iono" />
        </Link>
        <Link href="/waifus/yoimiya">
          <img className="rounded-lg aspect-square w-80" src="/Waifus/Yoimiya photo.png" alt="Yoi"/>
        </Link>
        <Link href="/waifus/rina">
          <div className="flex flex-col rounded-lg bg-white/30">
            <img className="rounded-lg aspect-square w-80" src="/Waifus/rina_photo.png" alt="30 D.T (Rina)"/>
            <div className="flex flex-col items-center">
              <h2 className="text-white font-extrabold">NEUVO</h2>
            </div>
          </div>
        </Link>
        <Link href="/waifus/akane">
          <div className="flex flex-col rounded-lg">
            <img className="rounded-lg aspect-square w-80" src="/Waifus/Akane photo.jpg" alt="Akane" />
          </div>
        </Link>
        <Link className="flex flex-col rounded-lg bg-orange-300/50" href="/progress">
          <img className="rounded-full aspect-square w-80" src="/Test images/To Be Determined.png" alt="Carrot (Yotsuba)" />
            <div className="flex flex-col items-center">
              <h2 className="text-white font-extrabold">IN PROGRESS</h2>
            </div>
        </Link>
        <img className="rounded-full aspect-square w-80" src="/Test images/To Be Determined.png" alt="Evil spirit's wrath" />
        <img className="rounded-full aspect-square w-80" src="/Test images/To Be Determined.png" alt="Pre K Now S (Sumire)" />
        <img className="rounded-full aspect-square w-80" src="/Test images/To Be Determined.png" alt="" />
      </div>
      <div className="flex flex-row g-12 p-4">
        <p className="text-2xl text-white">Tania Cabezona</p>
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
    </div>
  )
}

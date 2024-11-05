import Link from "next/link";

export default function Page() {
    const [imageSource, setImageSource] = useState("/puto ian/akane a.jpg")

    return (
        <div className={`min-h-screen bg-sky-800 flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]`}>
            <div className="flex flex-row g-12 p-4">
                    <Link href="/">
                        <img className="w-10 h-10" src="Casa.webp" />
                    </Link>
                    <h1 className="text-7xl text-white p-4">Akane</h1>
            </div>
            <p>
                <img className="w-80 h-80" alt="Cambiar imagen" onMouseLeave={() => {
                    setImageSource("/puto ian/akane a.jpg")
                }} onMouseEnter={() => {
                    setImageSource("/akane-kurokawa-oshi-no-ko.gif")}} src={imageSource} />
            </p>
        </div>
    )
}
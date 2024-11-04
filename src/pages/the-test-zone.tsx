import Link from "next/link";

export default function Page() {
    return (
        <div className={`min-h-screen bg-black flex flex-col font-[family-name:var(--font-geist-sans)]`}>
            <Link className="rounded-lg bg-white w-fit" href="/">
                <img className="w-10 h-10" src="Casa.webp" />
            </Link>
            <div className="flex flex-col p-8 gap-8 items-center">
            <h1 className="text-4xl text-white font-extrabold">The Test Zone</h1>
            <div className="flex flex-row w-full gap-8">
                <Link href="cosa">
                    <div className="rounded-lg w-full flex flex-col bg-white/20">
                        <img src="THE TABLA image.png" />
                        <div className="flex flex-col gap-2 p-8 items-center">
                            <h2 className="text-white font-bold text-4xl">THE TABLA</h2>
                        </div>
                    </div>
                </Link>
                <Link href="cosa2">
                    <div className="rounded-lg w-full flex flex-col bg-white/20">
                        <img src="THE CLICKER image.png" />
                        <div className="flex flex-col gap-2 p-8 items-center">
                            <h2 className="text-white font-bold text-4xl">THE CLICKER</h2>
                        </div>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    )
}
import Link from "next/link";

export default function Page() {
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
            </div>  
        </div>
    )
}